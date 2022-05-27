<script context="module">
  export const prerender = true;
</script>

<script>
  export let homepage;
  let title = 'Maurizio Levi';
</script>


<code>{JSON.stringify(homepage, null, 2)}</code>


<svelte:head>
  <title>{title}</title>
</svelte:head>