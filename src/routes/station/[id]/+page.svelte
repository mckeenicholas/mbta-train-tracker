<script lang="ts">
	import { page } from '$app/stores';
	import Transitline from '$lib/components/custom/transitline.svelte';
	import { createQuery } from '@tanstack/svelte-query';
	import type { ApiResponse, StationMap } from '$lib/types';
	import { stations } from '$lib/stations';
	import { ArrowLeft } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import Map from '$lib/components/custom/map.svelte';

	const stationId: string = $page.params.id;

	const endpoint = `https://api-v3.mbta.com/predictions?filter%5Bstop%5D=${stationId}&filter%5Brevenue%5D=REVENUE`;

	const fetchArrivalTimes = async (): Promise<ApiResponse> => {
		return await fetch(endpoint, {
			method: 'GET',
			headers: {
				accept: 'application/vnd.api+json'
			}
		}).then((r) => r.json());
	};

	const query = createQuery({
		queryKey: ['predictions', stationId],
		queryFn: fetchArrivalTimes,
		enabled: !!stationId,
		refetchInterval: 60000
	});

	const station = $derived(stations[stationId as keyof StationMap]);
</script>

<div>
	<Button variant="secondary" href="/" class="ms-4 mt-4">
		<ArrowLeft />
	</Button>
	<h1 class="-mt-4 mb-8 text-center text-4xl font-bold">
		{station.name}
	</h1>
	<div class="m-4">
		<Map {station}/>
	</div>
	{#if $query.isLoading}
		<p>Fetching times...</p>
	{:else if $query.isError}
		<p>Error fetching times.</p>
	{:else if $query.isSuccess}
		<Transitline data={$query.data.data} />
	{/if}
</div>
