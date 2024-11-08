<script lang="ts">
	import { stations } from '$lib/stations';
	import { type Icon } from 'lucide-svelte';
	import { TrainFrontTunnel, TrainFront, TramFront, Ship, Bus, MapPin } from 'lucide-svelte';
	import { Input } from '../ui/input';
	import { Card } from '../ui/card';
	import { Button } from '../ui/button';
	import { goto } from '$app/navigation';
	import { haversineDistance } from '$lib/utils';
	import type { Station } from '$lib/types';

	const BASE_URL = `${window.location.origin}${import.meta.env.BASE_URL}`;

	let query = $state('');
	const results = $derived(
		Object.entries(stations)
			.map(([, value]) => value)
			.filter((station) => station.name.toLowerCase().includes(query.toLowerCase()))
			.slice(0, 15)
	);

	let selectedIndex: number = $state(0);

	function getVehicleIcon(vehicle: number): typeof Icon {
		switch (vehicle) {
			case 0:
				return TramFront;
			case 1:
				return TrainFrontTunnel;
			case 2:
				return TrainFront;
			case 3:
				return Bus;
			case 4:
				return Ship;
			default:
				return Bus;
		}
	}

	// Handle keyboard navigation
	const handleKeyDown = (event: KeyboardEvent) => {
		if (results.length === 0) return;

		if (event.key === 'ArrowDown') {
			selectedIndex = (selectedIndex + 1) % results.length;
			event.preventDefault();
		} else if (event.key === 'ArrowUp') {
			selectedIndex = (selectedIndex - 1 + results.length) % results.length;
			event.preventDefault();
		} else if (event.key === 'Enter') {
			const selectedStation = results[selectedIndex];
			if (selectedStation) {
				const url = new URL(`/station/${selectedStation.id}`, BASE_URL);
				goto(url.toString());
				query = '';
			}
		}
	};

	const findStation = () => {
		if (!navigator.geolocation) {
			alert('Geolocation is not supported by your browser');
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(position) => {
				const userLat = position.coords.latitude;
				const userLon = position.coords.longitude;

				let closestStation: null | Station = null;
				let minDistance = Infinity;

				for (const station of Object.values(stations)) {
					const distance = haversineDistance(userLat, userLon, station.lat, station.lon);

					if (distance < minDistance) {
						minDistance = distance;
						closestStation = station;
					}
				}

				if (closestStation) {
					const url = new URL(`/station/${closestStation.id}`, BASE_URL);
					goto(url.toString());
				} else {
					alert('No nearby station found');
				}
			},
			(error) => {
				console.error('Error getting location:', error);
				alert('Unable to retrieve your location');
			}
		);
	};
</script>

<svelte:window on:keydown={handleKeyDown} />
<Card tabindex={0}>
	<div class="m-1 flex items-center">
		<Input
			placeholder="Find a station"
			bind:value={query}
			onchange={() => (selectedIndex = 0)}
			class="flex-grow"
		/>
		<Button variant="outline" class="ms-1" onclick={findStation}>
			<MapPin />
		</Button>
	</div>
	{#if results.length === 0 && query !== ''}
		<div class="my-2 text-center text-lg text-gray-600">No results found</div>
	{:else if query !== ''}
		<ul class="mt-1">
			{#each results as station, index}
				<a
					onclick={() => (query = '')}
					href={new URL(`/station/${station.id}`, BASE_URL).toString()}
				>
					<li
						class={`flex items-center rounded-sm px-2 py-1 text-gray-600 hover:cursor-pointer ${selectedIndex === index ? 'bg-secondary' : 'hover:bg-secondary'}`}
					>
						<div class="flex items-center">
							{#each station.vehicles as vehicle}
								<!-- svelte-ignore svelte_component_deprecated -->
								<svelte:component
									this={getVehicleIcon(vehicle)}
									class="me-1 h-5 w-5 text-gray-600"
								/>
							{/each}
							<p class="ms-1">{station.name}</p>
						</div>
					</li>
				</a>
			{/each}
		</ul>
	{/if}
</Card>
