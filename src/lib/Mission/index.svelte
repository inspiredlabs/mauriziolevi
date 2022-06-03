<script>
export let title;
export let text;

export let motto;
export let images;

import Row from '$lib/Row.svelte';

// fix: modularity
import SwapMontage from '$lib/SwapMontage.svelte';

function transformTitle(title) {
	return title.replace(/(\<(h1|h2)\>|\<\/(h1|h2)\>)/g, '').replace(/\<(i|em)\>/g, '<span class="fraunces-i">').replace(/\<\/(i|em)\>/g, '<span>').replace('scoperta', '<span class="fraunces-i">scoperta</span>');
}

function transformText(text) {
	return text.replace(/\<p\>/g, '<p class="pb3">').replace(/\<\/p\>/g, '</p>');
}

function transformMotto(motto) {
	return motto.replace('viaggio', '<span class="fraunces-i">viaggio</span>');
}

</script>

<Row bg="bg-solitaire">

	<article class="ph2 ph0-ns ph0-m ph0-l">
		<!-- learn: Slot nesting, do you need clear-fix/`cf`? -->

		<aside class="fl w-100 w-50-m w-50-l lh-copy measure ">
			<!-- fix: <Montage /> -->
			<SwapMontage images={images} />
		</aside>

		<div class="fw4 fl w-100 w-50-m w-50-l lh-copy measure">
			<h4 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
				<span class="fraunces">{@html transformTitle(`${title}`)}</span><br>
			</h4>
			<div>{@html transformText(`${text}`)}</div>
		</div>

		<!-- fix: SEO demands `{nations.description.serp || .introduction}` -->
		<blockquote class="golden-brown fraunces f2 f2-ns f1-m f1-l fw4 w-70 lh-solid tc ml-auto mr-auto">{@html transformMotto(`${motto}`)}</blockquote>



	</article>

</Row>





<style>
	code {
		display: block;
		padding-bottom: 2.5rem;
	}
</style>