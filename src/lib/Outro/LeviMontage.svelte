<script>

const imagesBaseUrl = `${import.meta.env.VITE_BASEURL}/images/`; // usage: `{imagesBaseUrl}`
let alt = 'Maurizio Levi on location'; // `alt={alt}`
import viewport from '$lib/useViewportAction';

let visible;
</script>

<section class="bg-linen" id="viaggi-di-scoperta">
	<article class="highlight db black-70 f5 f4-ns f3-m f3-l lh-copy pb6 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto">
		<h4 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
			<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">i viaggi di maurizio levi</small>
			<span class="fraunces">Viaggi </span><span class="fraunces-i">di&nbsp;scoperta</span>
		</h4>

		<!-- usage: `.montage img:nth-child(0)` -->
		<figure
			use:viewport
			on:enterViewport={() => visible = true }
			on:exitViewport={() => visible = false }
			class="montage { visible ? 'visible' : '' }
			cf relative top-0 w-100 mr-auto ml-auto"
		>
			<img class="absolute shadow-5" src="{imagesBaseUrl}bodgaya-island-tun-sakaran-marine-park-sulu-sea.jpeg" alt={alt}>
			<img class="absolute shadow-5" src="{imagesBaseUrl}bodgaya-island-tun-sakaran-marine-park-sulu-sea.jpeg" alt={alt}>
			<img class="absolute shadow-5" src="{imagesBaseUrl}bodgaya-island-tun-sakaran-marine-park-sulu-sea.jpeg" alt={alt}>
		</figure>

		<div class="fl w-100 w-50-m w-50-l lh-copy measure ">
			<p class="pr3 fw5">Scegliamo itinerari che sono il frutto di anni di esperienza e sono il meglio possible in quel paese o in quella regione per la durata che&nbsp;è&nbsp;prevista.</p>
		</div>

		<div class="fl w-100 w-50-m w-50-l lh-copy measure">
			<blockquote class="fw4 ma0">
				<p class="">Tutti i nostri viaggi integrano, ciascuno a suo modo, i nostri tre&nbsp;valori: <b class="o-80">natura, cultura e incontri con le&nbsp;popolazioni.</b></p>
				<p class="">Esaminate attentamente i nostri itinerari, cercate di capire dale descrizioni il motivo delle nostre scelte e comprenderete la differenza con quanto proposto da&nbsp;altri.</p>
				<cite class="fraunces-i fs-normal tr"><p>
					<span class="fw5">Maurizio Levi</span> e tutto lo staff de <span class="db">I&nbsp;Viaggi di Maurizio Levi</span>
					</p>
				</cite>
			<!-- system fw5 -->
			</blockquote>
		</div>

		<aside class="fl w-100 lh-copy pb4">
			<div class="fl w-100 w-third-m w-third-l f6 lh-copy measure ">
							<aside class="golden-brown diamond h2 w2 mb3 mr-auto ml-auto mt3"></aside>
					<h5 class="db black-70 fraunces mv0 pb2 tc f4 fw5 h3">Piccoli gruppi</h5>
				<p class="pr4">Favoriscono la coesione tra i partecipanti, riducono l'impatto sull'ambiente e acilitano 'opportunità di instaurare rapporti con la popolazione locale.</p>
		</div>
			<div class="fl w-100 w-third-m w-third-l f6 lh-copy measure">
				<aside class="golden-brown diamond h2 w2 mb3 mr-auto ml-auto mt3"></aside>
					<h5 class="db black-70 fraunces mv0 pb2 tc f4 fw5 h3" >Spirito di esplorazione</h5>
				<p class="pr3">Percorsi accuratamente studiati, con un contenuto culturale in senso ampio, in grado di svelare aspetti inattesi e fuori dagli stereotipi.</p>
			</div>
			<div class="fl w-100 w-third-m w-third-l ph0 f6 lh-copy measure">
							<aside class="golden-brown diamond h2 w2 mb3 mr-auto ml-auto mt3"></aside>
					<h5 class="db black-70 fraunces mv0 pb2 tc f4 fw5 h3">Cultura dell'incontro</h5>
				<p class="pr4">Spirito di adattamento e predisposizione mentale verso realtà differenti, da rispettare e apprezzare proprio per la loro unicità.</p>
			</div>
		</aside>
	</article>
</section>

<style>
	/****** $ BREAKOUT ABOUT MONTAGE COMPONENT $ *******/

/*
About `.montage`, is NOT integrated into Tachyonshower.
This req. prevent horizontal scroll css: `overflow-x-hidden`
*/
:root {
--montage-img: 240px; /*   var(--montage-img) */
--montage-duration: 1.6s; /*   var(--montage-duration) */
}
.montage {
  width: var(--montage-img);
  height: var(--montage-img);
/* height: 300px; */
}

.montage img {
  /* css-tricks.com/almanac/properties/b/box-shadow/ */
  will-change: transform;
  width: var(--montage-img);
/*   -webkit-transition: all var(--montage-duration) ease-out;
  -moz-transition: all var(--montage-duration) ease-out;
  -ms-transition: all var(--montage-duration) ease-out;
  -o-transition: all var(--montage-duration) ease-out; */
  transition: all var(--montage-duration) ease-out;
	transition-delay: calc(var(--montage-duration)/2); /* w3schools.com/CSSref/css3_pr_transition-delay.asp */
}

.montage img {
  z-index: 4;
/*   -webkit-transform: scale(1.0) rotate(4.3deg);
  -moz-transform: scale(1.0) rotate(4.3deg);
  -ms-transform: scale(1.0) rotate(4.3deg);
  -o-transform: scale(1.0) rotate(4.3deg); */
  transform: scale(1.0) rotate(4.3deg);
}

/* reduction class: css-tricks.com/almanac/selectors/n/nth-last-child/ */
.montage img:nth-child(1) {
  z-index: 3;
  left: calc(var(--montage-img)*0.53);
/*   -webkit-transform: scale(0.7) rotate(3.5deg);
  -moz-transform: scale(0.7) rotate(3.5deg);
  -ms-transform: scale(0.7) rotate(3.5deg);
  -o-transform: scale(0.7) rotate(3.5deg); */
  transform: scale(0.7) rotate(3.5deg);
}

.montage img:nth-child(2) {
  z-index: 2;
  right: calc(var(--montage-img)*0.59);
/*   -webkit-transform: scale(0.8) rotate(-5.5deg);
  -moz-transform: scale(0.8) rotate(-5.5deg);
  -ms-transform: scale(0.8) rotate(-5.5deg);
  -o-transform: scale(0.8) rotate(-5.5deg); */
  transform: scale(0.8) rotate(-5.5deg);
}


/* debug: `hover` effect working here: svelte.dev/repl/9cd7aa0a92444ef2b52804c49b47697f?version=3 */
/* learn: `use:viewport` effect working here: svelte.dev/repl/15106ed5401a47a2a8a6281da630c658?version=3.48.0 */
.montage.visible img {
/*   -webkit-transform: scale(0.9) rotate(0deg);
  -moz-transform: scale(0.9) rotate(0deg);
  -ms-transform: scale(0.9) rotate(0deg);
  -o-transform: scale(0.9) rotate(0deg); */
  transform: scale(0.9) rotate(0deg);
}

.montage.visible img:nth-child(1) {
/*   -webkit-transform: scale(1.0) rotate(12deg);
  -moz-transform: scale(1.0) rotate(9deg);
  -ms-transform: scale(1.0) rotate(9deg);
  -o-transform: scale(1.0) rotate(9deg); */
  transform: scale(1.0) rotate(12deg);
  left: calc(var(--montage-img)*0.7);
}

.montage.visible img:nth-child(2) {
/*   -webkit-transform: scale(1.0) rotate(-9.5deg);
  -moz-transform: scale(1.0) rotate(-9.5deg);
  -ms-transform: scale(1.0) rotate(-9.5deg);
  -o-transform: scale(1.0) rotate(-9.5deg); */
  transform: scale(1.0) rotate(-9.5deg);
  right: calc(var(--montage-img)*0.7);
}

.diamond {
	background: currentColor;
  transform: rotate(45deg);
}

/* fix: CSS SHAPES DO NOT LIVE HERE, this is just initial!
<!--
  <div class="cf w-100 h2 debug">
  	<aside class="green triangle-up h1 w2"></aside>
  </div>

  <div class="cf w-100 h2 debug">
  	<aside class="dark-blue triangle-down h1 w2"></aside>
  </div>

  <div class="cf w-100 h2 debug">
  	<aside class="dark-pink triangle-left h2 w1"></aside>
  </div>

  <div class="cf w-100 h2 debug">
  	<aside class="blue triangle-right h2 w1"></aside>
  </div>
-->
*/
</style>