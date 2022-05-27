<script>
  export let id
	export let title
	export let src
	export let bg
	export let headingEn
	export let headingIt
	export let figCaption
	export let slug

	/* learn: usage: `{ figCaption.length > truncate ? figCaption.substring(0, truncate) + '&hellip;' : figCaption }` @html location: `~/offline/src/routes/viaggi/cile-12-giorni/index.svelte` */
	let truncate = 48; // iPhone 5, ideal: tachyons.io/docs/typography/measure/
	let truncateNS = 66; // iPhone 8, ideal: tachyons.io/docs/typography/measure/
	let truncateMedium = 108; // ideal: tachyons.io/docs/typography/measure/
</script>

<figure
id={id}
class="flex-column flex flex-none white cover ma0 "
style="
min-width: 100%;
background-position-x: center;
background-image:
	linear-gradient(
		var(--cocoa) 30%,
		var(--cocoa) 100%),
		url({JSON.stringify(src)})">
	<!-- background-position: 0% 80%; // horizontal, vertical from: developer.mozilla.org/en-US/docs/Web/CSS/background-position-x-->
	<div class="w-100 snap-start always-stop">
		<!-- overflow-x-scroll smooth-scroll h-100 vh-100 -->
		<svg
		style="transform: scale(150%)"
		class="portrait-vh-75 landscape-vh-50 portrait-vh-50-m portrait-vh-50-l w-100 pa0 ma0 s--accent sw2 transparent no-select">
			<!-- vh-50 style="height: 33%;max-height: 33%" -->
		<use xlink:href="#{id}"></use>
	</svg>
	<div class="flex items-center w-100 f5 f4-ns f3-m f3-l measure pa2 measure-ns pa4-ns measure-m pa2-m measure-wide-l pa0-l mr-auto ml-auto">
		<div class="flex flex-column w-100 pv0 mv0">
			<span class="dark-beige tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f6-l fw5 ttu tc mv0" data-en="{headingEn}">{@html headingIt}</span>
			<!-- consider conditional: lang="it" -->
			<h2 class="w-100 mv0 ph3 f2 f2-ns f1-m f1-l tc lh-solid fraunces">{@html title}</h2>
			<!-- z-1 -->
			<a href="#{slug}" class="transition link pointer br-pill b--white ba bw1
			ph4 ph3-ns ph5-m ph4-l
			pv2 bg-black-10 white hover-bg-black-50 transition-bg mr-auto ml-auto db tc ts1-dark-gray f5 f5-ns f7-m f5-l bg-transparent ttt mv3" en="Discover The Americas" lang="it">scopri le destinazioni</a>
			<!-- w-75 w-50-ns w-third-m w-third-l -->
		</div>
	</div>

<!--
<svelte:component this={component} />
<pre class="red">{id}</pre>
<pre class="gold">{slug}</pre>
<pre class="gold">{headingEn}</pre>
<pre class="gold">{headingIt}</pre>
<pre class="gold truncate">{figCaption}</pre>
<pre class="gold truncate">{src}</pre>
<pre class="gold truncate">{bg}</pre>
-->
<!-- <slot></slot> -->
	</div><!-- /Vertical wrapper -->
	<figcaption class="flex w-100 f5 f4-ns f3-m f3-l lh-copy measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto vh-05 landscape-vh-15-l">
		<div class="flex flex-column w-100 pb0 pb0-l">

				<!-- truncate: -->
				<span class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw3 mv0 pb3 db dn-ns dn-m dn-l">{@html figCaption.length > truncate ? figCaption.substring(0, truncate) + '&hellip;' : figCaption }</span>

				<!-- truncateNS: -->
				<span class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw3 mv0 pb3 dn db-ns dn-m dn-l">{@html figCaption.length > truncateNS ? figCaption.substring(0, truncateNS) + '&hellip;' : figCaption }</span>

				<!-- truncateMedium: -->
				<span class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw3 mv0 pb3 dn dn-ns db-m db-l">{@html figCaption.length > truncateMedium ? figCaption.substring(0, truncateMedium) + '&hellip;' : figCaption }</span>
		</div>
	</figcaption>
</figure><!-- /Page id -->

<style>
:root{
	--alpha: 0.6;
}

/* `.ttt` is part of `~/offline/app.css`, but NOT integrated into Tachyonshower. */
.ttt:first-letter { text-transform: capitalize }

.snap-center {
	scroll-snap-align: center;
	/* note `scroll-padding` syntax: css-tricks.com/introducing-css-scroll-snap-points/ */
}

.snap-start {
	scroll-snap-align: start /* .snap-center `scroll-snap-align: center` */
}
.always-stop {
  scroll-snap-stop: always;
	/* css-tricks.com/almanac/properties/s/scroll-snap-stop */
}


@media all and (orientation:portrait) {
	.portrait-vh-75 {
		height: 75vh;
	}
	@media screen and (min-width:30em) {
		.portrait-vh-75-ns {
			height: 75vh;
		}
	}
	@media screen and (min-width:30em) and (max-width:60em) {
		.portrait-vh-75-m {
			height: 75vh;
		}
	}
	@media screen and (min-width:60em) {
		.portrait-vh-75-l {
			height: 75vh;
		}
	}
}

@media all and (orientation:landscape) {
	.landscape-vh-50 {
		height: 50vh;
	}
	@media screen and (min-width:30em) {
		.landscape-vh-50-ns {
			height: 50vh;
		}
	}
	@media screen and (min-width:30em) and (max-width:60em) {
		.landscape-vh-50-m {
			height: 50vh;
		}
	}
	@media screen and (min-width:60em) {
		.landscape-vh-50-l {
			height: 50vh;
		}
	}
}

@media all and (orientation:portrait) {
	.portrait-vh-50 {
		height: 50vh;
	}
	@media screen and (min-width:30em) {
		.portrait-vh-50-ns {
			height: 50vh;
		}
	}
	@media screen and (min-width:30em) and (max-width:60em) {
		.portrait-vh-50-m {
			height: 50vh;
		}
	}
	@media screen and (min-width:60em) {
		.portrait-vh-50-l {
			height: 50vh;
		}
	}
}

@media all and (orientation:portrait) {
	.portrait-vh-25 {
		height: 25vh;
	}
	@media screen and (min-width:30em) {
		.portrait-vh-25-ns {
			height: 25vh;
		}
	}
	@media screen and (min-width:30em) and (max-width:60em) {
		.portrait-vh-25-m {
			height: 25vh;
		}
	}
	@media screen and (min-width:60em) {
		.portrait-vh-25-l {
			height: 25vh;
		}
	}
}

</style>