<script lang="ts">
	import { page } from '$app/stores';
	import { createQuery } from '@tanstack/svelte-query';

	const stationId: string = $page.params.id;

	const fetchPredictions = async () => {
		const response = await fetch(
			`https://api-v3.mbta.com/predictions?filter%5Bstop%5D=${stationId}&filter%5Brevenue%5D=REVENUE`,
			{
				method: 'GET',
				headers: {
					accept: 'application/vnd.api+json'
				}
			}
		);
		return response.json();
	};

	const query = createQuery({
		queryKey: ['predictions', stationId],
		queryFn: fetchPredictions,
		enabled: !!stationId,
		refetchInterval: 60000
	});
</script>

{stationId}
{#if $query.isLoading}
	<p>Fetching times...</p>
{:else if $query.isError}
	<p>Error fetching times.</p>
{:else}
	{$query.data}
{/if}
