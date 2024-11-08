<script lang="ts">
	import { page } from '$app/stores';
	import Transitline from '$lib/components/custom/transitline.svelte';
	import { createQuery } from '@tanstack/svelte-query';
	import type { ApiResponse, Prediction, StationMap } from '$lib/types';
	import { stations } from '$lib/stations';
	import { ArrowLeft } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import Map from '$lib/components/custom/map.svelte';

	const stationId: string = $page.params.id;

	const fetchArrivalTimes = async (stationId: string): Promise<ApiResponse<Prediction[]>> => {
		const endpoint = new URL('https://api-v3.mbta.com/predictions');
		endpoint.searchParams.append('filter[stop]', stationId);
		endpoint.searchParams.append('filter[revenue]', 'REVENUE');

		return await fetch(endpoint.toString(), {
			method: 'GET',
			headers: {
				accept: 'application/vnd.api+json'
			}
		}).then((r) => r.json());
	};

	const stationQuery = createQuery({
		queryKey: ['predictions', stationId],
		queryFn: () => fetchArrivalTimes(stationId),
		enabled: !!stationId,
		refetchInterval: 60000
	});

	const station = $derived(stations[stationId as keyof StationMap]);
	const lines = $derived([
		...new Set($stationQuery.data?.data.map((item) => item.relationships.route.data.id))
	]);
</script>

<div>
	<Button variant="secondary" href={import.meta.env.BASE_URL} class="ms-4 mt-4">
		<ArrowLeft />
	</Button>
	<h1 class="-mt-4 mb-8 text-center text-4xl font-bold">
		{station.name}
	</h1>
	{#if $stationQuery.isLoading}
		<p>Fetching times...</p>
	{:else if $stationQuery.isError}
		<p>Error fetching times.</p>
	{:else if $stationQuery.isSuccess}
		<div class="m-4">
			<Map {station} {lines} />
		</div>
		<Transitline data={$stationQuery.data.data} />
	{/if}
</div>
