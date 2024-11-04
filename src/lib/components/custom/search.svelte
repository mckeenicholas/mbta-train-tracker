<script lang="ts">
	import * as Command from '$lib/components/ui/command/index.js';
	import { stations } from '$lib/stations';
</script>

<Command.Root>
	<Command.Input placeholder="Search station..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		{#each stations as station}
			<a href={`station/${station.id}`}>
				<Command.Item class="hover:cursor-pointer">
					{station.name}
				</Command.Item>
			</a>
		{/each}
	</Command.List>
</Command.Root>
