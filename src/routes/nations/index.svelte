<script context="module">
  export const prerender = true;
</script>

<script>
  import { page } from "$app/stores";

  // fix: Please add ${id}
  const baseUrl = 'https://viaggilevi.vercel.app'; // note: this isn't in `svelte.config.js`
  $: thisUrl = $page.url.pathname; // learn: webjeda.com/blog/sveltekit-highlight-menu

  // debug: `iSelfAccepting` error passing <Section>...</Section> with <section>
  import Row from '$lib/Row.svelte';
  import Hero from '$lib/Hero/index.svelte';

  export let nations;
  let title = 'I Viaggi di Maurizio Levi';
</script>

<!-- <code>{JSON.stringify(nations, null, 2)}</code> -->

<!-- fix: <Hero cta={nations.hero.cta} /> -->
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
      <!-- fix: SEO purposes {nations.description.introduction} -->
			<p class="pr4 fw5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna&nbsp;aliqua.</p>

      <!-- fix: <Montage /> -->
      <code class="bg-gold dn">
      {#each nations.description.images as image}
        MONTAGE: {image}
      {/each}
      </code>
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
    <div class="fl w-100 w-third-m w-third-l f6 lh-copy measure ">
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

    <!-- learn: pass this as `<BasicPagination />` -->
    {#each nations.suggested_trips.trips as trip}
      <code>{trip.length}<br></code>
      <code>{trip.title}<br></code>
      <code>{trip.excerpt}<br></code>
      <code>{trip.cta}<br></code>
      <code>{trip.image}<br></code>
      <code>{trip.starting_price}<br></code>
    {/each}

  </aside>
</Row>



<svelte:head>
  <!-- Learn: simplified SEO these on-page optimizations pass metadata -->
  <!-- Learn: SEO: you must have a distinct, descriptive title on every page-->
  <title>{nations.description.title}, {nations.description.nation} | {title}</title>

  <!-- Learn: SEO entice clicks with this SERP description -->
  <meta name="description" content={nations.description.introduction ? nations.description.introduction.substring(0, 80) : nations.description.text.substring(0, 80)}>
  <!-- fix: better syntax required -->
  <link rel="canonical" href="{baseUrl}{thisUrl}">
  <meta property="og:locale" content="it_IT">
  <meta property="og:type" content="article">
  <meta property="og:title" content="{nations.description.title}, {nations.description.nation} | {title}">
  <meta property="og:description" content={nations.description.introduction ? nations.description.introduction.substring(0, 80) : nations.description.text.substring(0, 80)}>
  <!-- fix: better syntax required -->
  <meta property="og:url" content="{baseUrl}{thisUrl}">
  <meta property="og:site_name" content={title}>
  <meta name="twitter:card" content="summary">
  <meta name="twitter:description" content={nations.description.introduction ? nations.description.introduction.substring(0, 80) : nations.description.text.substring(0, 80)}>
  <meta name="twitter:title" content="{nations.description.title}, {nations.description.nation} | {title}">
</svelte:head>