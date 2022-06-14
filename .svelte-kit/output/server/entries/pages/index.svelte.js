import { c as create_ssr_component, v as validate_component, a as add_attribute, b as each, e as escape } from "../../chunks/index-38784e15.js";
import { D as Defs, i as items } from "../../chunks/Defs-87d248ff.js";
import { p as paginate, Z as Zed, L as LightPaginationNav } from "../../chunks/Zed-1169df9c.js";
import { R as Row } from "../../chunks/Row-8144bead.js";
import { H as Hero } from "../../chunks/index-18c0342e.js";
import { S as SwapMontage } from "../../chunks/SwapMontage-4b762ff3.js";
var index_svelte_svelte_type_style_lang$1 = "";
const css$1 = {
  code: ".grid.svelte-mdoe6m{display:grid;place-items:center}button.active.svelte-mdoe6m{opacity:1\n	}.x-mandatory.svelte-mdoe6m{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory\n	}.snap-start.svelte-mdoe6m{scroll-snap-align:start }@media all and (orientation:landscape){@media screen and (min-width:30em) and (max-width:60em){}}@media all and (orientation:portrait){@media screen and (min-width:30em) and (max-width:60em){}}",
  map: null
};
let truncate = 48;
let truncateNS = 66;
let truncateMedium = 108;
const Discover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageOverlay } = $$props;
  let activeIndex = 0;
  let container;
  if ($$props.imageOverlay === void 0 && $$bindings.imageOverlay && imageOverlay !== void 0)
    $$bindings.imageOverlay(imageOverlay);
  $$result.css.add(css$1);
  return `${validate_component(Defs, "Defs").$$render($$result, {}, {}, {})}


<aside class="${"bg-gold flex items-center x-mandatory overflow-x-auto overflow-y-hidden touch-scroll backface-hidden w-100 tc svelte-mdoe6m"}"${add_attribute("this", container, 0)}>${each(items, ({ id, title: title2, src, headingEn, headingIt, figCaption, slug }, i) => {
    return `
	
	<figure${add_attribute("id", id, 0)} class="${"snap-start flex-column flex flex-shrink-0 grid white cover ma0 svelte-mdoe6m"}" style="${"--alpha:0.6; min-width: 100%; background-position-x: center; background-image: linear-gradient( hsla(30,28.95%,14.9%, " + escape(imageOverlay === true ? `0.555` : `0`) + ") 0, hsla(30,28.95%,14.9%, " + escape(imageOverlay === true ? `0.555` : `0`) + ") 100%), url(" + escape(JSON.stringify(src)) + ")"}">
			
			

			<div class="${"w-100 snap-start always-stop svelte-mdoe6m"}">
				<svg style="${"transform: scale(150%)"}" class="${"portrait-vh-75 landscape-vh-50 portrait-vh-50-m portrait-vh-50-l w-100 pa0 ma0 s--accent sw2 transparent no-select"}">${!id ? `<use xlink:href="${"#compass"}"></use>` : `${id == "globe" ? `<use xlink:href="${"#globe"}"></use>` : `<use xlink:href="${"#" + escape(id)}"></use>`}`}</svg>
			<div class="${"flex items-center w-100 f5 f4-ns f3-m f3-l measure pa2 measure-ns pa4-ns measure-m pa2-m measure-wide-l pa0-l mr-auto ml-auto"}"><div class="${"flex flex-column w-100 pv0 mv0"}"><span class="${"dark-beige tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f6-l fw5 ttu tc mv0"}"${add_attribute("data-en", headingEn, 0)}><!-- HTML_TAG_START -->${headingIt}<!-- HTML_TAG_END --></span>
					
					<h2 class="${"w-100 mv0 ph3 f2 f2-ns f1-m f1-l tc lh-solid fraunces"}"><!-- HTML_TAG_START -->${title2}<!-- HTML_TAG_END --></h2>
					
					<a href="${"#" + escape(slug)}" class="${"transition link pointer br-pill b--white ba bw1 ph4 ph3-ns ph5-m ph4-l pv2 bg-black-10 white hover-bg-black-50 transition-bg mr-auto ml-auto db tc ts1-dark-gray f5 f5-ns f7-m f5-l bg-transparent ttt mv3"}" en="${"Discover The Americas"}" lang="${"it"}">scopri le destinazioni</a>
					
				</div></div>


			</div>
			<figcaption class="${"flex w-100 f5 f4-ns f3-m f3-l lh-copy measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto vh-05 landscape-vh-15-l"}"><div class="${"flex flex-column w-100 pb0 pb0-l"}">
						<span class="${"tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw3 mv0 pb3 db dn-ns dn-m dn-l"}"><!-- HTML_TAG_START -->${figCaption.length > truncate ? figCaption.substring(0, truncate) + "&hellip;" : figCaption}<!-- HTML_TAG_END --></span>

						
						<span class="${"tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw3 mv0 pb3 dn db-ns dn-m dn-l"}"><!-- HTML_TAG_START -->${figCaption.length > truncateNS ? figCaption.substring(0, truncateNS) + "&hellip;" : figCaption}<!-- HTML_TAG_END --></span>

						
						<span class="${"tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw3 mv0 pb3 dn dn-ns db-m db-l"}"><!-- HTML_TAG_START -->${figCaption.length > truncateMedium ? figCaption.substring(0, truncateMedium) + "&hellip;" : figCaption}<!-- HTML_TAG_END --></span>
				</div></figcaption>
		</figure>`;
  })}</aside>

<div class="${"db black-70 f5 f4-ns f3-m f3-l lh-copy measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto"}"><nav class="${"fl w-100 cf flex justify-center"}">${each(items, ({ title: title2 }, i) => {
    return `<button style="${"width:calc(100% / " + escape(items.length) + ")"}" class="${[
      "o-50 f7 inline-flex items-center justify-center pv1 bg-transparent bn golden-brown svelte-mdoe6m",
      i === activeIndex ? "active" : ""
    ].join(" ").trim()}">${escape(title2)}</button>`;
  })}</nav>

</div>`;
});
let pageSize$1 = 3;
const TripSpotlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  paginated = paginate({ items: items2, pageSize: pageSize$1, currentPage });
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-linen" }, {}, {
    default: () => {
      return `<article>
		<header><h4 class="${"mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"}">${escape(payoff)}</small>
				<span class="${"fraunces"}"><!-- HTML_TAG_START -->${headline.replace("<i", '<span class="fraunces-i"').replace("</i>", "</span>")}<!-- HTML_TAG_END --></span></h4>
			<p class="${"mt0 fw4 measure lh-copy"}">${escape(serp)}</p>
			<a${add_attribute("href", nurture, 0)} class="${"link pointer br-pill ba bw1 pv2 ph4 bg-transparent b--golden-brown golden-brown hover-bg-white-50 ts1-white transition-bg tc f5 f5-ns f7-m f5-l ttu tracked "}">esplora</a>
			</header>
		<ul class="${"items list pl0 w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l"}">${each(paginated, ({ cta, excerpt, image, length, startingPrice, title: title2 }, i) => {
        return `${validate_component(Zed, "Zed").$$render($$result, {
          length,
          title: title2,
          excerpt,
          cta,
          image,
          startingPrice
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
			<a${add_attribute("href", nurture, 0)} class="${"link pointer br-pill ba bw1 pv2 ph4 bg-transparent b--golden-brown golden-brown hover-bg-white-50 ts1-white transition-bg tc f5 f5-ns f7-m f5-l ttu tracked "}">esplora</a>
			</header>

		<ul class="${"items list pl0 w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l"}">${each(paginated, ({ cta, excerpt, image, length, startingPrice, title: title2 }, i) => {
        return `${validate_component(Zed, "Zed").$$render($$result, {
          length,
          title: title2,
          excerpt,
          cta,
          image,
          startingPrice
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

		
		<blockquote class="${"golden-brown fraunces f2 f2-ns f1-m f1-l w-70 lh-solid tc ml-auto mr-auto"}"><!-- HTML_TAG_START -->${transformMotto(`${motto}`)}<!-- HTML_TAG_END --></blockquote></article>`;
    }
  })}`;
});
const Ways = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { payoff } = $$props;
  let { title: title2 } = $$props;
  let { text } = $$props;
  let { imageOverlay } = $$props;
  let { lines } = $$props;
  if ($$props.payoff === void 0 && $$bindings.payoff && payoff !== void 0)
    $$bindings.payoff(payoff);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.imageOverlay === void 0 && $$bindings.imageOverlay && imageOverlay !== void 0)
    $$bindings.imageOverlay(imageOverlay);
  if ($$props.lines === void 0 && $$bindings.lines && lines !== void 0)
    $$bindings.lines(lines);
  return `



<section class="${"db w-100 bg-linen"}"><article class="${"highlight db black-70 f5 f4-ns f3-m f3-l lh-copy pb6 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto pv5"}"><ul class="${"mv0 items list pl0 w-100 flex flex-wrap justify-between flex-column flex-column-ns flex-row-m flex-row-l"}">
			
			
			
			
			<li class="${"w-100 w-100-ns w-30-m w5-l "}"><h4 class="${"mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"}">il tuo essere</small>
					
					<span class="${"fraunces"}">Linee</span>
					<span class="${"fraunces-i"}">di\xA0viaggio</span>
					</h4>
				<p class="${"mt0 fw4 measure lh-copy"}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				
				</li>

			
			${each(lines, ({ title: title3, cta, image }, i) => {
    return `${!title3 ? `<li class="${"w-100 w-100-ns w-30-m w5-l pb3"}"></li>` : `<li class="${"w-100 w-100-ns w-30-m w5-l pb3"}"><a${add_attribute("title", title3, 0)}${add_attribute("href", cta, 0)} class="${"link"}">

					<figure class="${"ma0 w-100 f6 mh0 ph3 ph3-ns ph1-m ph3-l pb4 cover shadow-5-hover transition overflow-hidden"}" style="${"background-position: 50% 0; background-image: linear-gradient( hsla(30,28.95%,14.9%, " + escape(imageOverlay === true ? `0.555` : `0`) + ") 0, hsla(30,28.95%,14.9%, " + escape(imageOverlay === true ? `0.555` : `0`) + ") 100%), url(" + escape(!image ? `https://viaggilevi.vercel.app/images/Tineye.Torres.del.Paine.National.Park.webp` : image) + ")"}"${add_attribute("title", title3, 0)}><img class="${"w-50 relative z-1"}" src="${"https://viaggilevi.vercel.app/images/levi-logo.svg"}" alt="${"Levi"}">

							<figurecap class="${"h5 white ts1-dark-gray flex flex-column lh-solid items-center"}"><h6 class="${"pv5 tc fraunces mv0 ttc f2 f2-ns f3-m f2-l fw4 items-center"}"><!-- HTML_TAG_START -->${`${title3.toLowerCase()}`}<!-- HTML_TAG_END --></h6></figurecap>
							<div class="${"pointer br-pill ba bw2 ph2 pv2 bg-black-10 white hover-bg-black-50 transition mr-auto ml-auto tc ts1-dark-gray f5 f5-ns f7-m f5-l"}">Scopri i viaggi</div>
					</figure></a>
				</li>`}`;
  })}</ul></article>
</section>`;
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
  return `<div class="${"bg-cocoa linen"}">NEWS = <br>
  Care Viaggiatrici<br>
  cari Viaggiatori.<br></div>

${validate_component(Row, "Row").$$render($$result, { bg: "bg-cocoa linen" }, {}, {
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
  let tripSpotlight = Object.values(homepage.inEvidence.travels);
  let tripSpotlightItems = tripSpotlight;
  let departingSoon = Object.values(homepage.departing.travels);
  let departingSoonItems = departingSoon;
  if ($$props.homepage === void 0 && $$bindings.homepage && homepage !== void 0)
    $$bindings.homepage(homepage);
  return `


${validate_component(Hero, "Hero").$$render($$result, {
    image: homepage.hero.image,
    payoff: homepage.hero.payoff,
    title: homepage.hero.title,
    location: homepage.hero.location,
    imageOverlay: true
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
        payoff: homepage.inEvidence.payoff,
        headline: homepage.inEvidence.title,
        serp: homepage.inEvidence.text,
        nurture: homepage.inEvidence.cta,
        items: tripSpotlightItems
      }, {}, {})}

  ${validate_component(DepartingSoon, "DepartingSoon").$$render($$result, {
        payoff: homepage.departing.payoff,
        headline: homepage.departing.title,
        serp: homepage.departing.text,
        nurture: homepage.departing.cta,
        items: departingSoonItems
      }, {}, {})}
  <hr>`;
    }
  })}





${validate_component(Discover, "Discover").$$render($$result, { imageOverlay: true }, {}, {})}




${validate_component(Ways, "Ways").$$render($$result, {
    payoff: homepage.travelLines.payoff,
    title: homepage.travelLines.title,
    text: homepage.travelLines.text,
    lines: homepage.travelLines.lines,
    imageOverlay: true
  }, {}, {})}

${validate_component(News, "News").$$render($$result, { news: homepage.blog }, {}, {})}

  



${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}`, ""}


`;
});
export { Routes as default, prerender };
