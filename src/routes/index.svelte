<script context="module">
  export const prerender = true;
</script>

<script>
  // note: CHECK THIS IS COMPLETE: consider a helper function inside `index.js`: stackoverflow.com/questions/25921319/escape-new-lines-with-js#25921448
  // learn: `shadowendpoints` syntax: youtube.com/watch?v=j-9D5UDyVOM&t=133s


  export let homepage;
  //export let spotLight; // viaggi in evidenza
    //continents, // areas e nations
    //, upcomingDepartures; // viaggi partenza


  import Snapper from '$lib/Snapper.svelte';
  //import PaginateBasic from '$lib/PaginateBasic.svelte'; //<PaginateBasic />
  let title = 'Maurizio Levi';

// learn: `npm install -D svelte-paginate` from: github.com/TahaSh/svelte-paginate needs destructuring.
  import { paginate, LightPaginationNav } from 'svelte-paginate';

  import TripSpotlight from '$lib/Pagination/TripSpotlight.svelte';
  import DepartingSoon from '$lib/Pagination/DepartingSoon.svelte';
  import Row from '$lib/Row.svelte';
  import Hero from '$lib/Hero/index.svelte';
  import Mission from '$lib/Mission/index.svelte';
  import Bespoke from '$lib/Bespoke/index.svelte';
  import News from '$lib/News/index.svelte';

  // learn: usage: `<DepartingSoon items={tripSpotlightItems} />`
  let tripSpotlight = Object.values(homepage.travels_in_evidence.travels);
  let tripSpotlightItems = tripSpotlight;


  // learn: usage: `<TripSpotlight items={departingSoonItems} />`
  let departingSoon = Object.values(homepage.departing_travels.travels);
  let departingSoonItems = departingSoon;

  //let items = Object.keys(spotLight);
  //let items = Object.values(spotLight);
  //let items = Object.entries(spotLight); //usage: `{item[1].titolo_viaggio}`

  /*
  let travels = Object.entries(homepage.departing_travels.travels).map(([key, value]) => value);
  console.log(travels) ;
  */

  /*
  let i = spotLight.forEach(function(item){
    console.log(item) ;
  }) ;
  */

  //let currentPage = 1;
  //let pageSize = 3;
  //$: paginateDepartingSoon = paginate({items, pageSize, currentPage});
  //$: paginateTripSpotlight = paginate({ tripSpotlightItems, pageSize, currentPage });
</script>

<!-- <code class="silver">{JSON.stringify(homepage.mission, null, 2)}</code> -->

<!-- fix: pass a boolean into `overlay_image`, w. `<Hero />` conditional -->
<Hero
  image={homepage.hero.image}
  payoff={homepage.hero.payoff}
  title={homepage.hero.title}
  location={homepage.hero.location}
  overlay_image={homepage.hero.overlay_image}
/>

<Mission
  title={homepage.mission.title}
  text={homepage.mission.text}
  motto={homepage.mission.motto}
  images={homepage.mission.images}
/>

<Row bg="bg-linen">
  <TripSpotlight
    payoff={homepage.travels_in_evidence.payoff}
    headline={homepage.travels_in_evidence.title}
    serp={homepage.travels_in_evidence.text}
    nurture={homepage.travels_in_evidence.cta}
    items={tripSpotlightItems}
  />

  <DepartingSoon
    payoff={homepage.departing_travels.payoff}
    headline={homepage.departing_travels.title}
    serp={homepage.departing_travels.text}
    nurture={homepage.departing_travels.cta}
    items={departingSoonItems}
  />
  <hr />
</Row>

<!-- fix: keyboard access not integrated onto `routes`/`<Menu />` -->
<Snapper />

<Bespoke
  payoff={homepage.travel_lines.payoff}
  title={homepage.travel_lines.title}
  text={homepage.travel_lines.text}
  lines={homepage.travel_lines.lines}
/>

<News
  news={homepage.blog}
/>

<!-- <code class="silver">{JSON.stringify(homepage.blog, null, 2)}</code> -->

<!-- <Row bg="bg-spa">
  <ul class="list pl0">
    {#each spotLight as featuredDestination, i}
      <li>{i}:
        {@html featuredDestination.titolo_viaggio.replace(/\\r/g, '').replace(/\\n/g, '').replace(/\\"/g, '') }
        <p>
          {@html featuredDestination.testo_per_sito.replace(/\\r/g, '').replace(/\\n/g, '').replace(/\\"/g, '') }
        </p>
      </li>
    {/each}
  </ul>
</Row> -->

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