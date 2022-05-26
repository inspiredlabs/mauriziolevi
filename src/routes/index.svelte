<script context="module">
  export const prerender = true;
</script>

<script>
  // debug: consider a helper function inside `index.js`: stackoverflow.com/questions/25921319/escape-new-lines-with-js#25921448
  // learn: `shadowendpoints` syntax: youtube.com/watch?v=j-9D5UDyVOM&t=133s

  export let spotLight; // viaggi in evidenza
    //continents, // areas e nations
    //, upcomingDepartures; // viaggi partenza


  //import Snapper from '$lib/Snapper.svelte'; //<Snapper />
  //import PaginateBasic from '$lib/PaginateBasic.svelte'; //
  let title = 'Maurizio Levi';

  // debug: `Cannot read property 'slice' of undefined`
  // learn: `npm install -D svelte-paginate` from: github.com/TahaSh/svelte-paginate needs destructuring.
  import { paginate, LightPaginationNav } from 'svelte-paginate';

  let items = spotLight;
  let currentPage = 1;
  let pageSize = 3;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>



<ul class="items">
  {#each paginatedItems as item}
    <li class="item">
      {item}
    </li>
  {/each}
</ul>

<LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/>


<div class="measure-wide">

  <ul>
    {#each spotLight as featuredDestination, i}
      <li>{i}:
        {@html featuredDestination.titolo_viaggio.replace(/\\r/g, '').replace(/\\n/g, '').replace(/\\"/g, '') }
        <p>
          {@html featuredDestination.testo_per_sito.replace(/\\r/g, '').replace(/\\n/g, '').replace(/\\"/g, '') }
        </p>
      </li>
    {/each}
  </ul>

  <!-- <ul>
    {#each upcomingDepartures as departure, i}
      <li>
        {@html departure.titolo_viaggio.replace(/\\r/g, '').replace(/\\n/g, '').replace(/\\"/g, '')}
        <p>
          {@html departure.testo_per_sito.replace(/\\r/g, '').replace(/\\n/g, '').replace(/\\"/g, '')}
        </p>
      </li>
    {/each}
  </ul> -->
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<!-- Inspector Gadget -->
<!-- <pre class="dn">
  <ul class="list pl0">
    {#each continents as area}
      <li>{area.descrizione}</li>
    {/each}
  </ul>
</pre> -->