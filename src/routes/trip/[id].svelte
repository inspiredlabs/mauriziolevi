<script context="module">
  //export const prerender = true;

  export const load = async ({ params, fetch }) => {
    let id = params.id;

    // fix: http://localhost:7777/trip/25070 || 25640 || 25660
    const response = await fetch(`http://kel12.therebelwatchtower.net/levi-single/${id}`);
    // from: youtube.com/watch?v=6lNrvFSRmwY
    // learn: alt. approach: youtube.com/watch?v=q-MN5eejZ1k
    // learn: launch ext. link: stackoverflow.com/questions/69378392/sveltekit-base-url-for-subdirectory-throws-404
    // note: very different from `/?q="input query"`: stackoverflow.com/questions/66637632/access-url-query-string-in-svelte

    const trip = await response.json();

    return {
      props: {
        trip,
      }
    };
  }

</script>

<script>
  import Row from '$lib/Row.svelte';
  import Hero from '$lib/Hero/index.svelte';

  export let trip;
  let title = 'I Viaggi di Maurizio Levi';

</script>

<!-- fix: image={nations.hero.image} -->
<Hero
  image={trip.hero.image}
  payoff={trip.hero.payoff}
  title={trip.hero.title}
  location={trip.hero.location}
/>

<div class="bg-gold">

  <code>{trip.price.title}</code>
  <code>{trip.price.starting_price}</code>
  <code>{trip.price.cta}</code>

  <code>{trip.gallery.title}</code>

  {#each trip.gallery.images as {image, location}, i}
    <code>{image}</code>
    <code>{location}</code>
  {/each}


  <code>{trip.departures.title}</code>
  <code>{trip.departures.length}</code>

  <!-- fix: `{trip.departures['nr-pax']}` breaks convention with what we normally use. -->
  <!-- learn: while `underscore_name` is acceptable, in future Python, Java/Kotlin & Javascript projects could benefit from OOTB Swift compatability -->
  <!-- learn: EG: `camelCaseKeyNames` in this Swift5 tutorial: youtu.be/xVj5xEEwTEk?t=414 -->
  <!-- note: we should maximise compatability now as it may hurt when we need to build the string in Apple's Swift: softwareengineering.stackexchange.com/questions/319698/is-it-bad-practice-to-use-hyphens-in-json-keys/422030#422030 -->
  <!-- note: this is obviously better than having to use a decoder/encoder: javatpoint.com/swiftyjson -->

  <code class="bg-red">{trip.departures['nr-pax']}</code>
  <code class="bg-red">{trip.departures['nr-pax-max']}</code>
  <code>{trip.departures.text}</code>
  <code>{trip.departures.dates.departure}</code>
  <code>{trip.departures.dates.return}</code>

  <code>{trip.tour_leaders.title}</code>
  <code>{trip.tour_leaders.text}</code>

  <!-- tour_leaders.experts -->
</div>

<style>
	code {
		display: block;
		padding-bottom: 2.5rem;
	}
</style>

<!-- <code>{trip.title}</code><br>
<code>{trip.body}</code> -->