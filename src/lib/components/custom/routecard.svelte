<script lang="ts">
	import { routes } from '$lib/routes';
	import { Card } from '../ui/card';
	import { alpha, getTimeDifference } from '$lib/utils';

	interface ArrivalData {
		[directionId: number]: Date[];
	}

	const { data }: { data: [string, ArrivalData] } = $props();

	const route = routes[data[0] as keyof typeof routes];

	const getBackgroundColor = (baseColor: string) => {
		return alpha(baseColor, 0.9);
	};

	const formatTime = (time: number) => {
		if (time === 0) {
			return 'now';
		}
		return `${time} minute${time !== 1 ? 's' : ''}`;
	};
</script>

<Card
	style={`background: ${getBackgroundColor(`#${route.color}`)}; border-color: #${route.color}`}
	class="mx-4 my-3 flex flex-grow flex-col border-4 p-2"
>
	<ul>
		{#each Object.entries(data[1]) as [key, value] (key)}
			<li>
				<h2 style={`color: #${route.text_color}`} class="text-lg font-semibold">
					{route.name} to {route.directions[(parseInt(key) + 1) % 2]}
				</h2>

				<ul class="ps-4">
					{#each value as time, idx (idx)}
						<li>
							<p style={`color: #${route.text_color}`}>
								{`${formatTime(getTimeDifference(time))} at ${time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
							</p>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</Card>
