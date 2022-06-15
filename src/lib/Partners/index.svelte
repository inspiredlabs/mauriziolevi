<script>
import Row from '$lib/Row.svelte';
let alt = 'Maurizio Levi Official Partner'; // `alt={alt}`
let imagesBaseUrl = `${import.meta.env.VITE_BASEURL}/images/` // usage: `{imagesBaseUrl}`
</script>

<Row bg="bg-white">
	<article class="highlight db black-70 f5 f4-ns f3-m f3-l lh-copy pv4 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto">
		<h4 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
			<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">I viaggi di maurizio levi</small>
			<span class="fraunces">I nostri</span><span class="fraunces-i">&nbsp;partner</span>
		</h4>
		<div class="flex justify-between w-100">
			<img class="h3 db no-select" src="{imagesBaseUrl}fai.webp" alt={alt}>
			<img class="h2 db no-select" src="{imagesBaseUrl}fto.webp" alt={alt}>
			<img class="h3 db no-select" src="{imagesBaseUrl}tri.webp" alt={alt}>
			<img class="h3 db no-select" src="{imagesBaseUrl}unesco.webp" alt={alt}>
			<img class="h3 db no-select" src="{imagesBaseUrl}asc.webp" alt={alt}>
		</div>
		<!--
			Golden Donor
			Associato
			Vincitore del premio UNESCO 2013 e 2015 premio Turismo Responsabile 2014
			Partner
		-->
	</article>
</Row>