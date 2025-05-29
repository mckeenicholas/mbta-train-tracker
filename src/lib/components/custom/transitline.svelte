<script lang="ts">
	import { routes } from '$lib/routes';
	import { type Prediction } from '$lib/types';
	import { getTimeDifference } from '$lib/utils';
	import Routecard from './routecard.svelte';
	const { data }: { data: Prediction[] } = $props();

	interface GroupedPredictions {
		[routeId: string]: {
			[directionId: number]: Date[];
		};
	}

	const routeTypeOrder = [1, 0, 2, 3, 4];
	const groupByType = (data: Prediction[]) => {
		const result: GroupedPredictions = {};
		data.forEach((prediction) => {
			const routeId = prediction.relationships.route.data.id;
			const directionId = prediction.attributes.direction_id;
			const arrivalTime = prediction.attributes.arrival_time
				? new Date(prediction.attributes.arrival_time)
				: null;

			if (arrivalTime !== null) {
				const timeDiff = getTimeDifference(arrivalTime);

				if (timeDiff >= 0) {
					if (!result[routeId]) {
						result[routeId] = {};
					}
					if (!result[routeId][directionId]) {
						result[routeId][directionId] = [];
					}

					result[routeId][directionId].push(arrivalTime);
				}
			}
		});

		const asList = Object.entries(result);

		return asList.sort((a, b) => {
			const typeComparison = routeTypeOrder[routes[a[0]].type] - routeTypeOrder[routes[b[0]].type];
			if (typeComparison !== 0) {
				return typeComparison;
			}
			if (a[0] < b[0]) {
				return -1;
			}
			if (a[0] > b[0]) {
				return 1;
			}
			return 0;
		});
	};
</script>

<ul>
	{#each groupByType(data) as item, index (index)}
		<Routecard data={item} />
	{/each}
</ul>
