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
  // learn: flush cache: `chrome://serviceworker-internals`
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
/* learn: HSL colour schemes: smashingmagazine.com/2021/07/hsl-colors-css/ */
/* learn: `%svelte.assets%`: closingtags.com/global-css-in-sveltekit */
/* learn: preprocessor: github.com/bluwy/svelte-preprocess-import-assets */
/* learn: preprocessor: npmjs.com/package/svelte-assets-preprocessor */
/* fix: bump global styles issue: github.com/sveltejs/kit/issues/3127 */
/* note: kit.svelte.dev/docs/assets */
/* learn: preprocessor runs before compilation: windicss.org/integrations/svelte.html */

/* fix: Grid, is NOT integrated into Tachyonshower */
/* learn: Grumpy's cheatsheet: rachelandrew.co.uk/css/cheatsheets/box-alignment */
/* learn: examples & how CSS Grid is different "No need for rows and other extraneous markup hacks to make it all work": github.com/tachyons-css/tachyons/issues/372#issuecomment-330592004 */
/* learn: mauw */
/* learn: another convention emerging: github.com/tachyons-css/tachyons/issues/692 */
/* learn: by example: https://codepen.io/cannedqualia/pen/GRQEjKG */



/* learn: fractional units: vgpena.github.io/using-css-grid-the-right-way*/
/* learn: golden-brown, solitaire, linen, cocoa */
/* learn `:root{...}` spacing fragment: tachyons.io/docs/layout/spacing */


:global(:root) {
    /* --content-active: cyan; */
    /* --accent: var(--golden-brown); */
    --content-inactive: rgba(0,0,0, 0.01);
    --alpha: 1;
    --bw2: 0.25rem;
    --pick: var(--golden-brown);
    --success: hsla(120, 100%, 19.6%, var(--alpha));
    --error: darkred; /*firebrick*/
    --warning: var(--golden-brown); /* learn: hsl(316, 54%, 58%) */
  }

:global(.accent) { font-family: 'Fraunces Variable Italic', serif; }
/* color: var(--accent);
fill: var(--accent) */


:global(.outline-3-highlight) {
  outline: 0 solid var(--golden-brown);
  /* transition: all 0.333s ease; */
}




/* Prompt example: https://codepen.io/inspiredlabs/pen/BaLRXaN */

:global(.form-checkbox.retry) {
  animation:retry .5s linear 0.8s;
  -webkit-animation:retry .5s linear 0.8s;
}

:global(.form-input.retry) {
  animation:retry .5s linear 0.8s;
  -webkit-animation:retry .5s linear 0.8s;
}

/* keyframes */
/* -moz-keyframes */
/* -webkit-keyframes */
@keyframes retry {

  8%,
  41% {
    transform: translateX(-10px);
  }

  25%,
  58% {
    transform: translateX(10px);
  }

  72% {
    transform: translateX(-5px);
  }
  86% {
    transform: translateX(5px);
  }


  92% {
    transform: translateX(-2px);
  }
  98% {
    transform: translateX(2px);
  }


  0%,
  100% {
    transform: translateX(0);
  }
}




/* fix: `sticky`, is NOT integrated into Tachyonshower */
:global(.sticky) {
  position: -webkit-sticky;
  position: sticky; /* learn: req. `top-0` */
}

/* Tables, why not grid?: caniuse.com/css-grid */
:global(.dg, .grid) { display: grid }

@media screen and (min-width: 30em) {
  :global(.dg-ns, .grid-ns) {
    display: grid
  }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
  :global(.dg-m, .grid-m) {
    display: grid
  }
}

@media screen and (min-width: 60em) {
  :global(.dg-l, .grid-l) {
    display: grid
  }
}

/* fix: `grid-items-start`, etc, is NOT integrated into Tachyonshower... */
/* learn: see: ~/Users/scottphillips/Documents/GitHub/mauriziolevi/support/tables/grid-vs-flexbox.html */
:global(.grid-items-start) { justify-items: start }
:global(.grid-items-center) { justify-items: center }
:global(.grid-items-end) { justify-items: end }

:global(.grid-align-start) { align-items: start }
:global(.grid-align-center) { align-items: center }
:global(.grid-align-end) { align-items: end }

/* fix: important `:root{...}` spacing fragment to all */
/* learn: spacing: tachyons.io/docs/layout/spacing */

:global(:root) {
  --spacing-none: 0; /* bw0 */
  --spacing-extra-small: .25rem; /* bw1 */
  --spacing-small: .5rem; /* bw2 */
  --spacing-medium: 1rem; /* bw3 */
  --spacing-large: 2rem;
  --spacing-extra-large: 4rem;
  --spacing-extra-extra-large: 8rem;
  --spacing-extra-extra-extra-large: 16rem;
}

:global(.gg0, .gap-0) { grid-gap: var(--spacing-none) }
:global(.gg1, .gap-1) { grid-gap: var(--spacing-extra-small) }
:global(.gg2, .gap-2) { grid-gap: var(--spacing-small) }
:global(.gg3, .gap-3) { grid-gap: var(--spacing-medium) }
:global(.gg4, .gap-4) { grid-gap: var(--spacing-large) }
:global(.gg5, .gap-5) { grid-gap: var(--spacing-extra-large) }
:global(.gg6, .gap-6) { grid-gap: var(--spacing-extra-extra-large) }
:global(.gg7, .gap-7) { grid-gap: var(--spacing-extra-extra-extra-large) }


:global(.cols-fr1) { grid-template-columns: 1fr }
:global(.rows-fr1) { grid-template-rows: 1fr }
:global(.col-fr1-auto-auto, .grid-fr1-auto-auto) { grid-template-columns: fr1 auto auto }
:global(.col-3x1fr, .grid-repeat-3-1fr) { grid-template-columns: repeat(3, 1fr) }
:global(.col-5x1fr, .grid-repeat-5-1fr) { grid-template-columns: repeat(5, 1fr) }

:global(.col) { grid-column: auto }

:global(.col-s3, .col-span-3) { grid-column: span 3 }

@media screen and (min-width: 30em) {
  :global(.col-span-3-ns) {
    grid-column: span 3
  }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
  :global(.col-span-3-m) {
    grid-column: span 3
  }
}

@media screen and (min-width: 60em) {
  :global(.col-span-3-l) {
    grid-column: span 3
  }
}

:global(.col-span-2) { grid-column: span 2 }

@media screen and (min-width: 30em) {
  :global(.col-span-2-ns) {
    grid-column: span 2
  }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
  :global(.col-span-2-m) {
    grid-column: span 2
  }
}

@media screen and (min-width: 60em) {
  :global(.col-span-2-l) {
    grid-column: span 2
  }
}

:global(.col-span-1) { grid-column: span 1 }

@media screen and (min-width: 30em) {
  :global(.col-span-1-ns) {
    grid-column: span 1
  }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
  :global(.col-span-1-m) {
    grid-column: span 1
  }
}

@media screen and (min-width: 60em) {
  :global(.col-span-1-l) {
    grid-column: span 1
  }
}

:global(.col-span-0) { grid-column: span 1 }

@media screen and (min-width: 30em) {
  :global(.col-span-0-ns) {
    grid-column: span 1
  }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
  :global(.col-span-0-m) {
    grid-column: span 0
  }
}

@media screen and (min-width: 60em) {
  :global(.col-span-0-l) {
    grid-column: span 0
  }
}

:global(.row-h-33) { grid-auto-rows: minmax(33%, auto) }
:global(.row-h-25vh) { grid-auto-rows: minmax(25vh, auto) }
:global(.row-h-third) { grid-auto-rows: minmax(33.333vh, auto) }

:global(.row-span-2) { grid-row: span 2 }
:global(.row-span-3) { grid-row: span 3 }

:global(.row) { display: contents }
/* learn: simplicity is the ultimate: stackoverflow.com/questions/56902735/css-grid-how-to-select-row-to-add-hover-effect */

:global(.o-80) { opacity: .8 }

@media screen and (min-width: 30em) {
  :global(.o-80-ns) {
    opacity: .8
  }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
  :global(.o-80-m) {
    opacity: .8
  }
}

@media screen and (min-width: 60em) {
  :global(.o-80-l) {
    opacity: .8
  }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
  :global(.o-100-m) {
    opacity: 1
  }
}


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
	box-shadow: none!important;
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

/* learn: tachyons.io/docs/layout/spacing/ */
/* .sw1{ stroke-width: .125rem calc( var(--spacing-extra-small) * 0.5 ) } */
:global(.sw2) { stroke-width: var(--spacing-extra-small) }
/* .sw3{ stroke-width: var(--spacing-small) }
.sw4{ stroke-width: var(--spacing-medium) }
.sw5{ stroke-width: var(--spacing-large) }
*/

/* learn: `currentColor vs inherit`: stackoverflow.com/questions/65591442/whats-the-difference-between-color-inherit-vs-color-currentcolor
.s--current { stroke-color: currentColor }
.s--inherit { stroke-color: inherit }
.s--black { stroke: black }
.s--white { stroke: white } */

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