<script>
	import Anchor from '$lib/Anchor.svelte'
	import items from '$lib/items.js';
	import Defs from '$lib/Defs.svelte';
</script>
<Defs />
	<aside class="ma0 vh-100 vh-100-ns vh-75-m vh-75-l
	flex items-center x-mandatory overflow-x-auto touch-scroll w-100 ma0 pa0 backface-hidden charcoal system">
		{#each items as { id, title, slug, src, headingEn, headingIt, figCaption, bg, component }}
			<Anchor
				id={id}
				title={title}
				src={src}
				slug={slug}
				component={component}
				headingEn={headingEn}
				headingIt={headingIt}
				figCaption={figCaption}
				bg={bg}
			/>
		<!--	bg={"bg-light-gray"} -->
		{/each}
	</aside>

	<style>

	/* This `.hover-ltr` can not be implemented into Tachyon Shower. It's not atomic. */
	/* redesign with atomicity in mind: codepen.io/inspiredlabs/pen/ZEvVgdr */
		:global(a) {
			text-decoration: none!important
		}

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
	/* .minno {
		will-change: transform, scroll-position;
		-moz-osx-font-smoothing: grayscale;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		transition: -webkit-transform var(--time) ease;
		transition: all var(--time) ease;
		transition: all var(--time) ease,
		-webkit-transform var(--time) ease;
		background-clip: padding-box;

		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
	.minno:focus,
	.minno:hover {
		-webkit-transform: perspective(1px) scale(1.008);
		transform: perspective(1px) scale(1.008);

		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
	}
	.minno:active {
		-webkit-transform: perspective(1px) scale(1.02);
		transform: perspective(1px) scale(1.02);

		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
	}
	*/

	/* HTML: w-100 h-100 system */

	@media all and (orientation:portrait) {

	/*   .portrait-dn {
			display: none;
		} */

	/*   .portrait-vh-50 {
		height: 50vh;
		} */
		@media screen and (min-width:30em) {
	/*     .portrait-dn-ns {
				display: none;
			} */
	/*     .portrait-vh-85-ns {
			height: 85vh;
			} */
	/*     .portrait-bottom-0-ns {
			bottom: 0;
			} */
		}
		@media screen and (min-width:30em) and (max-width:60em) {
	/*     .portrait-dn-m {
				display: none;
			} */
	/*     .portrait-vh-85-m {
			height: 85vh;
			} */
	/*     .portrait-bottom-0-m {
			bottom: 0;
			} */
		}
		@media screen and (min-width:60em) {
	/*     .portrait-dn-l {
				display: none;
			} */
	/*     .portrait-bottom-0-l {
			bottom: 0;
			} */
		}
	}

	@media all and (orientation:landscape) {

	/*   .landscape-db {
				display: block;
			} */
	/*   .landscape-dn {
			display: none;
		} */

	/*   .landscape-vh-66 {
		height: 66vh;
		} */

		@media screen and (min-width:30em) {
	/*     .landscape-vh-85-ns {
			height: 85vh;
			} */
	/*     .landscape-db-ns {
				display: block;
			} */
	/*     .landscape-dn-ns {
				display: none;
			} */
		}

		@media screen and (min-width:30em) and (max-width:60em) {
	/*     .landscape-vh-66-m {
			height: 66vh;
			} */
	/*     .landscape-db-m {
				display: block;
			} */
	/*     .landscape-dn-m {
				display: none;
			} */
		}

		@media screen and (min-width:60em) {
	/*     .landscape-vh-85-l {
			height: 85vh;
			} */
	/*     .landscape-top-0-l {
			top: 0;
			} */
	/*     .landscape-db-l {
				display: block;
			} */
	/*     .landscape-dn-l {
				display: none;
			} */
	/*     .landscape-flex-l {
				display: flex;
			} */
		}
	}

	:global(html, body) { padding: 0 }


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