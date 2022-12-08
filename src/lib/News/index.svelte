<script>
	export let payoff;
	export let title;
	export let text;
	export let imageOverlay; // note: this instance is uniform
	export let contents; /* Array */
	import Row from '$lib/Row.svelte'; /* <Row bg="bg-linen"></Row> */
</script>

<Row bg="bg-solitaire pv2">
	<article class="ph2" id="viaggi-di-scoperta">
		<h4 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
			<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">{@html payoff}</small>
			<span class="fraunces">{@html title}</span>
			<!-- <span class="fraunces-i"> -->
		</h4>


		<ul class="mv0 items list pl0 w-100 flex flex-wrap justify-between flex-column flex-column-ns flex-row-m flex-row-l">

			{#each contents as { image, text, cta }, i}


				<li class="w-100 w-100-ns w-30-m w5-l pb3">
					<a title={text} href="{cta}" class="link">

						<figure class="ma0 w-100 f6 mh0 ph3 ph3-ns ph1-m ph3-l pb4 cover shadow-5-hover transition overflow-hidden h5"
						style="background-position: 50% 0; background-image: linear-gradient( hsla(30,28.95%,14.9%, {imageOverlay === true ? `0.555` : `0`}) 0, hsla(30,28.95%,14.9%, {imageOverlay === true ? `0.555` : `0`}) 100%), url('https://viaggilevi.vercel.app/images/Tineye.Torres.del.Paine.National.Park.webp')" title={text}>

							<!-- learn: rm `h5` <img class="w-50 relative z-1" src="https://viaggilevi.vercel.app/images/levi-logo.svg" alt="Levi" /> -->

						</figure>

						<figurecap class="flex flex-column lh-copy items-center charcoal f5 f5-ns f7-m f5-l fw4">
							<span class="pv3 tc mv0 ttc items-center ">{@html `${text.toLowerCase()}`}</span>

							<span class="pointer br-pill b--golden-brown ba bw2 ph4 pv2 bg-transparent golden-brown hover-white hover-bg-golden-brown transition mr-auto ml-auto tc f5 f5-ns f7-m f5-l">Scopri di più</span>
						</figurecap>


						</a>
					</li>

				{/each}
				<!-- learn: fake padding... -->
				<li class="w-100 w-100-ns w-30-m w5-l pb3"></li>
			</ul>



	</article>
</Row>



