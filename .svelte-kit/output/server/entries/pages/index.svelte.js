import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as each } from "../../chunks/index-38784e15.js";
import { D as Defs, i as items } from "../../chunks/Defs-82001979.js";
import { p as paginate, Z as Zed, L as LightPaginationNav, H as Hero } from "../../chunks/Zed-2b386329.js";
import { R as Row } from "../../chunks/Row-a399cf4d.js";
import { S as SwapMontage } from "../../chunks/SwapMontage-ad87b83b.js";
var Anchor_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".ttt.svelte-w7xbkg:first-letter{text-transform:capitalize }.snap-start.svelte-w7xbkg{scroll-snap-align:start /* .snap-center `scroll-snap-align: center` */\n}.always-stop.svelte-w7xbkg{scroll-snap-stop:always}@media all and (orientation:portrait){.portrait-vh-75.svelte-w7xbkg{height:75vh}}@media all and (orientation:landscape){.landscape-vh-50.svelte-w7xbkg{height:50vh}}@media all and (orientation:portrait){@media screen and (min-width:30em) and (max-width:60em){.portrait-vh-50-m.svelte-w7xbkg{height:50vh}}@media screen and (min-width:60em){.portrait-vh-50-l.svelte-w7xbkg{height:50vh}}}",
  map: null
};
let truncate = 48;
let truncateNS = 66;
let truncateMedium = 108;
const Anchor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { title: title2 } = $$props;
  let { src } = $$props;
  let { headingEn } = $$props;
  let { headingIt } = $$props;
  let { figCaption } = $$props;
  let { slug } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.headingEn === void 0 && $$bindings.headingEn && headingEn !== void 0)
    $$bindings.headingEn(headingEn);
  if ($$props.headingIt === void 0 && $$bindings.headingIt && headingIt !== void 0)
    $$bindings.headingIt(headingIt);
  if ($$props.figCaption === void 0 && $$bindings.figCaption && figCaption !== void 0)
    $$bindings.figCaption(figCaption);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  $$result.css.add(css$3);
  return `<figure${add_attribute("id", id, 0)} class="${"flex-column flex flex-none white cover ma0 "}" style="${"--alpha:0.6; min-width: 100%; background-position-x: center; background-image: linear-gradient( hsla(30,28.95%,14.9%, var(--alpha)) 30%, hsla(30,28.95%,14.9%, var(--alpha)) 100%), url(" + escape(JSON.stringify(src)) + ")"}">
	
	
	
	<div class="${"w-100 snap-start always-stop svelte-w7xbkg"}">
		<svg style="${"transform: scale(150%)"}" class="${"portrait-vh-75 landscape-vh-50 portrait-vh-50-m portrait-vh-50-l w-100 pa0 ma0 s--accent sw2 transparent no-select svelte-w7xbkg"}"><use xlink:href="${"#" + escape(id)}"></use></svg>
	<div class="${"flex items-center w-100 f5 f4-ns f3-m f3-l measure pa2 measure-ns pa4-ns measure-m pa2-m measure-wide-l pa0-l mr-auto ml-auto"}"><div class="${"flex flex-column w-100 pv0 mv0"}"><span class="${"dark-beige tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f6-l fw5 ttu tc mv0"}"${add_attribute("data-en", headingEn, 0)}><!-- HTML_TAG_START -->${headingIt}<!-- HTML_TAG_END --></span>
			
			<h2 class="${"w-100 mv0 ph3 f2 f2-ns f1-m f1-l tc lh-solid fraunces"}"><!-- HTML_TAG_START -->${title2}<!-- HTML_TAG_END --></h2>
			
			<a href="${"#" + escape(slug)}" class="${"transition link pointer br-pill b--white ba bw1 ph4 ph3-ns ph5-m ph4-l pv2 bg-black-10 white hover-bg-black-50 transition-bg mr-auto ml-auto db tc ts1-dark-gray f5 f5-ns f7-m f5-l bg-transparent ttt mv3 svelte-w7xbkg"}" en="${"Discover The Americas"}" lang="${"it"}">scopri le destinazioni</a>
			</div></div>



	</div>
	<figcaption class="${"flex w-100 f5 f4-ns f3-m f3-l lh-copy measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto vh-05 landscape-vh-15-l"}"><div class="${"flex flex-column w-100 pb0 pb0-l"}">
				<span class="${"tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw3 mv0 pb3 db dn-ns dn-m dn-l"}"><!-- HTML_TAG_START -->${figCaption.length > truncate ? figCaption.substring(0, truncate) + "&hellip;" : figCaption}<!-- HTML_TAG_END --></span>

				
				<span class="${"tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw3 mv0 pb3 dn db-ns dn-m dn-l"}"><!-- HTML_TAG_START -->${figCaption.length > truncateNS ? figCaption.substring(0, truncateNS) + "&hellip;" : figCaption}<!-- HTML_TAG_END --></span>

				
				<span class="${"tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw3 mv0 pb3 dn dn-ns db-m db-l"}"><!-- HTML_TAG_START -->${figCaption.length > truncateMedium ? figCaption.substring(0, truncateMedium) + "&hellip;" : figCaption}<!-- HTML_TAG_END --></span></div></figcaption>
</figure>`;
});
var Snapper_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".touch-scroll.svelte-sbg52c{-webkit-overflow-scrolling:touch}.x-mandatory.svelte-sbg52c{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}:root{--time:0.6s\n	}@media all and (orientation:landscape){@media screen and (min-width:30em) and (max-width:60em){.landscape-vh-100-m.svelte-sbg52c{height:100vh}}}@media all and (orientation:portrait){@media screen and (min-width:30em) and (max-width:60em){.portrait-vh-75-m.svelte-sbg52c{height:75vh}}}aside.svelte-sbg52c::-webkit-scrollbar{display:none}aside.svelte-sbg52c{-ms-overflow-style:none;scrollbar-width:none}",
  map: null
};
const Snapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `${validate_component(Defs, "Defs").$$render($$result, {}, {}, {})}



	<aside class="${"vh-100 vh-100-ns landscape-vh-100-m portrait-vh-75-m vh-75-m vh-75-l flex items-center x-mandatory overflow-x-auto overflow-y-hidden touch-scroll w-100 ma0 pa0 backface-hidden charcoal system svelte-sbg52c"}">${each(items, ({ id, title: title2, src, headingEn, headingIt, figCaption, slug }) => {
    return `${validate_component(Anchor, "Anchor").$$render($$result, {
      id,
      title: title2,
      src,
      headingEn,
      headingIt,
      figCaption,
      slug
    }, {}, {})}
		`;
  })}
	</aside>`;
});
let pageSize$1 = 3;
const TripSpotlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paginated;
  let { payoff } = $$props;
  let { headline } = $$props;
  let { serp } = $$props;
  let { nurture } = $$props;
  let { length } = $$props;
  let { title: title2 } = $$props;
  let { excerpt } = $$props;
  let { cta } = $$props;
  let { image } = $$props;
  let { starting_price } = $$props;
  let { items: items2 } = $$props;
  let currentPage = 1;
  if ($$props.payoff === void 0 && $$bindings.payoff && payoff !== void 0)
    $$bindings.payoff(payoff);
  if ($$props.headline === void 0 && $$bindings.headline && headline !== void 0)
    $$bindings.headline(headline);
  if ($$props.serp === void 0 && $$bindings.serp && serp !== void 0)
    $$bindings.serp(serp);
  if ($$props.nurture === void 0 && $$bindings.nurture && nurture !== void 0)
    $$bindings.nurture(nurture);
  if ($$props.length === void 0 && $$bindings.length && length !== void 0)
    $$bindings.length(length);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.excerpt === void 0 && $$bindings.excerpt && excerpt !== void 0)
    $$bindings.excerpt(excerpt);
  if ($$props.cta === void 0 && $$bindings.cta && cta !== void 0)
    $$bindings.cta(cta);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.starting_price === void 0 && $$bindings.starting_price && starting_price !== void 0)
    $$bindings.starting_price(starting_price);
  if ($$props.items === void 0 && $$bindings.items && items2 !== void 0)
    $$bindings.items(items2);
  paginated = paginate({ items: items2, pageSize: pageSize$1, currentPage });
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-linen" }, {}, {
    default: () => {
      return `<article>
		<header><h4 class="${"mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"}">${escape(payoff)}</small>
				<span class="${"fraunces"}"><!-- HTML_TAG_START -->${headline.replace("<i", '<span class="fraunces-i"').replace("</i>", "</span>")}<!-- HTML_TAG_END --></span></h4>
			<p class="${"mt0 fw4 measure lh-copy"}">${escape(serp)}</p>
			<a${add_attribute("href", nurture, 0)} class="${"link pointer br-pill ba bw1 pv2 ph4 bg-transparent b--golden-brown golden-brown hover-bg-white-50 ts1-white transition-bg db tc f5 f5-ns f7-m f5-l ttu tracked w-third w-third-ns w-30-m w-20-l"}">esplora</a></header>
		<ul class="${"items list pl0 w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l"}">${each(paginated, ({ cta: cta2, excerpt: excerpt2, image: image2, length: length2, starting_price: starting_price2, title: title3 }, i) => {
        return `${validate_component(Zed, "Zed").$$render($$result, {
          length: length2,
          title: title3,
          excerpt: excerpt2,
          cta: cta2,
          image: image2,
          starting_price: starting_price2
        }, {}, {})}`;
      })}</ul>

		${validate_component(LightPaginationNav, "LightPaginationNav").$$render($$result, {
        totalItems: items2.length,
        pageSize: pageSize$1,
        currentPage,
        limit: 1,
        showStepOptions: true
      }, {}, {})}</article>`;
    }
  })}`;
});
let pageSize = 3;
const DepartingSoon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paginated;
  let { payoff } = $$props;
  let { headline } = $$props;
  let { serp } = $$props;
  let { nurture } = $$props;
  let { items: items2 } = $$props;
  let currentPage = 1;
  if ($$props.payoff === void 0 && $$bindings.payoff && payoff !== void 0)
    $$bindings.payoff(payoff);
  if ($$props.headline === void 0 && $$bindings.headline && headline !== void 0)
    $$bindings.headline(headline);
  if ($$props.serp === void 0 && $$bindings.serp && serp !== void 0)
    $$bindings.serp(serp);
  if ($$props.nurture === void 0 && $$bindings.nurture && nurture !== void 0)
    $$bindings.nurture(nurture);
  if ($$props.items === void 0 && $$bindings.items && items2 !== void 0)
    $$bindings.items(items2);
  paginated = paginate({ items: items2, pageSize, currentPage });
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-linen" }, {}, {
    default: () => {
      return `
	<article>
		<header><h4 class="${"mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"}">${escape(payoff)}</small>
				<span class="${"fraunces"}"><!-- HTML_TAG_START -->${headline.replace("<i", '<span class="fraunces-i"').replace("</i>", "</span>")}<!-- HTML_TAG_END --></span></h4>
			<p class="${"mt0 fw4 measure lh-copy"}">${escape(serp)}</p>
			<a${add_attribute("href", nurture, 0)} class="${"link pointer br-pill ba bw1 pv2 ph4 bg-transparent b--golden-brown golden-brown hover-bg-white-50 ts1-white transition-bg db tc f5 f5-ns f7-m f5-l ttu tracked w-third w-third-ns w-30-m w-20-l"}">esplora</a></header>

		<ul class="${"items list pl0 w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l"}">${each(paginated, ({ cta, excerpt, image, length, starting_price, title: title2 }, i) => {
        return `${validate_component(Zed, "Zed").$$render($$result, {
          length,
          title: title2,
          excerpt,
          cta,
          image,
          starting_price
        }, {}, {})}`;
      })}</ul>

		${validate_component(LightPaginationNav, "LightPaginationNav").$$render($$result, {
        totalItems: items2.length,
        pageSize,
        currentPage,
        limit: 1,
        showStepOptions: true
      }, {}, {})}</article>`;
    }
  })}`;
});
function transformTitle(title2) {
  return title2.replace(/(\<(h1|h2)\>|\<\/(h1|h2)\>)/g, "").replace(/\<(i|em)\>/g, '<span class="fraunces-i">').replace(/\<\/(i|em)\>/g, "<span>").replace("scoperta", '<span class="fraunces-i">scoperta</span>');
}
function transformText(text) {
  return text.replace(/\<p\>/g, '<p class="pb3">').replace(/\<\/p\>/g, "</p>");
}
function transformMotto(motto) {
  return motto.replace("viaggio", '<span class="fraunces-i">viaggio</span>');
}
const Mission = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 } = $$props;
  let { text } = $$props;
  let { motto } = $$props;
  let { images } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.motto === void 0 && $$bindings.motto && motto !== void 0)
    $$bindings.motto(motto);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-solitaire" }, {}, {
    default: () => {
      return `<article class="${"ph2 ph0-ns ph0-m ph0-l"}">

		<aside class="${"fl w-100 w-50-m w-50-l lh-copy measure "}">
			${validate_component(SwapMontage, "SwapMontage").$$render($$result, { images }, {}, {})}</aside>

		<div class="${"fw4 fl w-100 w-50-m w-50-l lh-copy measure"}"><h4 class="${"mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"}"><span class="${"fraunces"}"><!-- HTML_TAG_START -->${transformTitle(`${title2}`)}<!-- HTML_TAG_END --></span><br></h4>
			<div><!-- HTML_TAG_START -->${transformText(`${text}`)}<!-- HTML_TAG_END --></div></div>

		
		<blockquote class="${"golden-brown fraunces f2 f2-ns f1-m f1-l fw4 w-70 lh-solid tc ml-auto mr-auto"}"><!-- HTML_TAG_START -->${transformMotto(`${motto}`)}<!-- HTML_TAG_END --></blockquote></article>`;
    }
  })}`;
});
var index_svelte_svelte_type_style_lang$1 = "";
const css$1 = {
  code: "code.svelte-17y75eh{display:block;padding-bottom:2.5rem}",
  map: null
};
const Bespoke = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { payoff } = $$props;
  let { title: title2 } = $$props;
  let { text } = $$props;
  let { lines } = $$props;
  if ($$props.payoff === void 0 && $$bindings.payoff && payoff !== void 0)
    $$bindings.payoff(payoff);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.lines === void 0 && $$bindings.lines && lines !== void 0)
    $$bindings.lines(lines);
  $$result.css.add(css$1);
  return `

${validate_component(Row, "Row").$$render($$result, { bg: "bg-linen" }, {}, {
    default: () => {
      return `<code class="${"svelte-17y75eh"}">${escape(payoff ? payoff : "")}</code>
	<code class="${"svelte-17y75eh"}">${escape(title2 ? title2 : "")}</code>
	<code class="${"svelte-17y75eh"}">${escape(text ? text : "")}</code>

	${each(lines, (itinerary) => {
        return `<code class="${"svelte-17y75eh"}">${escape(itinerary.title)}</code>
		<code class="${"svelte-17y75eh"}">${escape(itinerary.cta)}</code>
		<code class="${"svelte-17y75eh"}">${escape(itinerary.image)}
		</code>`;
      })}`;
    }
  })}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "code.svelte-17y75eh{display:block;padding-bottom:2.5rem}",
  map: null
};
const News = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { news } = $$props;
  if ($$props.news === void 0 && $$bindings.news && news !== void 0)
    $$bindings.news(news);
  $$result.css.add(css);
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-cocoa linen" }, {}, {
    default: () => {
      return `${each(news, ({ image, text, cta }) => {
        return `<code class="${"svelte-17y75eh"}">${escape(cta ? cta : "")}</code>
		<code class="${"svelte-17y75eh"}">${escape(text ? text : "")}</code>
		<code class="${"svelte-17y75eh"}">${escape(image ? image : "")}
		</code>`;
      })}`;
    }
  })}`;
});
const prerender = true;
let title = "Maurizio Levi";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { homepage } = $$props;
  let tripSpotlight = Object.values(homepage.travels_in_evidence.travels);
  let tripSpotlightItems = tripSpotlight;
  let departingSoon = Object.values(homepage.departing_travels.travels);
  let departingSoonItems = departingSoon;
  if ($$props.homepage === void 0 && $$bindings.homepage && homepage !== void 0)
    $$bindings.homepage(homepage);
  return `


${validate_component(Hero, "Hero").$$render($$result, {
    image: homepage.hero.image,
    payoff: homepage.hero.payoff,
    title: homepage.hero.title,
    location: homepage.hero.location,
    overlay_image: homepage.hero.overlay_image
  }, {}, {})}

${validate_component(Mission, "Mission").$$render($$result, {
    title: homepage.mission.title,
    text: homepage.mission.text,
    motto: homepage.mission.motto,
    images: homepage.mission.images
  }, {}, {})}

${validate_component(Row, "Row").$$render($$result, { bg: "bg-linen" }, {}, {
    default: () => {
      return `${validate_component(TripSpotlight, "TripSpotlight").$$render($$result, {
        payoff: homepage.travels_in_evidence.payoff,
        headline: homepage.travels_in_evidence.title,
        serp: homepage.travels_in_evidence.text,
        nurture: homepage.travels_in_evidence.cta,
        items: tripSpotlightItems
      }, {}, {})}

  ${validate_component(DepartingSoon, "DepartingSoon").$$render($$result, {
        payoff: homepage.departing_travels.payoff,
        headline: homepage.departing_travels.title,
        serp: homepage.departing_travels.text,
        nurture: homepage.departing_travels.cta,
        items: departingSoonItems
      }, {}, {})}
  <hr>`;
    }
  })}


${validate_component(Snapper, "Snapper").$$render($$result, {}, {}, {})}

${validate_component(Bespoke, "Bespoke").$$render($$result, {
    payoff: homepage.travel_lines.payoff,
    title: homepage.travel_lines.title,
    text: homepage.travel_lines.text,
    lines: homepage.travel_lines.lines
  }, {}, {})}

${validate_component(News, "News").$$render($$result, { news: homepage.blog }, {}, {})}





${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}`, ""}


`;
});
export { Routes as default, prerender };
