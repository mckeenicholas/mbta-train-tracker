<script lang="ts">
	import type { Carriage } from '$lib/types';
	import Carrigeoccupancy from './carrigeoccupancy.svelte';

	const { carriages }: { carriages: Carriage[] } = $props();

	const anyData = $derived(
		carriages.filter((carriage) => carriage.occupancy_status !== 'NO_DATA_AVAILABLE').length > 0
	);
</script>

{#if carriages.length && anyData}
	<p class="font-bold">Ride Occupancy</p>
	<table class="ms-2">
		<tbody>
			{#each carriages as carriage, index (index)}
				<tr class="flex items-center gap-1">
					<td>Car {index + 1}:</td>
					<td><Carrigeoccupancy data={carriage.occupancy_status}></Carrigeoccupancy></td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}
