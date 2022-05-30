<script context="module">
  //export const prerender = true;

  export const load = async ({ params, fetch }) => {
    let id = params.id;
    const response = await fetch(`http://kel12.therebelwatchtower.net/levi-destinations/${id}`);
    // from: youtube.com/watch?v=6lNrvFSRmwY
    // learn: alt. approach: youtube.com/watch?v=q-MN5eejZ1k
    // learn: launch ext. link: stackoverflow.com/questions/69378392/sveltekit-base-url-for-subdirectory-throws-404
    // note: very different from `/?q="input query"`: stackoverflow.com/questions/66637632/access-url-query-string-in-svelte

    const destinations = await response.json();

    return {
      props: {
        destinations, // replace `nations` as `destinations`
      }
    };
  }

</script>


<script>
  export let destinations;

  import Row from '$lib/Row.svelte';
  import Hero from '$lib/Hero/index.svelte';

  /********* PAGINATION **********/
  import { paginate, LightPaginationNav } from 'svelte-paginate';
  import Zed from '$lib/Pagination/Zed.svelte';
  let suggestedTrips = Object.values(destinations.suggested_trips.trips);

  let items = suggestedTrips;
  let currentPage = 1;
  let pageSize = 3;
  $: paginatedItems = paginate({ items, pageSize, currentPage });

</script>

<!-- <code class="silver">{JSON.stringify(nations, null, 2)}</code> -->


<Hero
  image={destinations.hero.image}
  payoff={destinations.hero.payoff}
  title={destinations.hero.title}
  location={destinations.hero.location}
  overlay_image={destinations.hero.overlay_image}
/>

<Row bg="bg-linen">
  <!-- learn: this is a paginator: `DECIDI DI PARTIRE Proposte di viaggio` -->
  <aside class="highlight db black-70 f5 f4-ns f3-m f3-l pv5 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto">
    <heading class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
      <small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">{destinations.suggested_trips.payoff}</small>
      <h4 class="fraunces">
        {#if destinations.suggested_trips.title.includes('di viaggio')}
          {destinations.suggested_trips.title.replace(/di viaggio/g, '')}<span class="fraunces-i">di&nbsp;viaggio</span>
        {:else}
          {destinations.suggested_trips.title}
        {/if}
      </h4>
      <p class="charcoal o-80 db f7 f7-ns f5-m f4-l fw4 mv0 pb2 lh-copy">{destinations.suggested_trips.text}</p>
    </heading>


    <Row bg="bg-linen">
      <!-- debug: bg-redimport Row from '$lib/Row.svelte'; -->
      <ul class="items list pl0 w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l">
          ZED
        </ul>

      </Row>

  </aside>
</Row>