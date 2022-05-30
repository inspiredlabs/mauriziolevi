<script context="module">
//export const prerender = true;
import '../app.css';
	// note: just import your css: stackoverflow.com/questions/63637662/add-js-css-files-to-svelte-component
</script>

<script>
	import Fraunces from '$lib/Fraunces.svelte';
	import Outro from '$lib/Outro/index.svelte';
	import Menu from '$lib/Menu/index.svelte';
</script>

<Menu
title="Maurizio Levi"
/>



<main class="system backface-hidden charcoal">
	<!-- debug: y-mandatory overflow-x-hidden w-100 h-100 ma0 pa0 fixed -->
	<slot />
	<Outro />
</main>
<Fraunces />

<style>
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

  color: var(--golden-brown)!important;
}

:global(.light-pagination-nav .option:hover) {
	background-color: rgba(255,255,255, 0.8)!important;
	color: var(--golden-brown);
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