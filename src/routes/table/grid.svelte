<script>
  import FakeDataTable from '$lib/FakeDataTable.svelte';
  // note: reset form input: codepen.io/inspiredlabs/pen/BgYooY
  // note: codepen.io/inspiredlabs/pen/wvyOwBp?editors=1100
  let title = 'Maurizio Levi';
</script>

<FakeDataTable />

<svelte:head>
  <title>{title}</title>
</svelte:head>