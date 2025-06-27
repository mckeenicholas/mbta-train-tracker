<script lang="ts">
	import { User } from 'lucide-svelte';
	import { type OccupancyLevel } from '$lib/types';

	const { data }: { data: OccupancyLevel } = $props();

	const computeFillLevel = (level: OccupancyLevel) => {
		switch (level) {
			case 'EMPTY':
				return 0;
			case 'MANY_SEATS_AVAILABLE':
				return 1;
			case 'FEW_SEATS_AVAILABLE':
				return 2;
			case 'STANDING_ROOM_ONLY':
				return 3;
			case 'CRUSHED_STANDING_ROOM_ONLY':
			case 'FULL':
				return 4;
			default:
				return 0;
		}
	};

	const fillData = $derived.by(() => {
		const fillLevel = computeFillLevel(data);
		return Array(4)
			.fill(false)
			.map((_, i) => i < fillLevel);
	});
</script>

{#if data == 'NO_DATA_AVAILABLE'}
	<p>No data available</p>
{:else if data == 'NOT_ACCEPTING_PASSENGERS' || data == 'NOT_BOARDABLE'}
	<p>Not accepting passengers</p>
{:else}
	<span class="flex items-center">
		<User size={12} strokeWidth={3} color={fillData[0] ? '#FF0000' : '#71717b'} />
		<User size={12} strokeWidth={3} color={fillData[1] ? '#FF0000' : '#71717b'} />
		<User size={12} strokeWidth={3} color={fillData[2] ? '#FF0000' : '#71717b'} />
		<User size={12} strokeWidth={3} color={fillData[3] ? '#FF0000' : '#71717b'} />
	</span>
{/if}
