<!-- <script context="module">
//export const prerender = true;
// note: just `import '../app.css'`: stackoverflow.com/questions/63637662/add-js-css-files-to-svelte-component

// learn: github.com/GiorgosK/svelte-page-transitions/blob/main/src/routes/__layout.svelte
export const load = async ({ url, params }) => ({
	props: {
		key: page.params
	},
})
</script> -->

<script context="module">
	// learn: youtube.com/watch?v=_atyihzXVuI
	//export const prerender = false;
	export const load = async ({ url }) => ({
	props: {
		url: url.href
	}
});
</script>

<script>
	import PageTransition from '$lib/Menu/PageTransition.svelte';
	import { page } from '$app/stores';

	import Fraunces from '$lib/Fraunces.svelte';
	import Outro from '$lib/Outro/index.svelte';
	import Defs from '$lib/Defs.svelte';
	import Menu from '$lib/Menu/index.svelte';
	import '../app.css';

import { onMount } from 'svelte';
let loaded = false;
	onMount(() => {
		loaded = true;
		// learn: usage: class="{ !loaded ? `visually-hidden` : `` }"
});

export let url;
</script>

<Menu/>

<!-- learn: debug route/transitions `<div class="z-max absolute top-0 bg-gold">{$page.url.pathname}</div>` -->

<main
class="system backface-hidden charcoal">
	<!-- debug: y-mandatory overflow-x-hidden w-100 h-100 ma0 pa0 fixed -->
	<PageTransition url={url}>
		<!-- note: using `<slot />` breaks the transition -->
		<slot />
		<Outro />
	</PageTransition>

</main>

<Defs />
<Fraunces />



<style>
/* @use '../app.css'; */
/* "purge" "unused css" from "global style" in "sveltekit" */
/* learn: `%svelte.assets%`: closingtags.com/global-css-in-sveltekit */
/* learn: preprocessor: github.com/bluwy/svelte-preprocess-import-assets */
/* learn: preprocessor: npmjs.com/package/svelte-assets-preprocessor */
/* fix: bump global styles issue: github.com/sveltejs/kit/issues/3127 */
/* note: kit.svelte.dev/docs/assets */
/* learn: preprocessor runs before compilation: windicss.org/integrations/svelte.html */

/*
`.hover-b--transparent`, is NOT integrated into Tachyonshower.
*/
/* debug: basic only below... */
:global(.hover-b--inherit) {
  transition: all 0.4s ease 0s!important;
}
:global(.hover-b--inherit:hover) {
  border-color: inherit;
  /* usage: `bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100 transition` */
}

:global(.visually-hidden) {
	/* Contain text within 1px box */
	height: 1px;
	overflow: hidden;
	width: 1px;
	/* Keep the layout */
	position: absolute;
	/* Remove any visible trace (e.g. background color) */
	clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%); /* browsers in the future */
	/* Prevent the screen reader to skip spaces between words */
	white-space: nowrap;
	/* snook: medium.com/web-dev-survey-from-kyoto/the-visually-hidden-technique-303f8e2bd409 */
}

/***** PAGINATE *****/
:global(.light-pagination-nav span.option.prev > svg path) {
  fill: var(--golden-brown)!important;
}

:global(.light-pagination-nav span.option.next > svg path) {
  fill: var(--golden-brown)!important;
}

:global(.light-pagination-nav span.option.prev) {
  color: transparent;
  transition: background 0.4s ease 0s;
  -webkit-transition: background 0.4s ease 0s;
  border: solid 0.125rem var(--golden-brown);
  border-radius: 9999px 0px 0px 9999px;
  font-size: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-right: none;
}

:global(.light-pagination-nav span.option.next) {
  color: transparent;
  transition: background 0.4s ease 0s;
  -webkit-transition: background 0.4s ease 0s;
  border: solid 0.125rem var(--golden-brown);
  border-radius: 0px 9999px 9999px 0px;
  font-size: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

:global(.light-pagination-nav .option) {
  border-top: solid 0.125rem var(--golden-brown);
  border-left: solid 0.125rem var(--golden-brown);
  border-bottom: solid 0.125rem var(--golden-brown);
  border-right: none;
  text-shadow: 0px 0.125rem 0.125rem white;

  color: hsla(30,28.95%,14.9%, 0.7)!important;
	/* var(--golden-brown) */
}

:global(.light-pagination-nav .option:hover) {
	background-color: rgba(255,255,255, 0.8)!important;
	color:var(--cocoa)!important;
  border: solid 0.125rem var(--golden-brown);
  border-right: none;
}

:global(.light-pagination-nav .pagination-nav) {
	background: transparent!important;
	box-shadow: none;
}

:global(.option.active) {
  text-shadow: 0px 0.125rem 0.125rem black;
  color:white!important;
	background-color: var(--golden-brown)!important;

  border-top: solid 0.125rem var(--golden-brown);
  border-left: solid 0.125rem var(--golden-brown);
  border-bottom: solid 0.125rem var(--golden-brown);
  border-right: none;
}

:global(.option.active:hover) {
	background-color: var(--golden-brown)!important;
	cursor:auto!important;
	color:white!important;
}




:global(svg) {
		/* fill: inherit; */
		stroke-width: inherit;
		vector-effect: non-scaling-stroke;
		/* seanrice.net/code/design-system/2018/10/12/styling-svg-icons-with-css.html */
	}

	:global(:root) {
		--stroke-accent: white;
	}

/* .sw1{ stroke-width: .125rem } */
:global(.sw2) { stroke-width: .25rem }
/* .sw3{ stroke-width: .5rem }
.sw4{ stroke-width: 1rem }
.sw5{ stroke-width: 2rem }

.s--black {
	stroke: black;
}
.s--white {
	stroke: white;
} */

:global(.s--accent) {
	stroke: var(--stroke-accent);
}

:global(.transparent) {
	color: transparent;
	fill: transparent;
}
</style>

<!-- <style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	nav {
		border-bottom: 1px solid rgba(255, 62, 0, 0.1);
		font-weight: 300;
		padding: 0 1em;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}
	li {
		display: block;
		float: left;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style> -->



<!-- learn: `<svelte:head>...</svelte:head>` "Schema is now sufficiently well-supported" Aggregate Reviews schema is potentially very valuable for category or index pages that contain more than one item. For instance, the main category page for “Thin Screen TVs” on a retailer site, or the listings page for “Hotels” on a local accommodations website. Main category pages often are challenging to get ranking well because they’re navigational or interstitial types of pages, and they frequently don’t have rich snippet markup. Aggregate Reviews could be one schema that would work really well for them. -->
<!-- mauw: dev.to/tonyfrenzy/seo-for-web-developers-to-use-json-ld-or-microdata-2d4p -->
<!-- note: test: google.com/webmasters/markup-helper/u/0/ -->
<!-- note: test: search.google.com/structured-data/testing-tool -->
<!-- learn: , "media search is way too ignored for what it’s capable of doing for publishers, so we’re throwing more engineers at it as well as more outreach.” from: inspiredlabs.co.uk/zen/seo-periodic-table-2019.pdf -->