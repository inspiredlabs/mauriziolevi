<script>
	let src = './images/Torres.del.Paine.National.Park.original.3288.jpg'
	let xlink = 'americhe';
	let headingEn = 'I want to travel';
	let headingIt = 'voglio viaggiare';
	let destination = 'Americhe';
	let figCaption = 'Lago Grey - Torres del Paine National Park - Cile';
	let slug = '';
</script>

<style>
	:root{ --tint: 0.5; /* 1 is max */ }
</style>

<figure
	class="ma0 flex justify-center flex-column vh-75 white cover"
	style="background-position: 40% 0; background-image:
	linear-gradient(
		rgba(0, 0, 0, var(--tint)) 30%,
		rgba(0, 0, 0, var(--tint)) 100%),
		url({src})">
	<svg
	style="transform: scale(150%)"
	class="vh-50 w-100 pa0 ma0 s--accent sw2 transparent debug" >
	<!-- transform-origin: center center;  -->
		<use xlink:href="#{xlink}"></use>
	</svg>
	<div class="flex items-center w-100 f5 f4-ns f3-m f3-l measure pa2 measure-ns pa4-ns measure-m pa2-m measure-wide-l pa0-l mr-auto ml-auto">
		<!-- invert -->
		<div class="flex flex-column w-100 pv0 mv0">
			<span class="golden-brown tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f6-l fw5 ttu tc mv0" data-en="{headingEn}">{headingIt}</span>
			<!-- consider conditional: lang="it" -->
			<h2 class="w-100 mv0 ph3 f2 f2-ns f1-m f1-l tc lh-solid fraunces">{destination}</h2>
			<a href={slug} class="transition link pointer br-pill b--white ba bw1 ph3 pv2 bg-black-10 white hover-bg-black-50 transition-bg mr-auto ml-auto db tc w-50 w-50-ns w-third-m w-third-l ts1-dark-gray f5 f5-ns f7-m f5-l bg-transparent ttt mv3" en="Discover The Americas" lang="it">scopri le destinazioni</a>
		</div>
	</div>

	<figcaption class="flex items-center w-100 f5 f4-ns f3-m f3-l lh-copy measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto vh-05 landscape-vh-15-l">
		<div class="flex flex-column w-100 pb0 pb0-l">
				<span class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw5 mv0">{figCaption}</span>
		</div>
	</figcaption>
</figure>