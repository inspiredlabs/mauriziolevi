<script context="module">
export const prerender = true;
import '../app.css' // <- just import your css: stackoverflow.com/questions/63637662/add-js-css-files-to-svelte-component
</script>

<script>
	import Fraunces from '$lib/Fraunces.svelte';
</script>
<!-- <nav>
	<ul>
		<li><a href="/">Home</a></li>
	</ul>
</nav> -->

<main class="system backface-hidden charcoal">
	<!-- debug: y-mandatory overflow-x-hidden w-100 h-100 ma0 pa0 fixed -->
	<slot />
</main>
<Fraunces />

<style>
	:global(svg) {
			/* fill: inherit; */
			stroke-width: inherit;
			vector-effect: non-scaling-stroke;
			/* seanrice.net/code/design-system/2018/10/12/styling-svg-icons-with-css.html */
		}

		:global(:root) {
			--stroke-accent: white
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