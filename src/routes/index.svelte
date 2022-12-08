<script>
// note: CHECK THIS IS COMPLETE: consider a helper function inside `index.js`: stackoverflow.com/questions/25921319/escape-new-lines-with-js#25921448
// learn: `shadowendpoints` syntax: youtube.com/watch?v=j-9D5UDyVOM&t=133s

  export let homepage;

  // export let homepage;



  //export let destinations;
  import DestinationSlider from '$lib/DestinationSlider.svelte';


  // learn: `npm install -D svelte-paginate` from: github.com/TahaSh/svelte-paginate needs destructuring.
  // usage: `<PaginateBasic />` import PaginateBasic from '$lib/PaginateBasic.svelte';

  let title = 'Maurizio Levi';

  import TripSpotlight from '$lib/Pagination/TripSpotlight.svelte';
  import DepartingSoon from '$lib/Pagination/DepartingSoon.svelte';
  import Row from '$lib/Row.svelte';
  import Hero from '$lib/Hero/index.svelte';
  import Mission from '$lib/Mission/index.svelte';
  import Ways from '$lib/Ways/index.svelte';
  import News from '$lib/News/index.svelte';

  //let items = Object.keys(spotLight);
  //let items = Object.values(spotLight);
  //let items = Object.entries(spotLight); //usage: `{item[1].titolo_viaggio}`

  /*
  let travels = Object.entries(homepage.departing.travels).map(([key, value]) => value);
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

<!-- usage: <code class="silver">{JSON.stringify(homepage, null, 2)}</code> -->
<!-- fix: JSON boolean req. imageOverlay={homepage.hero.imageOverlay} -->
<Hero
  image={homepage.hero.image}
  payoff={homepage.hero.payoff}
  title={homepage.hero.title}
  location={homepage.hero.location}
  imageOverlay={true}
/>

<Mission
  title={homepage.mission.title}
  text={homepage.mission.text}
  motto={homepage.mission.motto}
  images={homepage.mission.images}
/>

<Row bg="bg-linen">
  <TripSpotlight
    payoff={homepage.inEvidence.payoff}
    headline={homepage.inEvidence.title}
    serp={homepage.inEvidence.text}
    nurture={homepage.inEvidence.cta}
    items={homepage.inEvidence.travels}
  />
  <DepartingSoon
    payoff={homepage.departing.payoff}
    headline={homepage.departing.title}
    serp={homepage.departing.text}
    nurture={homepage.departing.cta}
    items={homepage.departing.travels}
  />
  <hr />
</Row>

<!-- learn: `DestinationSlider/index.svelte`, is `'isSelfAccepting'` -->
<DestinationSlider destinations={homepage.destinationsSlider} />

<!-- fix: imageOverlay={homepage.travelLines.imageOverlay} -->
<Ways
  payoff={homepage.travelLines.payoff}
  title={homepage.travelLines.title}
  text={homepage.travelLines.text}
  lines={homepage.travelLines.lines}
  imageOverlay={true}
/>

<!-- fix: `Kel12 middle-ware` empty component at the time of writing -->
<News
  payoff={homepage.blog.payoff}
  title={homepage.blog.title}
  text={homepage.blog.text}
  contents={homepage.blog.contents}
/>


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