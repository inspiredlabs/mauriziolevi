// note: ONLY call this API endpoint: `~api/posts.json.js`!
// learn: DON'T change the below string. Update `local || server` inside file:
<script context="module">
//export const prerender = true;
export const load = async ({ fetch }) => {
  const res = await fetch('https://viaggilevi.vercel.app/api/data');
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