<script lang="ts">
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import '../app.css';

	const queryClient = new QueryClient({
		defaultOptions: { queries: { enabled: browser } }
	});

	let { children } = $props();
</script>

<QueryClientProvider client={queryClient}>
	<div class="mx-auto w-full lg:w-3/4">
		{@render children()}
	</div>
</QueryClientProvider>
