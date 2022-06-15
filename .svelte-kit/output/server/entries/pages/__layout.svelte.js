import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, b as each, d as subscribe } from "../../chunks/index-38784e15.js";
import { p as page } from "../../chunks/stores-3acf7a4b.js";
import { R as Row } from "../../chunks/Row-8144bead.js";
import { i as items, D as Defs } from "../../chunks/Defs-87d248ff.js";
const PageTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `

<div style="${"display: inline-grid"}"><div style="${"width: 100vw"}">
			${slots.default ? slots.default({}) : ``}</div></div>`;
});
var Fraunces_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "i{font-style:normal}body{font-family:sans-serif;margin:0;padding:0}.fraunces-i{transition:font-variation-settings .4s ease 0s!important;font-family:'Fraunces Variable Italic', serif;font-variation-settings:'wght' 336,\n	  'opsz' 100,\n	  'SOFT' 48,\n	  'WONK' 1}.fraunces{transition:font-variation-settings .4s ease 0s!important;font-family:'Fraunces Variable', serif;font-variation-settings:'wght' 366,\n		'opsz' 96,\n		'SOFT' 16,\n		'WONK' 0}.fw1{font-weight:100;font-variation-settings:'wght' 100}.fw2{font-weight:200;font-variation-settings:'wght' 200}.fw3{font-weight:300;font-variation-settings:'wght' 300}.fw4{font-weight:400;font-variation-settings:'wght' 400}.fw5{font-weight:500;font-variation-settings:'wght' 500}.fw6{font-weight:600;font-variation-settings:'wght' 600}.fw7{font-weight:700;font-variation-settings:'wght' 700}.fw8{font-weight:800;font-variation-settings:'wght' 800}.fw9{font-weight:900;font-variation-settings:'wght' 900}.hover-fw1:hover{font-variation-settings:'wght' 100}.hover-fw2:hover{font-variation-settings:'wght' 200}.hover-fw3:hover{font-variation-settings:'wght' 300}.hover-fw4:hover{font-variation-settings:'wght' 400}.hover-fw5:hover{font-variation-settings:'wght' 500}.hover-fw6:hover{font-variation-settings:'wght' 600}.hover-fw7:hover{font-variation-settings:'wght' 700}.hover-fw8:hover{font-variation-settings:'wght' 800}.hover-fw9:hover{font-variation-settings:'wght' 900}",
  map: null
};
const Fraunces = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return ``;
});
var LeviMontage_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ":root{--montage-img:240px;--montage-duration:1.6s}.montage.svelte-1it2a4k.svelte-1it2a4k{width:var(--montage-img);height:var(--montage-img)}.montage.svelte-1it2a4k img.svelte-1it2a4k{will-change:transform;width:var(--montage-img);transition:all var(--montage-duration) cubic-bezier( 0.28, -0.07, 0.67, 2.00);transition-delay:calc(var(--montage-duration)/0.8);z-index:4;transform:scale(1.0) rotate(4.3deg)}.montage.svelte-1it2a4k img.svelte-1it2a4k:nth-child(1){z-index:3;left:calc(var(--montage-img)*0.53);transform:scale(0.7) rotate(3.5deg)}.montage.svelte-1it2a4k img.svelte-1it2a4k:nth-child(2){z-index:2;right:calc(var(--montage-img)*0.59);transform:scale(0.8) rotate(-5.5deg)}.montage.visible.svelte-1it2a4k img.svelte-1it2a4k{transform:scale(0.9) rotate(0deg)}.montage.visible.svelte-1it2a4k img.svelte-1it2a4k:nth-child(1){transform:scale(1.0) rotate(12deg);left:calc(var(--montage-img)*0.7)}.montage.visible.svelte-1it2a4k img.svelte-1it2a4k:nth-child(2){transform:scale(1.0) rotate(-9.5deg);right:calc(var(--montage-img)*0.7)}.diamond.svelte-1it2a4k.svelte-1it2a4k{background:currentColor;transform:rotate(45deg)}",
  map: null
};
let alt$1 = "Presentazione di Maurizio Levi";
const LeviMontage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const imagesBaseUrl = `${"https://viaggilevi.vercel.app"}/images/`;
  $$result.css.add(css$4);
  return `${validate_component(Row, "Row").$$render($$result, {
    bg: "bg-linen",
    id: `${alt$1.toLowerCase().replace(/&amp;/g, "").replace(/&nbsp;/g, "-").replace(/\s/g, "-").replace(/\,/g, "").replace(/(&gt;)(?:&nbsp;|&#8209;|<br>)+(\s?&lt;)/g, "$1$2").replace(/--/g, "-")}`
  }, {}, {
    default: () => {
      return `
	<article id="${"viaggi-di-scoperta"}"><h4 class="${"mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"}">i viaggi di maurizio levi</small>
			<span class="${"fraunces"}">Viaggi </span><span class="${"fraunces-i"}">di\xA0scoperta</span></h4>

		
		<figure class="${"montage " + escape("") + " cf relative top-0 w-100 mr-auto ml-auto svelte-1it2a4k"}"><img class="${"absolute shadow-5 svelte-1it2a4k"}" src="${escape(imagesBaseUrl) + "MaurizioLevi_Anteprima.webp"}"${add_attribute("alt", alt$1, 0)}>
			<img class="${"absolute shadow-5 svelte-1it2a4k"}" src="${escape(imagesBaseUrl) + "Levi-Maurizio-768x510.webp"}"${add_attribute("alt", alt$1, 0)}>
			<img class="${"absolute shadow-5 svelte-1it2a4k"}" src="${escape(imagesBaseUrl) + "Maurizio_Levi.webp"}"${add_attribute("alt", alt$1, 0)}></figure>

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
const Subscribe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-solitaire" }, {}, {
    default: () => {
      return `<div class="${"highlight db black-70 f5 f4-ns f3-m f3-l lh-copy pb6 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto"}">
	<h4 class="${"mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"}">Sottoscrivere</small>
		<span class="${"fraunces"}">Il nostro</span><span class="${"fraunces-i"}">\xA0notiziario</span></h4>

	<p>Resta aggiornato e ricevi le nostre comunicazioni sui viaggi, sulle promozioni e sulle numerose novit\xE0.</p>

	

		</div>`;
    }
  })}`;
});
let alt = "Maurizio Levi Official Partner";
const Partners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imagesBaseUrl = `${"https://viaggilevi.vercel.app"}/images/`;
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-white" }, {}, {
    default: () => {
      return `<article class="${"highlight db black-70 f5 f4-ns f3-m f3-l lh-copy pv4 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto"}"><h4 class="${"mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"}">I viaggi di maurizio levi</small>
			<span class="${"fraunces"}">I nostri</span><span class="${"fraunces-i"}">\xA0partner</span></h4>
		<div class="${"flex justify-between w-100"}"><img class="${"h3 db no-select"}" src="${escape(imagesBaseUrl) + "fai.png"}"${add_attribute("alt", alt, 0)}>
			<img class="${"h2 db no-select"}" src="${escape(imagesBaseUrl) + "fto.png"}"${add_attribute("alt", alt, 0)}>
			<img class="${"h3 db no-select"}" src="${escape(imagesBaseUrl) + "tri.png"}"${add_attribute("alt", alt, 0)}>
			<img class="${"h3 db no-select"}" src="${escape(imagesBaseUrl) + "unesco.png"}"${add_attribute("alt", alt, 0)}>
			<img class="${"h3 db no-select"}" src="${escape(imagesBaseUrl) + "asc.png"}"${add_attribute("alt", alt, 0)}></div>
		</article>`;
    }
  })}`;
});
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-white" }, {}, {
    default: () => {
      return `<div class="${"highlight db black-70 f5 f4-ns f3-m f3-l lh-copy pv4 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto"}"><h4 class="${"mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"}">I viaggi di maurizio levi</small>
			<span class="${"fraunces"}">Seguici</span></h4>

		<div class="${"flex justify-between w-100"}">
			
			<a class="${"link inherit pointer transition hover-golden-brown o-80 w-10 w3-ns h3-ns w-10-m w3-l h3-l"}" href="${"https://www.facebook.com/I-Viaggi-di-Maurizio-Levi-207083192654850/"}" title="${"Facebook"}"><svg viewBox="${"0 0 16 16"}" class="${"no-select"}"><use xlink:href="${"#fb"}"></use></svg></a>

			<a class="${"link inherit pointer transition hover-golden-brown o-80 w-10 w3-ns h3-ns w-10-m w3-l h3-l"}" href="${"https://twitter.com/viaggilevi"}" title="${"Twitter"}"><svg viewBox="${"0 0 16 16"}" class="${"no-select"}"><use xlink:href="${"#twitter"}"></use></svg></a>

			<a class="${"link inherit pointer transition hover-golden-brown o-80 w-10 w3-ns h3-ns w-10-m w3-l h3-l"}" href="${"https://www.youtube.com/user/viaggidimauriziolevi"}" title="${"YouTube"}"><svg viewBox="${"0 0 16 16"}" class="${"no-select"}"><use xlink:href="${"#yt"}"></use></svg></a>

			<a class="${"link inherit pointer transition hover-golden-brown o-80 w-10 w3-ns h3-ns w-10-m w3-l h3-l"}" href="${"https://www.instagram.com/p/BKVQ5cvAvht/"}" title="${"Instagram"}"><svg viewBox="${"0 0 16 16"}" class="${"no-select"}"><use xlink:href="${"#instagram"}"></use></svg></a>

			<a class="${"link inherit pointer transition hover-golden-brown o-80 w-10 w3-ns h3-ns w-10-m w3-l h3-l"}" href="${"https://za.pinterest.com/iviaggidimauriz/"}" title="${"Pintrest"}"><svg viewBox="${"0 0 16 16"}" class="${"no-select"}"><use xlink:href="${"#pintrest"}"></use></svg></a></div></div>`;
    }
  })}

`;
});
var index_svelte_svelte_type_style_lang$1 = "";
const css$3 = {
  code: ".hover-b--inherit.svelte-1qtd8c1{transition:all 0.4s ease 0s!important}.hover-b--inherit.svelte-1qtd8c1:hover{border-color:inherit}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-solitaire" }, {}, {
    default: () => {
      return `

<div class="${"highlight db black-70 f2 f4-ns f3-m f2-l lh-copy pb6 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto pv5"}"><section class="${"fl w-100 cf"}"><div class="${"fl w-100 w-third-ns w-third-m w-two-thirds-l lh-copy measure "}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l ttu mv0 pb2"}">destinazioni</small>
			<hr class="${"inherit b--golden-brown"}">
			<ul class="${"list pl0 fraunces pr1 pr4-ns pr4-m pr1-l"}">${each(items, ({ title, slug }) => {
        return `<li class="${"truncate"}"><a${add_attribute("href", `#${slug}`, 0)} class="${"link inherit o-80 fw4 hover-fw6 hover-o-100 hover-o-100 "}">${escape(title)}</a>
						
					</li>`;
      })}</ul></div>

	<div class="${"fl w-100 w-third-ns w-third-m w-third-l lh-copy measure"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l ttu mv0 pb2"}">contattaci</small>
	<hr class="${"inherit b--golden-brown"}">
		<ul class="${"list pl0 fraunces pr1 pr4-ns pr4-m pr1-l mb0-l"}"><li class="${"truncate"}"><small class="${"golden-brown o-50 db tracked-none tracked-ns tracked-m tracked-mega-l ttu pt3 pb1 system f6 f5-ns f4-m f3-l"}">chiamaci</small><small><a href="${"tel:+390234934528"}" class="${"link inherit o-80 fw4 bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100  svelte-1qtd8c1"}">+39\xA002\xA034934528</a></small></li>
			<li class="${"truncate"}"><small class="${"golden-brown o-50 db tracked-none tracked-ns tracked-m tracked-mega-l ttu pt3 pb1 system f6 f5-ns f4-m f3-l"}">scrivici</small><small><a href="${"mailto:info@viaggilevi.com"}" class="${"link inherit o-80 fw4 bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100  svelte-1qtd8c1"}" style="${"letter-spacing:-0.0125em"}">info@viaggilevi.com</a></small></li>
</ul></div>
	<div class="${"fl w-100 w-third-ns w-third-m w-third-l ph0 lh-copy measure "}"><small class="${"golden-brown o-50 db tracked-none tracked-ns tracked-m tracked-mega-l fw5 ttu mv0 pb2 dn-l"}">\xA0</small>
<hr class="${"inherit b--golden-brown dn-l"}">
<address class="${"fs-normal"}"><ul class="${"list pl0 fraunces pr1 pr4-ns pr4-m pr1-l mt0-l"}"><li class="${"truncate"}"><small class="${"golden-brown o-50 db tracked-none tracked-ns tracked-m tracked-mega-l ttu pt3 pb1 system f6 f5-ns f4-m f3-l"}">trovaci</small>
<small><a href="${"https://google.it/maps/place/Via+Francesco+Londonio,+4,+20154+Milano"}" class="${"link inherit o-80 fw4 bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100  svelte-1qtd8c1"}">Via Londonio 4<br>20154 Milano</a></small></li></ul></address></div>
</section></div>`;
    }
  })}`;
});
const Terms = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-cocoa" }, {}, {
    default: () => {
      return `<article class="${"highlight db black-70 f4 f5-ns f3-m f3-l lh-copy white pt4 pb7 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto"}"><section class="${"fl w-100 cf"}"><div class="${"fl w-100 w-100-ns w-third-m w-third-l f6 lh-copy measure tc tc-ns tl-m tl-l"}"><a href="${"#termini"}" class="${"tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2 link pointer inherit o-70 hover-o-100 transition"}"><span class="${"fw2"}">Cookie\xA0Policy &amp;\xA0</span>Termini</a></div>
			<div class="${"fl w-100 w-100-ns w-third-m w-third-l f6 lh-copy measure tc"}"><a href="${"#piva"}" class="${"tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2 link pointer inherit o-70 hover-o-100 transition"}"><span class="${"fw2"}">Partita\xA0Iva </span>12819030151</a></div>
			<div class="${"fl w-100 w-100-ns w-third-m w-third-l ph0 f6 lh-copy measure tc tc-ns tr-m tr-l"}"><a href="${"https://inspiredlabs.co.uk"}" title="${"Inspired Labs"}" class="${"tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2 link pointer inherit o-70 hover-o-100 transition"}"><span class="${"fw2"}">I Viaggi di Maurizio\xA0Levi</span>\xA0\xA9</a></div></section></article>`;
    }
  })}`;
});
const Outro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LeviMontage, "LeviMontage").$$render($$result, {}, {}, {})}
${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}
${validate_component(Partners, "Partners").$$render($$result, {}, {}, {})}
${validate_component(Social, "Social").$$render($$result, {}, {}, {})}
${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
${validate_component(Terms, "Terms").$$render($$result, {}, {}, {})}`;
});
var Buttons_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "a.svelte-1obr2tm{line-height:2rem}.active.svelte-1obr2tm{opacity:1 }@media all and (orientation:portrait){@media screen and (min-width:30em){}@media screen and (min-width:30em) and (max-width:60em){.portrait-f5-m.svelte-1obr2tm{font-size:1rem}}@media screen and (min-width:60em){}}",
  map: null
};
const Buttons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const buttons = [
    { name: "Partenze", route: "/partenze" },
    { name: "Viaggi", route: "/viaggi" },
    { name: "Chi Siamo", route: "/chi-siamo" },
    { name: "News", route: "/news" }
  ];
  $$result.css.add(css$2);
  pageUrl = $page.url.pathname;
  $$unsubscribe_page();
  return `${each(buttons, ({ route, name }, i) => {
    return `<a${add_attribute("href", route, 0)} sveltekit:prefetch${add_attribute("style", `width: calc( 100% / ${buttons.length})`, 0)} class="${[
      "h-100 nowrap link pv0 pv2 pv3-m pv3-l ttt bg-transparent f6 f4-ns f6-m portrait-f5-m f5-l pointer hover-o-100 transition white bn bb b--white ph0 o-80 svelte-1obr2tm",
      (route !== "/" ? pageUrl.match(route) : route === pageUrl) ? "active" : ""
    ].join(" ").trim()}">${escape(name)}</a>`;
  })}`;
});
var index_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".hover-b--inherit.svelte-1j0w8fz{border:2px solid inherit;transition:border 0.4s ease 0s!important;transform:translateZ(0)}.hover-b--inherit.svelte-1j0w8fz:hover{border-color:inherit\n}.levi-nav.svelte-1j0w8fz{--alpha:0.9;background-color:hsla(30,28.95%,14.9%,var(--alpha));-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}@media screen and (min-width:30em) and (max-width:60em){.w-45-m.svelte-1j0w8fz{width:45%}}@media all and (orientation:portrait){@media screen and (min-width:30em){}@media screen and (min-width:30em) and (max-width:60em){}@media screen and (min-width:60em){}}@media all and (orientation:landscape){@media screen and (min-width:30em){}@media screen and (min-width:30em) and (max-width:60em){.landscape-dn-m.svelte-1j0w8fz{display:none}.landscape-flex-m.svelte-1j0w8fz{display:flex}}@media screen and (min-width:60em){.landscape-top-0-l.svelte-1j0w8fz{top:0}.landscape-dn-l.svelte-1j0w8fz{display:none}.landscape-flex-l.svelte-1j0w8fz{display:flex}}}.hover-saturate.svelte-1j0w8fz:hover{filter:saturate(1.8)}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav class="${"levi-nav fixed z-max w-100 top-0 landscape-top-0-ns landscape-top-0-m landscape-top-0-l flex tc white system svelte-1j0w8fz"}"><div class="${"w-100 flex justify-between f5 f4-ns f3-m f3-l lh-copy pv0 pa2 measure ph4-ns measure-ns ph2-m measure-m pa0-l measure-wide-l mr-auto ml-auto"}"><h1 class="${"tl w-50 w-50-ns w-25-m w-20-l pv0 h3 f5 f4-ns fs-m f5-l mv0"}"><a href="${"/"}"${add_attribute("style", !$page.url.pathname.includes("") ? `filter: saturate(1.8)` : "", 0)} class="${"link pointer transition hover-saturate svelte-1j0w8fz"}"><img class="${"w4"}" src="${"https://viaggilevi.vercel.app/images/levi-logo.svg"}" alt="${"Levi"}">
		<span class="${"visually-hidden"}">I Vaggi di Maurizio Levi</span></a></h1>


<div class="${"dn dn-ns w-45-m landscape-flex-m w-40-l justify-between landscape-flex-l items-center svelte-1j0w8fz"}">
	${validate_component(Buttons, "Buttons").$$render($$result, {}, {}, {})}</div>

<div class="${"w-80 w-80-ns w-40-m w-50-l f5 f4-ns fs-m f5-l flex items-center justify-around"}">
	<a href="${"tel:+390234934528"}" class="${"link flex items-center justify-center-l justify-bettween-m br-pill charcoal bg-solitaire hover-bg-linen pointer transition mr2"}">
		<svg viewBox="${"0 0 24 24"}" class="${"no-select h1 ph2 pv2 pr0-l pa2-ns h2-m pa2-m h2-l"}"><use xlink:href="${"#icon-phone"}"></use></svg>
		
		<span class="${"dn dn-ns dn-m flex-l w-100 h-100 truncate items-center f7 pv2-l fraunces pl0 ml0"}"><span class="${"fw4"}">+</span>
			<span class="${"fw4 bb b--transparent hover-b--inherit svelte-1j0w8fz"}">39\u200902\u20093493\u20094528</span></span>
		</a>

	<a href="${"mailto:info@viaggilevi.com"}" class="${"link flex items-center justify-center-l justify-bettween-m br-pill charcoal bg-solitaire hover-bg-linen pointer transition mr2 "}">
		<svg viewBox="${"0 0 24 24"}" class="${"no-select h1 pa2 pa2-ns h2-m pa2-m h2-l"}"><use xlink:href="${"#icon-open"}"></use></svg>
		
		<span class="${"dn dn-ns dn-m flex-l w-100 f7 pv2-l fraunces fw4 nowrap"}"><span class="${"fw4 bb b--transparent hover-b--inherit svelte-1j0w8fz"}">info\u2026</span></span>
		</a>



	<aside class="${"pl2 w-60 w-60-ns w-100-m w-100-l"}"><div class="${"flex items-center br-pill bg-meadow f6 f4-ns f6-m f5-l hover-bg-near-white bg-charcoal pointer transition "}">
		<input id="${"search"}" type="${"search"}" name="${"search"}" placeholder="${"Search"}" data-placeholder="${"Cerca"}" class="${"charcoal bg-transition input-reset br0 bb bw0 bg-transparent b--black f5 f5-ns f5-m f5-l tl items-center pv3 w-100 mr0 pr0 pl1 pl2-ns pl3-m pl3-l"}">
		
		
		<button class="${"inherit bg-near-black hover-bg-golden-brown pointer br-pill bn aspect-ratio--object relative w2 w3-l pr0 pl0 pv2"}" style="${"border-radius: 0px 9999px 9999px 0px"}">
		
		<svg viewBox="${"0 0 24 24"}" class="${"no-select h2 relative left-0"}"><use xlink:href="${"#icon-search"}"></use></svg></button></div></aside></div></div></nav>



<nav class="${"levi-nav fixed z-9999 w-100 bottom-0 landscape-dn-m landscape-dn-l flex tc  svelte-1j0w8fz"}">
<div class="${"w-100 flex justify-between f5 f4-ns f3-m f3-l lh-copy measure measure-ns measure-m measure-wide-l mr-auto ml-auto h3"}">


						

	${validate_component(Buttons, "Buttons").$$render($$result, {}, {}, {})}</div>
</nav>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".visually-hidden{height:1px;overflow:hidden;width:1px;position:absolute;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.light-pagination-nav span.option.prev > svg path{fill:var(--golden-brown)!important}.light-pagination-nav span.option.next > svg path{fill:var(--golden-brown)!important}.light-pagination-nav span.option.prev{color:transparent;transition:background 0.4s ease 0s;-webkit-transition:background 0.4s ease 0s;border:solid 0.125rem var(--golden-brown);border-radius:9999px 0px 0px 9999px;font-size:1rem;padding-left:2rem;padding-right:2rem;padding-top:0.5rem;padding-bottom:0.5rem;border-right:none}.light-pagination-nav span.option.next{color:transparent;transition:background 0.4s ease 0s;-webkit-transition:background 0.4s ease 0s;border:solid 0.125rem var(--golden-brown);border-radius:0px 9999px 9999px 0px;font-size:1rem;padding-left:2rem;padding-right:2rem;padding-top:0.5rem;padding-bottom:0.5rem}.light-pagination-nav .option{border-top:solid 0.125rem var(--golden-brown);border-left:solid 0.125rem var(--golden-brown);border-bottom:solid 0.125rem var(--golden-brown);border-right:none;text-shadow:0px 0.125rem 0.125rem white;color:hsla(30,28.95%,14.9%, 0.7)!important}.light-pagination-nav .option:hover{background-color:rgba(255,255,255, 0.8)!important;color:var(--cocoa)!important;border:solid 0.125rem var(--golden-brown);border-right:none}.light-pagination-nav .pagination-nav{background:transparent!important;box-shadow:none}.option.active{text-shadow:0px 0.125rem 0.125rem black;color:white!important;background-color:var(--golden-brown)!important;border-top:solid 0.125rem var(--golden-brown);border-left:solid 0.125rem var(--golden-brown);border-bottom:solid 0.125rem var(--golden-brown);border-right:none}.option.active:hover{background-color:var(--golden-brown)!important;cursor:auto!important;color:white!important}svg{stroke-width:inherit;vector-effect:non-scaling-stroke}:root{--stroke-accent:white}.sw2{stroke-width:.25rem }.s--accent{stroke:var(--stroke-accent)}.transparent{color:transparent;fill:transparent}",
  map: null
};
const load = async ({ url }) => ({ props: { url: url.href } });
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `





${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}

<div class="${"z-max absolute top-0 bg-gold"}">

	${escape($page.url.pathname)}</div>

<main class="${"system backface-hidden charcoal"}">
	${validate_component(PageTransition, "PageTransition").$$render($$result, { url }, {}, {
    default: () => {
      return `
		${slots.default ? slots.default({}) : ``}
		${validate_component(Outro, "Outro").$$render($$result, {}, {}, {})}`;
    }
  })}</main>

${validate_component(Defs, "Defs").$$render($$result, {}, {}, {})}
${validate_component(Fraunces, "Fraunces").$$render($$result, {}, {}, {})}





`;
});
export { _layout as default, load };
