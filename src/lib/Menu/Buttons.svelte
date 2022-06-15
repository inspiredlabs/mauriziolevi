<script>
import { goto } from '$app/navigation';
import { page } from '$app/stores';

const buttons = [
	{name: "Partenze", route: "/partenze"},
	{name: "Viaggi", route: "/viaggi"},
	{name: "Chi Siamo", route: "/chi-siamo"},
	{name: "News", route: "/news"},
]

$: pageUrl = $page.url.pathname; // learn: reactive highlight: webjeda.com/blog/sveltekit-highlight-menu
</script>

{#each buttons as { route, name }, i }
	<a
		href={route}
		sveltekit:prefetch
		class:active={route !== "/" ? pageUrl.match(route) : route === pageUrl}
		style={`width: calc( 100% / ${buttons.length})`}
		class="h-100 nowrap link pv0 pv2 pv3-m pv3-l ttt bg-transparent f6 f4-ns f6-m portrait-f5-m f5-l pointer hover-o-100 transition white bn bb b--white ph0 o-80">{name}</a>
{/each}

<style>

a {line-height:2rem}

.active {	opacity:1 }

/* note: `portrait-f5` is NOT integrated into Tachyon Shower */

@media all and (orientation:portrait) {

	.portrait-f5 {
		font-size: 1rem;
	}

	@media screen and (min-width:30em) {
	  .portrait-f5-ns {
	    font-size: 1rem;
	  }
	}
	@media screen and (min-width:30em) and (max-width:60em) {
	  .portrait-f5-m {
	    font-size: 1rem;
	  }
	}
	@media screen and (min-width:60em) {
	  .portrait-f5-l {
	    font-size: 1rem;
	  }
	}
}

</style>