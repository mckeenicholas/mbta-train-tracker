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
	import { fetchData } from '$lib/utils';
	import Occupancydata from './occupancydata.svelte';

	const { station, lines }: { station: Station; lines: string[] } = $props();
	const { lat, lon } = station;

	const vehicleEndpoint = new URL('https://api-v3.mbta.com/vehicles');
	vehicleEndpoint.searchParams.append('filter[route]', lines.join(','));
	vehicleEndpoint.searchParams.append('filter[revenue]', 'REVENUE');

	const fetchVehicles = () => fetchData<ApiResponse<Vehicle[]>>(vehicleEndpoint);

	let modalState = $state(false);
	let selectedVehicle = $state<Vehicle | null>(null);

	const nextStopEndpoint = $derived(
		new URL(`https://api-v3.mbta.com/stops/${selectedVehicle?.relationships.stop.data.id}`)
	);

	const getNextStop = () => fetchData<ApiResponse<StopData>>(nextStopEndpoint);

	const vehicleQuery = createQuery({
		queryKey: ['vehicles', lines],
		queryFn: fetchVehicles,
		enabled: !!lines.length,
		refetchInterval: 15000
	});

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
			{#each $vehicleQuery.data.data as vehicle, idx (idx)}
				{@const routeData = routes[vehicle.relationships.route.data.id]}
				<Marker latLng={[vehicle.attributes.latitude, vehicle.attributes.longitude]}>
					<DivIcon options={{ className: 'vehicle-icon' }}>
						<div class="relative z-10">
							<HoverCard.Root openDelay={0} closeDelay={0}>
								<HoverCard.Trigger>
									<button onclick={() => openModal(vehicle)}>
										<Mapicon
											rotation={vehicle.attributes.bearing}
											color={routeData?.color || '000000'}
										/>
									</button>
								</HoverCard.Trigger>
								<HoverCard.Content class="z-10 p-2">
									<p class="text-md font-bold">
										{routeData.name} towards {routeData.directions[
											vehicle.attributes.direction_id % 2
										]}
									</p>
									<div class="flex">
										<button
											class="hover:text-muted-foreground cursor-pointer italic underline"
											onclick={() => openModal(vehicle)}
										>
											More info
										</button>
									</div>
								</HoverCard.Content>
							</HoverCard.Root>
						</div>
					</DivIcon>
				</Marker>
			{/each}
		{/if}
		{#each lines as line (line)}
			{#if line in polylines}
				{@const shapes = polylines[line as keyof typeof polylines]}
				{#each shapes as shape (shape)}
					<Polyline
						latLngs={polyline.decode(shape)}
						options={{ color: `#${routes[line].color}` }}
					/>
				{/each}
			{/if}
		{/each}
	</Map>
	<Dialog.Root bind:open={modalState}>
		<div class="fixed z-50">
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
											In transit to {$nextStationQuery.data.data.attributes.name ||
												'Unknown Station'}
										{:else}
											{selectedVehicle.attributes.current_status}
										{/if}
									</p>
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
							<Occupancydata carriages={selectedVehicle.attributes.carriages} />
						</Dialog.Description>
					</Dialog.Header>
				{/if}
			</Dialog.Content>
		</div>
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

	:global(.vehicle-icon) {
		background-color: transparent;
	}
</style>
