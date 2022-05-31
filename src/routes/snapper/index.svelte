<script context="module">
  export const prerender = true;
</script>

<script>
  import Snapper from '$lib/Snapper.svelte';
  let title = 'Maurizio Levi';
  //export let posts; //<pre>{JSON.stringify(posts, null, 2)}</pre>

  let routes = [
    { path: '/' },
    { path: 'viaggi' },
    { path: 'partenze' },
    { path: 'chi-siamo' },
    { path: 'termini' },
  ];
</script>



<Snapper />

<ul>
{#each routes as route, i}
  <li>{i}: <a href="{route.path}">{route.path}</a></li>
{/each}
</ul>



<svelte:head>
  <title>{title}</title>
</svelte:head>