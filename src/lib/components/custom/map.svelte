<script lang="ts">
	import { Map, TileLayer, Marker, Popup, DivIcon, Polyline } from 'sveaflet';
	import { type ApiResponse, type StopData, type Station, type Vehicle } from '$lib/types';
	import { createQuery } from '@tanstack/svelte-query';
	import Mapicon from './mapicon.svelte';
	import { routes } from '$lib/routes';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { LoaderCircle } from 'lucide-svelte';
	import polylines from '$lib/polylines';
	import polyline from '@mapbox/polyline';

	const { station, lines }: { station: Station; lines: string[] } = $props();
	const { lat, lon } = station;

	const vehicleEndpoint = new URL('https://api-v3.mbta.com/vehicles');
	vehicleEndpoint.searchParams.append('filter[route]', lines.join(','));
	vehicleEndpoint.searchParams.append('filter[revenue]', 'REVENUE');

	const fetchVehicles = async (): Promise<ApiResponse<Vehicle>> => {
		return await fetch(vehicleEndpoint.toString(), {
			method: 'GET',
			headers: {
				accept: 'application/vnd.api+json'
			}
		}).then((r) => r.json());
	};

	const vehicleQuery = createQuery({
		queryKey: ['vehicles', lines],
		queryFn: fetchVehicles,
		refetchInterval: 15000
	});

	let modalState = $state(false);
	let selectedVehicle = $state<Vehicle | null>(null);

	const nextStopEndpoint = $derived(
		new URL(`https://api-v3.mbta.com/stops/${selectedVehicle?.relationships.stop.data.id}`)
	);
	const getNextStop = async (): Promise<ApiResponse<StopData>> => {
		return await fetch(nextStopEndpoint.toString(), {
			method: 'GET',
			headers: {
				accept: 'application/vnd.api+json'
			}
		}).then((r) => r.json());
	};

	const nextStationQuery = $derived(
		createQuery({
			queryKey: ['nextStation', selectedVehicle?.id],
			queryFn: getNextStop,
			enabled: modalState,
			refetchInterval: 60000
		})
	);

	const openModal = (vehicle: Vehicle) => {
		selectedVehicle = vehicle; // Set the route data to be displayed in the modal
		modalState = true;
	};
</script>

<div class="map">
	<Map
		options={{
			center: [lat, lon],
			zoom: 14
		}}
	>
		<TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
		<Marker latLng={[lat, lon]}>
			<Popup
				options={{
					content: station.name
				}}
			></Popup>
		</Marker>
		{#if $vehicleQuery.isSuccess}
			{#each $vehicleQuery.data.data as vehicle}
				{@const routeData = routes[vehicle.relationships.route.data.id]}
				<Marker latLng={[vehicle.attributes.latitude, vehicle.attributes.longitude]}>
					<DivIcon>
						<HoverCard.Root openDelay={0} closeDelay={0}>
							<HoverCard.Trigger>
								<button onclick={() => openModal(vehicle)}>
									<Mapicon
										rotation={vehicle.attributes.bearing}
										color={routeData.color && '000000'}
									/>
								</button>
							</HoverCard.Trigger>
							<HoverCard.Content class="p-2">
								<p class="text-md font-bold">
									{routeData.name} towards {routeData.directions[
										vehicle.attributes.direction_id % 2
									]}
								</p>
								<div class="flex">
									<button
										class="cursor-pointer italic underline hover:text-muted-foreground"
										onclick={() => openModal(vehicle)}
									>
										More info
									</button>
								</div>
							</HoverCard.Content>
						</HoverCard.Root>
					</DivIcon>
				</Marker>
			{/each}
		{/if}
		{#each lines as line}
			{#if line in polylines}
				{@const shapes = polylines[line as keyof typeof polylines]}
				{#each shapes as shape}
					<Polyline
						latLngs={polyline.decode(shape)}
						options={{ color: `#${routes[line].color}` }}
					/>
				{/each}
			{/if}
		{/each}
	</Map>
	<Dialog.Root bind:open={modalState}>
		<Dialog.Content>
			{#if selectedVehicle}
				{@const routeData = routes[selectedVehicle.relationships.route.data.id]}
				<Dialog.Header>
					<Dialog.Title
						>{routeData.name} towards {routeData.directions[
							selectedVehicle.attributes.direction_id % 2
						]}</Dialog.Title
					>
					<Dialog.Description>
						<div class="mb-2">
							{#if $nextStationQuery.isSuccess}
								<p>
									<span class="font-bold">Status:</span>
									{#if selectedVehicle.attributes.current_status === 'STOPPED_AT'}
										Currently stopped at {$nextStationQuery.data.data.attributes.name ||
											'Unknown Station'}
									{:else if selectedVehicle.attributes.current_status === 'INCOMING_AT'}
										Arriving at {$nextStationQuery.data.data.attributes.name || 'Unknown Station'}
									{:else if selectedVehicle.attributes.current_status === 'IN_TRANSIT_TO'}
										In transit to {$nextStationQuery.data.data.attributes.name || 'Unknown Station'}
									{:else}
										{selectedVehicle.attributes.current_status}
									{/if}
								</p>

								<!-- Speed -->
								<p>
									<span class="font-bold">Speed:</span>
									{selectedVehicle.attributes.speed ?? 0} m/s
								</p>
							{:else}
								<div class="m-4 flex items-center justify-center">
									<LoaderCircle class="animate-spin" />
								</div>
							{/if}
						</div>
						{#if selectedVehicle.attributes.carriages.length}
							<p class="font-bold"><span class="text-red-600">BETA:</span> Ride Occupancy</p>
							<ul class="ms-2">
								{#each selectedVehicle.attributes.carriages as carrige, index}
									<li>Car {index + 1}: {carrige.occupancy_status && 'No data available'}</li>
								{/each}
							</ul>
						{/if}
					</Dialog.Description>
				</Dialog.Header>
			{/if}
		</Dialog.Content>
	</Dialog.Root>
</div>

<style>
	.map {
		-webkit-transform: translate3d(0px, 0px, 0px);
		transform: translate3d(0px, 0px, 0px);
		-webkit-mask-image: -webkit-radial-gradient(white, black);
		mask-image: radial-gradient(white, black);
		-webkit-border-radius: 0.5rem;
		border-radius: 0.5rem;

		width: 100%;
		height: 400px;
	}
</style>
