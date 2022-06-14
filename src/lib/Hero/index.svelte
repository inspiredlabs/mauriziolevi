<script>
export let image;
export let payoff;
export let title;
export let location;
// fix: unused
export let imageOverlay; // note: this instance is a top to bottom gradient


// fix: this component reqs: `export let cta;`

import Row from '$lib/Row.svelte';
import ScrollIndicator from '$lib/ScrollIndicator.svelte';

function transformTitle(title) {
	return title.replace(/(\<(h1|h2)\>|\<\/(h1|h2)\>)/g, '').replace(/\<(i|em)\>/g, '<span class="fraunces-i">').replace(/\<\/(i|em)\>/g, '<span>').toLowerCase();
	}
</script>


<!-- fix: let overlayImage = false; -->
<!-- note: req. ternarary operator
	background-image: linear-gradient( hsla(30,28.95%,14.9%, 0) 30%, hsla(30,28.95%,14.9%, 0.5) 100%) -->
<!-- note: cocoa:hsla(30,28.95%,14.9%, 1); -->
<figure class="ma0 flex flex-column vh-75 w-100 cover"
style="background-position: center 40%; background-image: linear-gradient( hsla(30,28.95%,14.9%, 0) 30%, hsla(30,28.95%,14.9%, {imageOverlay === true ? `0.555` : `0`}) 100%), url('{image ? image : '' }')"
title={location ? location : '' }>
<!-- base64'd: onlinejpgtools.com/convert-jpg-to-base64 -->

<div class="vh-75 flex items-center white w-100 f5 f4-ns f3-m f3-l lh-copy measure pa2 measure-ns pa4-ns measure-m pa2-m measure-wide-l pa0-l mr-auto ml-auto">
	<div class="flex flex-column w-100 pt5 pt6-l">
		<!--
			<h1 class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu tc mv0">Gallo Bike Park, Narni, Umbria</h1>
			<h2 class="w-100 mv0 ph3 f2 f2-ns f1-m f1-l tc lh-solid">Join the good times</h2>
		-->
			<h3 class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ts1-dark-gray ttu tc mv0">{payoff ? payoff : '' }</h3>
			<h2 class="w-100 mv0 ph3 f2 f2-ns f1-m f1-l ts1-dark-gray fraunces tc ttc">{@html transformTitle(`${title}`)}</h2>
		</div>
	</div>
	<figcaption class="flex flex-column-reverse white w-100 f5 f4-ns f3-m f3-l lh-copy measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto landscape-vh-10-l"><!-- vh-05 landscape-vh-15-l || vh-20  -->

		<ScrollIndicator />
		<span class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ts1-dark-gray mv0">{location ? location : '' }</span>

	</figcaption>
</figure>