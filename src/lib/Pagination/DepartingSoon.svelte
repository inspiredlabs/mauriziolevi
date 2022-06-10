<script>
	export let payoff;
	export let headline;
	export let serp;
	export let nurture; // note: an alternative CTA is for people who as `self-nurturing`. If you need to encourage exploration and determine what specific activity to show a prospect. EG: madisonlogic.com/blog/15-must-know-statistics-about-the-importance-of-lead-nurturing/ HOW? pathfactory.com/blog/4-stage-guide-to-better-lead-nurturing/

	export let items;

	import { paginate, LightPaginationNav } from 'svelte-paginate';
  import Zed from '$lib/Pagination/Zed.svelte';
  import Row from '$lib/Row.svelte';

	let currentPage = 1;
  let pageSize = 3;
  $: paginated = paginate({items, pageSize, currentPage});
</script>

<Row bg="bg-linen">
	<!-- fix: id={} -->
	<article>
	<!-- fix: populate w. SEO relevant data: -->
		<header>
			<h4 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
				<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">{payoff}</small>
				<span class="fraunces">{@html headline.replace('<i', '<span class="fraunces-i"').replace('</i>', '</span>')}</span>
			</h4>
			<p class="mt0 fw4 measure lh-copy">{serp}</p>
			<a href={nurture} class="link pointer br-pill ba bw1 pv2 ph4 bg-transparent b--golden-brown golden-brown hover-bg-white-50 ts1-white transition-bg tc f5 f5-ns f7-m f5-l ttu tracked ">esplora</a>
			<!-- db w-third w-third-ns w-30-m w-20-l -->
		</header>

		<ul class="items list pl0 w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l">
			{#each paginated as {cta, excerpt, image, length, starting_price, title}, i}
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

		<LightPaginationNav
			totalItems="{items.length}"
			pageSize="{pageSize}"
			currentPage="{currentPage}"
			limit="{1}"
			showStepOptions="{true}"
			on:setPage="{(e) => currentPage = e.detail.page}"
		/>
	</article>
</Row>


