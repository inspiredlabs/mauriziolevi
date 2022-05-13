<script context="module">
export const prerender = true;
</script>

<script>
import Snapper from '$lib/Snapper.svelte';
let title = 'Maurizio Levi';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Snapper />