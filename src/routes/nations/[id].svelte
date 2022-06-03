<script context="module">
  //export const prerender = true;

  export const load = async ({ params, fetch }) => {
    let id = params.id;
    const response = await fetch(`http://kel12.therebelwatchtower.net/levi-nations/${id}`);
    // fix: http://localhost:7777/nations/2

    const nations = await response.json();

    return {
      props: {
        nations, // replace `nations` as `destinations`
      }
    };
  }

</script>

<script>
  import { page } from "$app/stores";
  $: thisUrl = $page.url.pathname;

  import Row from '$lib/Row.svelte';
  import Hero from '$lib/Hero/index.svelte';

  export let nations;
  let title = 'I Viaggi di Maurizio Levi';

  // fix: modularity
  import SwapMontage from '$lib/SwapMontage.svelte';

/********* PAGINATION **********/
  import { paginate, LightPaginationNav } from 'svelte-paginate';
  import Zed from '$lib/Pagination/Zed.svelte';

  let suggestedTrips = Object.values(nations.suggested_trips.trips);

  let items = suggestedTrips;
  let currentPage = 1;
  let pageSize = 3;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<!-- <pre class="bg-silver white">{JSON.stringify(nations, null, 2)}</pre> -->

<!-- fix: image={nations.hero.image} -->
<Hero
  image={nations.hero.image}
  payoff={nations.hero.payoff}
  title={nations.hero.title}
  location={nations.hero.location}
/>

<!-- <code class="bg-car">
  {nations.hero.image}<br>
  {nations.hero.payoff}<br>
  {nations.hero.title}<br>
  {nations.hero.location}<br>
</code> -->

<Row bg="bg-solitaire" id={`${nations.description.title.toLowerCase().replace(/&amp;/g, '').replace(/&nbsp;/g, '-').replace(/\s/g, '-').replace(/\,/g, '').replace(/(&gt;)(?:&nbsp;|&#8209;|<br>)+(\s?&lt;)/g,'$1$2').replace(/--/g, '-')}`}>
  <article class="ph2 ph0-ns ph0-m ph0-l">
    <!-- learn: Slot nesting, do you need clear-fix/`cf`? -->

    <h4 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
      <small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">{nations.description.nation}</small>
			<span class="fraunces">{nations.description.title}</span><br>
		</h4>

    <aside class="fl w-100 w-50-m w-50-l lh-copy measure ">
      <!-- fix: SEO demands `{nations.description.serp || .introduction}` -->
			<p class="pr4 fw5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna&nbsp;aliqua.</p>

      <!-- fix: <Montage /> -->
      <SwapMontage images={nations.description.images} />
		</aside>

		<div class="fw4 fl w-100 w-50-m w-50-l lh-copy measure">
      <p class="pb3">{nations.description.text}</p>
		</div>


    <!-- learn: break out <Info /> as reusable table -->
    <!-- fix: `Trip Info` component: -->
    <!-- debug: rename `infos`, it's too generic -->
    <h5 class="f3 f2-ns f2-m f2-l fw5">
      <span class="fraunces">
      {#if nations.infos.title.includes('utili')}
        {nations.infos.title.replace(/utili/g, '')}<span class="fraunces-i">utili</span>
      {:else}
        {nations.infos.title}
      {/if}
      <!-- note: consider ternary operator: stackoverflow.com/questions/10270351#10270387 -->
      </span>
    </h5>
    {#each nations.infos.info as column}
    <div class="fl w-100 w-third-m w-third-l f6 lh-copy measure pb4">
			<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2">{column.title}</small>
			<hr class="inherit b--golden-brown"/>
			<p class="pr4">{column.text}</p>
    </div>
    {/each}

  </article>
</Row>

<Row bg="bg-linen">
  <!-- learn: this is a paginator: `DECIDI DI PARTIRE Proposte di viaggio` -->
  <aside class="highlight db black-70 f5 f4-ns f3-m f3-l pv5 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto">
    <heading class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
      <small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">{nations.suggested_trips.payoff}</small>
      <h4 class="fraunces">
        {#if nations.suggested_trips.title.includes('di viaggio')}
          {nations.suggested_trips.title.replace(/di viaggio/g, '')}<span class="fraunces-i">di&nbsp;viaggio</span>
        {:else}
          {nations.suggested_trips.title}
        {/if}
      </h4>
      <p class="charcoal o-80 db f7 f7-ns f5-m f4-l fw4 mv0 pb2 lh-copy">{nations.suggested_trips.text}</p>
    </heading>


    <Row bg="bg-linen">
      <!-- debug: bg-red import Row from '$lib/Row.svelte'; -->
      <ul class="items list pl0 w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l">
          {#each paginatedItems as  {cta, excerpt, image, length, starting_price, title}, i}
            <Zed
              length={length}
              title={title}
              excerpt={excerpt}
              cta={cta}
              image={image}
              starting_price={starting_price}
            />
          {/each}
        </ul>
        <nav>
          <LightPaginationNav
            totalItems="{items.length}"
            pageSize="{pageSize}"
            currentPage="{currentPage}"
            limit="{1}"
            showStepOptions="{true}"
            on:setPage="{(e) => currentPage = e.detail.page}"
          />
        </nav>
      </Row>

  </aside>
</Row>

<svelte:head>
  <!-- Learn: simplified SEO these on-page optimizations pass metadata -->
  <!-- Learn: SEO: you must have a distinct, descriptive title on every page-->
  <title>{nations.description.title}, {nations.description.nation} | {title}</title>
  <!-- Learn: SEO entice clicks with this SERP description -->
  <!-- Note: why 80 chars? authorityhacker.com/seo-title-tags -->
  <meta name="description" content={nations.description.introduction ? nations.description.introduction.substring(0, 80) : nations.description.text.substring(0, 80)} />
  <!-- fix: better syntax required -->
  <link rel="canonical" href="{import.meta.env.VITE_BASEURL}{thisUrl}" />
  <meta property="og:locale" content="it_IT" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{nations.description.title}, {nations.description.nation} | {title}" />
  <meta property="og:description" content={nations.description.introduction ? nations.description.introduction.substring(0, 80) : nations.description.text.substring(0, 80)} />
  <!-- fix: better syntax required -->
  <meta property="og:url" content="{import.meta.env.VITE_BASEURL}{thisUrl}" />
  <!-- fix: provide `<meta property="fb:app_id" content="your_app_id" />`: css-tricks.com/essential-meta-tags-social-media/#aa-social-media-analytics -->
  <!-- learn: wikihow.com/Get-an-App-ID-on-Facebook from: facebook.com/I-Viaggi-di-Maurizio-Levi-207083192654850/-->
  <meta property="og:site_name" content={title} />
  <meta property="og:image" content={nations.hero.image} />
  <!-- learn: generic: <meta name="twitter:card" content="summary"> -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@viaggilevi" />
  <meta name="twitter:image" content={nations.hero.image} />
  <meta name="twitter:description" content={nations.description.introduction ? nations.description.introduction.substring(0, 80) : nations.description.text.substring(0, 80)} />
  <meta name="twitter:title" content="{nations.description.title}, {nations.description.nation} | {title}" />
</svelte:head>