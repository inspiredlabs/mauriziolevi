<script context="module">
  export const prerender = true;
</script>

<script>
  export let nations;
  let title = 'Maurizio Levi';
</script>

<!-- <code>{JSON.stringify(nations, null, 2)}</code> -->

<p>{nations.description.nation}</p>

<p>{nations.description.title}</p>

<p>{nations.description.text}</p>

{#each nations.description.images as image}
  <code>{image}<br></code>
{/each}

<p>{nations.infos.title}</p>

<p>{nations.infos.info}</p>

{#each nations.infos.info as column}
  <code>{column.title}<br></code>
  <code>{column.text}<br></code>
{/each}


<p>{nations.suggested_trips.payoff}</p>

<p>{nations.suggested_trips.title}</p>

<p>{nations.suggested_trips.text}</p>



{#each nations.suggested_trips.trips as trip}
  <code>{trip.length}<br></code>
  <code>{trip.title}<br></code>
  <code>{trip.excerpt}<br></code>
  <code>{trip.cta}<br></code>
  <code>{trip.image}<br></code>
  <code>{trip.starting_price}<br></code>
{/each}


<svelte:head>
  <title>{title}</title>
</svelte:head>