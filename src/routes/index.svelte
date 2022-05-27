<script context="module">
  export const prerender = true;
</script>

<script>
  // debug: consider a helper function inside `index.js`: stackoverflow.com/questions/25921319/escape-new-lines-with-js#25921448
  // learn: `shadowendpoints` syntax: youtube.com/watch?v=j-9D5UDyVOM&t=133s


  export let homepage;
  export let spotLight; // viaggi in evidenza
    //continents, // areas e nations
    //, upcomingDepartures; // viaggi partenza


  import Snapper from '$lib/Snapper.svelte';
  //import PaginateBasic from '$lib/PaginateBasic.svelte'; //<PaginateBasic />
  let title = 'Maurizio Levi';

  // debug: `Cannot read property 'slice' of undefined`
  // learn: `npm install -D svelte-paginate` from: github.com/TahaSh/svelte-paginate needs destructuring.
  import { paginate, LightPaginationNav } from 'svelte-paginate';

  //let items = Object.keys(spotLight);
  //let items = Object.values(spotLight);
  //let items = Object.entries(spotLight); //usage: `{item[1].titolo_viaggio}`


  let tripSpotlight = Object.values(homepage.travels_in_evidence.travels);
  console.log(tripSpotlight);

  //let items = Object.values(spotLight);
  let departingSoon = Object.values(homepage.departing_travels.travels);
  console.log(departingSoon);

  let items = departingSoon;

  /*
  let travels = Object.entries(homepage.departing_travels.travels).map(([key, value]) => value);
  console.log(travels) ;
  */

  /*
  let i = spotLight.forEach(function(item){
    console.log(item) ;
  }) ;
  */

  let currentPage = 1;
  let pageSize = 3;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>



<Snapper />


<!-- <code>{JSON.stringify(my_homepage, null, 2)}</code> -->

<ul class="items">
  {#each paginatedItems as  {cta, excerpt, image, length, starting_price, title}, i}
    <li class="item">
      <p>{excerpt}</p>
      <code>{image}</code>
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