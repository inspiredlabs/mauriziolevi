<script context="module">
  export const prerender = true;
</script>

<script>
  // debug: consider a helper function inside `index.js`: stackoverflow.com/questions/25921319/escape-new-lines-with-js#25921448
  // learn: `shadowendpoints` syntax: youtube.com/watch?v=j-9D5UDyVOM&t=133s
  export let continents; // areas e nations
  export let spotLight; // viaggi in evidenza
  export let upcomingDepartures; // viaggi partenza

  import Snapper from '$lib/Snapper.svelte';
  export let posts; //<pre>{JSON.stringify(posts, null, 2)}</pre>

  let title = 'Maurizio Levi';
</script>


<!-- Inspector Gadget -->
<pre class="dn">
  <ul class="list pl0">
    {#each continents as area}
      <li>{area.descrizione}</li>
    {/each}
  </ul>
</pre>
<Snapper />

<ul>
  {#each spotLight as featuredDestination, i}
    <li>{i}:
      {@html featuredDestination.titolo_viaggio.replace(/\\r/g, '').replace(/\\n/g, '')}
      <pre>
        {@html featuredDestination.testo_per_sito.replace(/\\r/g, '').replace(/\\n/g, '')}
      </pre>
    </li>
  {/each}
</ul>

<ul>
  {#each upcomingDepartures as departure, i}
    <li>
      {@html departure.titolo_viaggio.replace(/\\r/g, '').replace(/\\n/g, '')}
      <pre>
        {@html departure.testo_per_sito.replace(/\\r/g, '').replace(/\\n/g, '')}
      </pre>
    </li>
  {/each}
</ul>


<svelte:head>
  <title>{title}</title>
</svelte:head>