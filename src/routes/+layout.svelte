<script lang="ts">
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	import '../app.css';
	const queryClient = new QueryClient();
	let { children } = $props();
</script>

<QueryClientProvider client={queryClient}>
	{@render children()}
</QueryClientProvider>
