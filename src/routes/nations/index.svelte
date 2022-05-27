<script context="module">
  export const prerender = true;
</script>

<script>
  export let nations;
  let title = 'Maurizio Levi';
</script>

<code>{JSON.stringify(nations, null, 2)}</code>

<svelte:head>
  <title>{title}</title>
</svelte:head>