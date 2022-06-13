<script>
	import Anchor from '$lib/Anchor.svelte'
	import items from '$lib/items.js';
	import Defs from '$lib/Defs.svelte';
	// debug: why not `<Defs />` in `__layout`?
</script>

<Defs />

<!-- fix: pagination
{#each items as { id, title }}
	<a href="#{id}">{title}</a>
{/each} -->

<!-- vh-100 vh-100-ns landscape-vh-100-m portrait-vh-75-m vh-75-m vh-75-l -->

	<aside
	class="flex items-center x-mandatory overflow-x-auto overflow-y-hidden touch-scroll w-100 ma0 pa0 backface-hidden charcoal system">
		{#each items as { id, title, src, headingEn, headingIt, figCaption, slug }}
			<Anchor
				id={id}
				title={title}
				src={src}
				headingEn={headingEn}
				headingIt={headingIt}
				figCaption={figCaption}
				slug={slug}
			/>
		<!-- component={component} -->
		{/each}
	</aside>

	<style>
	/* This `.hover-ltr` can not be implemented into Tachyon Shower. It's not atomic. */
	/* redesign with atomicity in mind: codepen.io/inspiredlabs/pen/ZEvVgdr */


	.touch-scroll {
		-webkit-overflow-scrolling: touch;
	}

	.x-mandatory {
		scroll-snap-type: x mandatory; /*  x-proximity  */
	}

	/**** snapper ****/

	/* .y-mandatory {
		scroll-snap-type: y mandatory;
	} */

	/* .y-proximity {
		scroll-snap-type: y proximity;
	} */


	/* .snapper {
		padding-top:15vh;
		padding-bottom:0vh;
		scroll-margin: 20vh;
		scroll-snap-align: start;
		scroll-snap-stop: normal;
	} */

	:root {
		--time: 0.6s
	}

	/* https://css-tricks.com/almanac/properties/w/will-change/ */


@media all and (orientation:landscape) {
	/* .landscape-vh-100 {
			height: 100vh;
	}
	@media screen and (min-width:30em) {
		.landscape-vh-100-ns {
			height: 100vh;
		}
	} */
	@media screen and (min-width:30em) and (max-width:60em) {
		.landscape-vh-100-m {
			height: 100vh;
		}
	}
	/* @media screen and (min-width:60em) {
		.landscape-vh-100-l {
			height: 100vh;
		}
	} */
}

@media all and (orientation:portrait) {
	/* .portrait-vh-75 {
		height: 75vh;
	}
	@media screen and (min-width:30em) {
		.portrait-vh-75-ns {
			height: 75vh;
		}
	} */
	@media screen and (min-width:30em) and (max-width:60em) {
		.portrait-vh-75-m {
			height: 75vh;
		}
	}
	/* @media screen and (min-width:60em) {
		.portrait-vh-75-l {
			height: 75vh;
		}
	} */
}



	/* Hide scrollbar for Chrome, Safari and Opera */
	aside::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	aside {
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */
	}

		/*
	`.backdrop-blur`, is NOT integrated into Tachyonshower.
	*/

	/* .backdrop-blur { backdrop-filter: blur(8px) } */

	</style>