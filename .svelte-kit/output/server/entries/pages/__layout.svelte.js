import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute } from "../../chunks/index-ed6b8b8e.js";
import { R as Row } from "../../chunks/Row-87f8cf8f.js";
var app = "";
var Fraunces_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "i{font-style:normal}body{font-family:sans-serif;margin:0;padding:0}@font-face{font-family:'Fraunces Variable Italic';src:url('https://viaggilevi.vercel.app/fonts/Fraunces-Italic--latin_basic.woff2') format('woff2');font-weight:normal;font-style:normal}@font-face{font-family:'Fraunces Variable';src:url('https://viaggilevi.vercel.app/fonts/Fraunces--latin_basic.woff2') format('woff2');font-weight:normal;font-style:normal}.fraunces-i{transition:font-variation-settings .4s ease 0s!important;font-family:'Fraunces Variable Italic', serif;font-variation-settings:'wght' 366,\n	  'opsz' 100,\n	  'SOFT' 20,\n	  'WONK' 1}.fraunces{transition:font-variation-settings .4s ease 0s!important;font-family:'Fraunces Variable', serif;font-variation-settings:'wght' 366,\n		'opsz' 96,\n		'SOFT' 16,\n		'WONK' 0}.fw1{font-weight:100;font-variation-settings:'wght' 100}.fw2{font-weight:200;font-variation-settings:'wght' 200}.fw3{font-weight:300;font-variation-settings:'wght' 300}.fw4{font-weight:400;font-variation-settings:'wght' 400}.fw5{font-weight:500;font-variation-settings:'wght' 500}.fw6{font-weight:600;font-variation-settings:'wght' 600}.fw7{font-weight:700;font-variation-settings:'wght' 700}.fw8{font-weight:800;font-variation-settings:'wght' 800}.fw9{font-weight:900;font-variation-settings:'wght' 900}.hover-fw1:hover{font-variation-settings:'wght' 100}.hover-fw2:hover{font-variation-settings:'wght' 200}.hover-fw3:hover{font-variation-settings:'wght' 300}.hover-fw4:hover{font-variation-settings:'wght' 400}.hover-fw5:hover{font-variation-settings:'wght' 500}.hover-fw6:hover{font-variation-settings:'wght' 600}.hover-fw7:hover{font-variation-settings:'wght' 700}.hover-fw8:hover{font-variation-settings:'wght' 800}.hover-fw9:hover{font-variation-settings:'wght' 900}",
  map: null
};
const Fraunces = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return ``;
});
var LeviMontage_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--montage-img:240px;--montage-duration:1.6s}.montage.svelte-1it2a4k.svelte-1it2a4k{width:var(--montage-img);height:var(--montage-img)}.montage.svelte-1it2a4k img.svelte-1it2a4k{will-change:transform;width:var(--montage-img);transition:all var(--montage-duration) cubic-bezier( 0.28, -0.07, 0.67, 2.00);transition-delay:calc(var(--montage-duration)/0.8);z-index:4;transform:scale(1.0) rotate(4.3deg)}.montage.svelte-1it2a4k img.svelte-1it2a4k:nth-child(1){z-index:3;left:calc(var(--montage-img)*0.53);transform:scale(0.7) rotate(3.5deg)}.montage.svelte-1it2a4k img.svelte-1it2a4k:nth-child(2){z-index:2;right:calc(var(--montage-img)*0.59);transform:scale(0.8) rotate(-5.5deg)}.montage.visible.svelte-1it2a4k img.svelte-1it2a4k{transform:scale(0.9) rotate(0deg)}.montage.visible.svelte-1it2a4k img.svelte-1it2a4k:nth-child(1){transform:scale(1.0) rotate(12deg);left:calc(var(--montage-img)*0.7)}.montage.visible.svelte-1it2a4k img.svelte-1it2a4k:nth-child(2){transform:scale(1.0) rotate(-9.5deg);right:calc(var(--montage-img)*0.7)}.diamond.svelte-1it2a4k.svelte-1it2a4k{background:currentColor;transform:rotate(45deg)}",
  map: null
};
let alt = "Presentazione di Maurizio Levi";
const LeviMontage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const imagesBaseUrl = `${"https://viaggilevi.vercel.app"}/images/`;
  $$result.css.add(css$1);
  return `${validate_component(Row, "Row").$$render($$result, {
    bg: "bg-linen",
    id: `${alt.toLowerCase().replace(/&amp;/g, "").replace(/&nbsp;/g, "-").replace(/\s/g, "-").replace(/\,/g, "").replace(/(&gt;)(?:&nbsp;|&#8209;|<br>)+(\s?&lt;)/g, "$1$2").replace(/--/g, "-")}`
  }, {}, {
    default: () => {
      return `
	<article id="${"viaggi-di-scoperta"}"><h4 class="${"mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"}">i viaggi di maurizio levi</small>
			<span class="${"fraunces"}">Viaggi </span><span class="${"fraunces-i"}">di\xA0scoperta</span></h4>

		
		<figure class="${"montage " + escape("") + " cf relative top-0 w-100 mr-auto ml-auto svelte-1it2a4k"}"><img class="${"absolute shadow-5 svelte-1it2a4k"}" src="${escape(imagesBaseUrl) + "MaurizioLevi_Anteprima.webp"}"${add_attribute("alt", alt, 0)}>
			<img class="${"absolute shadow-5 svelte-1it2a4k"}" src="${escape(imagesBaseUrl) + "Levi-Maurizio-768x510.webp"}"${add_attribute("alt", alt, 0)}>
			<img class="${"absolute shadow-5 svelte-1it2a4k"}" src="${escape(imagesBaseUrl) + "Maurizio_Levi.webp"}"${add_attribute("alt", alt, 0)}></figure>

		<div class="${"fl w-100 w-50-m w-50-l lh-copy measure "}"><p class="${"pr3 fw5"}">Scegliamo itinerari che sono il frutto di anni di esperienza e sono il meglio possible in quel paese o in quella regione per la durata che\xA0\xE8\xA0prevista.</p></div>

		<div class="${"fl w-100 w-50-m w-50-l lh-copy measure"}"><blockquote class="${"fw4 ma0"}"><p class="${""}">Tutti i nostri viaggi integrano, ciascuno a suo modo, i nostri tre\xA0valori: <b class="${"o-80"}">natura, cultura e incontri con le\xA0popolazioni.</b></p>
				<p class="${""}">Esaminate attentamente i nostri itinerari, cercate di capire dale descrizioni il motivo delle nostre scelte e comprenderete la differenza con quanto proposto da\xA0altri.</p>
				<cite class="${"fraunces-i fs-normal tr"}"><p><span class="${"fw5"}">Maurizio Levi</span> e tutto lo staff de <span class="${"db"}">I\xA0Viaggi di Maurizio Levi</span></p></cite>
			</blockquote></div>

		<aside class="${"fl w-100 lh-copy pb4"}"><div class="${"fl w-100 w-third-m w-third-l f6 lh-copy measure "}"><aside class="${"golden-brown diamond h2 w2 mb3 mr-auto ml-auto mt3 svelte-1it2a4k"}"></aside>
					<h5 class="${"db black-70 fraunces mv0 pb2 tc f4 fw5 h3"}">Piccoli gruppi</h5>
				<p class="${"pr4"}">Favoriscono la coesione tra i partecipanti, riducono l&#39;impatto sull&#39;ambiente e acilitano &#39;opportunit\xE0 di instaurare rapporti con la popolazione locale.</p></div>
			<div class="${"fl w-100 w-third-m w-third-l f6 lh-copy measure"}"><aside class="${"golden-brown diamond h2 w2 mb3 mr-auto ml-auto mt3 svelte-1it2a4k"}"></aside>
					<h5 class="${"db black-70 fraunces mv0 pb2 tc f4 fw5 h3"}">Spirito di esplorazione</h5>
				<p class="${"pr3"}">Percorsi accuratamente studiati, con un contenuto culturale in senso ampio, in grado di svelare aspetti inattesi e fuori dagli stereotipi.</p></div>
			<div class="${"fl w-100 w-third-m w-third-l ph0 f6 lh-copy measure"}"><aside class="${"golden-brown diamond h2 w2 mb3 mr-auto ml-auto mt3 svelte-1it2a4k"}"></aside>
					<h5 class="${"db black-70 fraunces mv0 pb2 tc f4 fw5 h3"}">Cultura dell&#39;incontro</h5>
				<p class="${"pr4"}">Spirito di adattamento e predisposizione mentale verso realt\xE0 differenti, da rispettare e apprezzare proprio per la loro unicit\xE0.</p></div></aside></article>`;
    }
  })}`;
});
const Outro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LeviMontage, "LeviMontage").$$render($$result, {}, {}, {})}
`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".light-pagination-nav span.option.prev > svg path{fill:var(--golden-brown)!important}.light-pagination-nav span.option.next > svg path{fill:var(--golden-brown)!important}.light-pagination-nav span.option.prev{color:transparent;transition:background 0.4s ease 0s;-webkit-transition:background 0.4s ease 0s;border:solid 0.125rem var(--golden-brown);border-radius:9999px 0px 0px 9999px;font-size:1rem;padding-left:2rem;padding-right:2rem;padding-top:0.5rem;padding-bottom:0.5rem;border-right:none}.light-pagination-nav span.option.next{color:transparent;transition:background 0.4s ease 0s;-webkit-transition:background 0.4s ease 0s;border:solid 0.125rem var(--golden-brown);border-radius:0px 9999px 9999px 0px;font-size:1rem;padding-left:2rem;padding-right:2rem;padding-top:0.5rem;padding-bottom:0.5rem}.light-pagination-nav .option{border-top:solid 0.125rem var(--golden-brown);border-left:solid 0.125rem var(--golden-brown);border-bottom:solid 0.125rem var(--golden-brown);border-right:none;text-shadow:0px 0.125rem 0.125rem white;color:var(--golden-brown)!important}.light-pagination-nav .option:hover{background-color:rgba(255,255,255, 0.8)!important;color:var(--golden-brown);border:solid 0.125rem var(--golden-brown);border-right:none}.light-pagination-nav .pagination-nav{background:transparent!important;box-shadow:none}.option.active{text-shadow:0px 0.125rem 0.125rem black;color:white!important;background-color:var(--golden-brown)!important;border-top:solid 0.125rem var(--golden-brown);border-left:solid 0.125rem var(--golden-brown);border-bottom:solid 0.125rem var(--golden-brown);border-right:none}.option.active:hover{background-color:var(--golden-brown)!important;cursor:auto!important}svg{stroke-width:inherit;vector-effect:non-scaling-stroke}:root{--stroke-accent:white}.sw2{stroke-width:.25rem }.s--accent{stroke:var(--stroke-accent)}.transparent{color:transparent;fill:transparent}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

<main class="${"system backface-hidden charcoal"}">
	${slots.default ? slots.default({}) : ``}
	${validate_component(Outro, "Outro").$$render($$result, {}, {}, {})}</main>
${validate_component(Fraunces, "Fraunces").$$render($$result, {}, {}, {})}



`;
});
export { _layout as default };
