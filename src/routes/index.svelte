<script context="module">
  export const prerender = true;
</script>

<script>
  import Snapper from '$lib/Snapper.svelte';
  let title = 'Maurizio Levi';
  export let posts; //<pre>{JSON.stringify(posts, null, 2)}</pre>
</script>


<ul>
{#each posts as post}
  <li>
    <a href={post.id}>{post.title}</a>
  </li>
{/each}
</ul>

<Snapper />

<svelte:head>
  <title>{title}</title>
</svelte:head>