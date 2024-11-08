<script lang="ts">
	const { rotation = 0, color }: { rotation: number; color: string } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	viewBox="-12 -12 24 24"
	fill="#{color}"
	stroke="#{color}"
	stroke-width="2"
	stroke-linecap="butt"
	stroke-linejoin="inherit"
	class="lucide lucide-navigation-2"
	style="transform: rotate({rotation}deg);"
>
	<polygon points="0 -10 7 9 0 5 -7 9 0 -10" />
</svg>
