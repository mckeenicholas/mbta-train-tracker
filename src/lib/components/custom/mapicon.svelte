<script lang="ts">
	const { rotation = 0, color }: { rotation: number; color: string } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	viewBox="0 0 12 12"
	fill="#{color}"
	stroke="#{color}"
	stroke-width="2"
	stroke-linecap="butt"
	stroke-linejoin="inherit"
	class="lucide lucide-navigation-2"
	style="transform: rotate({rotation}deg);"
>
	<polygon points="6 1 9.5 10.5 6 8.5 2.5 10.5 6 1" />
</svg>
