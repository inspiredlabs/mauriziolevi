<script>
  export let id
	export let title
	export let src
	export let slug
	export let bg
	export let headingEn
	export let headingIt
	export let figCaption
	export let component
</script>

<figure
id={id}
class="
flex-column flex flex-none white cover debug"
				style="min-width: 100%; background-position: 40% 0; background-image:
	linear-gradient(
		rgba(0, 0, 0, var(--tint)) 30%,
		rgba(0, 0, 0, var(--tint)) 100%),
		url({JSON.stringify(src)})">
	<div class="w-100 snap-start always-stop">
<!-- overflow-x-scroll smooth-scroll h-100 vh-100 -->
		<svg
		style="transform: scale(150%)"
		class="vh-50 vh-50-ns vh-50-m vh-50-l w-100 pa0 ma0 s--accent sw2 transparent">
			<!-- style="height: 33%;max-height: 33%" -->
		<use xlink:href="#{id}"></use>
	</svg>
	<div class="flex items-center w-100 f5 f4-ns f3-m f3-l measure pa2 measure-ns pa4-ns measure-m pa2-m measure-wide-l pa0-l mr-auto ml-auto">
		<div class="flex flex-column w-100 pv0 mv0">
			<span class="golden-brown tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f6-l fw5 ttu tc mv0" data-en="{headingEn}">{headingIt}</span>
			<!-- consider conditional: lang="it" -->
			<h2 class="w-100 mv0 ph3 f2 f2-ns f1-m f1-l tc lh-solid fraunces">{title}</h2>
			<a href={slug} class="transition link pointer br-pill b--white ba bw1 ph3 pv2 bg-black-10 white hover-bg-black-50 transition-bg mr-auto ml-auto db tc w-75 w-50-ns w-third-m w-third-l ts1-dark-gray f5 f5-ns f7-m f5-l bg-transparent ttt mv3" en="Discover The Americas" lang="it">scopri le destinazioni</a>
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
	<figcaption class="flex items-center w-100 f5 f4-ns f3-m f3-l lh-copy measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto vh-05 landscape-vh-15-l">
		<div class="flex flex-column w-100 pb0 pb0-l">
				<span class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw5 mv0">{figCaption}</span>
		</div>
	</figcaption>
</figure><!-- /Page id -->

<style>
:root{ --tint: 0.5; /* 1 is max */ }

/* `.ttt` is part of `~/offline/app.css`, but NOT integrated into Tachyonshower. */
.ttt:first-letter { text-transform: capitalize }

.snap-center {
	scroll-snap-align: center;
}

.snap-start {
	scroll-snap-align: start /* .snap-center `scroll-snap-align: center` */
}
.always-stop {
  scroll-snap-stop: always;
	/* css-tricks.com/almanac/properties/s/scroll-snap-stop */
}

</style>