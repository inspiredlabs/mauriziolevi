
<script context="module">
export const prerender = true;

// note: ONLY call this API endpoint: `/api/data.json`, don't hit JSON directly.
// learn: DON'T change this string! Update `static/data/destinations.json`:
export const load = async ({ fetch }) => {
  const res = await fetch('/data.json');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}
</script>

<script>
import Snapper from '$lib/Snapper.svelte';
let title = 'Maurizio Levi';

export let data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<pre>{JSON.stringify(data, null, 2)}</pre>



<Snapper />