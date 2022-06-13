<script>
export let payoff;
export let title;
export let text;

export let lines; /* Array */
export let imageOverlay;

import Row from '$lib/Row.svelte'; /* <Row bg="bg-linen"></Row> */
</script>

<!--
Be yourself
Bespoke itineraries
- Expert Guided Tour
- Trekking Expeditions
- Tailor-made Package
- Waterways
- Photo Safari
- Mountain Queen (Marmolada: the Queen of the Dolomites)
- Luxury Cruise -->



<section class="db w-100 bg-linen">
	<article class="highlight db black-70 f5 f4-ns f3-m f3-l lh-copy pb6 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto pv5">

		<ul class="mv0 items list pl0 w-100 flex flex-wrap justify-between flex-column flex-column-ns flex-row-m flex-row-l">

			<li class="w-100 w-100-ns w-30-m w5-l ">
				<h4 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
					<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">il tuo essere</small>
					<!-- {payoff} -->
					<span class="fraunces">Linee</span>
					<span class="fraunces-i">di&nbsp;viaggio</span>
					<!-- {@html headline.replace('<i', '<span class="fraunces-i"').replace('</i>', '</span>')} -->
				</h4>
				<p class="mt0 fw4 measure lh-copy">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<!-- {serp} -->
				<!-- <a href={nurture} class="link pointer br-pill ba bw1 pv2 ph4 bg-transparent b--golden-brown golden-brown hover-bg-white-50 ts1-white transition-bg tc f5 f5-ns f7-m f5-l ttu tracked ">esplora</a> -->
			</li>

			<!-- note; itinerary -->
			{#each lines as { title, cta, image }, i}

			{#if !title }
			<li class="w-100 w-100-ns w-30-m w5-l pb3"></li>
			{:else}
			<li class="w-100 w-100-ns w-30-m w5-l pb3">

				<a title={title} href="{cta}" class="link">
					<!-- fix: style="background-position: 50% 0; background-image: linear-gradient( hsla(30,28.95%,14.9%, 0) 30%, hsla(30,28.95%,14.9%, 0.5) 100%), url('{image ? image : '' }')" -->
					<figure class="ma0 w-100 f6 mh0 ph3 ph3-ns ph1-m ph3-l pb4 cover shadow-5-hover transition overflow-hidden"
					style="background-position: 50% 0; background-image: linear-gradient( hsla(30,28.95%,14.9%, 0.555) 0, hsla(30,28.95%,14.9%, 0.555) 100%), url({!image ? `https://viaggilevi.vercel.app/images/Tineye.Torres.del.Paine.National.Park.webp` : image})" title={title}>
						<img class="w-50 relative z-1" src="https://viaggilevi.vercel.app/images/levi-logo.svg" alt="Levi" />

							<figurecap class="h5 white ts1-dark-gray flex flex-column lh-solid items-center">
									<h6 class="pv5 tc fraunces mv0 ttc f2 f2-ns f3-m f2-l fw4 items-center">{@html `${title.toLowerCase()}`}</h6>
							</figurecap>
							<div class="pointer br-pill ba bw2 ph2 pv2 bg-black-10 white hover-bg-black-50 transition mr-auto ml-auto tc ts1-dark-gray f5 f5-ns f7-m f5-l">Scopri i viaggi</div>
					</figure>
					</a>
				</li>
				{/if}
			{/each}
		</ul>
	</article>
</section>

<!-- <div class="flex justify-between gold">
  <div class="w-25 pa3">
    <code>1</code>
  </div>
  <div class="w-25 pa3">
    <code>2</code>
  </div>
  <div class="w-25 pa3">
    <code>3</code>
  </div>
</div> -->


	<code>{payoff ? payoff : '' }</code>
	<code>{title ? title : '' }</code>
	<code>{text ? text : '' }</code>




<style>
	code {
		display: block;
		padding-bottom: 2.5rem;
	}
</style>