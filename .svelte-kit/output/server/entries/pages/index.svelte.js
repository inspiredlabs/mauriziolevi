import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, a as each } from "../../chunks/index-fa0ff56f.js";
var Anchor_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--tint:0.5}.ttt.svelte-1744017:first-letter{text-transform:capitalize }.snap-start.svelte-1744017{scroll-snap-align:start /* .snap-center `scroll-snap-align: center` */\n}.always-stop.svelte-1744017{scroll-snap-stop:always}",
  map: null
};
const Anchor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { title: title2 } = $$props;
  let { src } = $$props;
  let { slug } = $$props;
  let { bg } = $$props;
  let { headingEn } = $$props;
  let { headingIt } = $$props;
  let { figCaption } = $$props;
  let { component } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.headingEn === void 0 && $$bindings.headingEn && headingEn !== void 0)
    $$bindings.headingEn(headingEn);
  if ($$props.headingIt === void 0 && $$bindings.headingIt && headingIt !== void 0)
    $$bindings.headingIt(headingIt);
  if ($$props.figCaption === void 0 && $$bindings.figCaption && figCaption !== void 0)
    $$bindings.figCaption(figCaption);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  $$result.css.add(css$1);
  return `<figure${add_attribute("id", id, 0)} class="${"flex-column flex flex-none white cover debug"}" style="${"min-width: 100%; background-position: 40% 0; background-image: linear-gradient( rgba(0, 0, 0, var(--tint)) 30%, rgba(0, 0, 0, var(--tint)) 100%), url(" + escape(JSON.stringify(src)) + ")"}"><div class="${"w-100 snap-start always-stop svelte-1744017"}">
		<svg style="${"transform: scale(150%)"}" class="${"vh-50 vh-50-ns vh-50-m vh-50-l w-100 pa0 ma0 s--accent sw2 transparent"}"><use xlink:href="${"#" + escape(id)}"></use></svg>
	<div class="${"flex items-center w-100 f5 f4-ns f3-m f3-l measure pa2 measure-ns pa4-ns measure-m pa2-m measure-wide-l pa0-l mr-auto ml-auto"}"><div class="${"flex flex-column w-100 pv0 mv0"}"><span class="${"golden-brown tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f6-l fw5 ttu tc mv0"}"${add_attribute("data-en", headingEn, 0)}>${escape(headingIt)}</span>
			
			<h2 class="${"w-100 mv0 ph3 f2 f2-ns f1-m f1-l tc lh-solid fraunces"}">${escape(title2)}</h2>
			<a${add_attribute("href", slug, 0)} class="${"transition link pointer br-pill b--white ba bw1 ph3 pv2 bg-black-10 white hover-bg-black-50 transition-bg mr-auto ml-auto db tc w-75 w-50-ns w-third-m w-third-l ts1-dark-gray f5 f5-ns f7-m f5-l bg-transparent ttt mv3 svelte-1744017"}" en="${"Discover The Americas"}" lang="${"it"}">scopri le destinazioni</a></div></div>



	</div>
	<figcaption class="${"flex items-center w-100 f5 f4-ns f3-m f3-l lh-copy measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto vh-05 landscape-vh-15-l"}"><div class="${"flex flex-column w-100 pb0 pb0-l"}"><span class="${"tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw5 mv0"}">${escape(figCaption)}</span></div></figcaption>
</figure>`;
});
const Africa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `Africa!`;
});
var items = [
  {
    id: "africa",
    title: "Africa",
    bg: "bg-gray",
    src: "./images/bg-africa.jpg",
    headingEn: "I want to travel",
    headingIt: "voglio viaggiare",
    figCaption: "Some location",
    slug: "/",
    component: Africa
  },
  {
    id: "asia-oceania",
    title: "Asia Oceania",
    bg: "bg-light-red",
    src: "./images/bg-asia-oceania.jpg",
    headingEn: "I want to travel",
    headingIt: "voglio viaggiare",
    figCaption: "Asia goes here.",
    slug: "/",
    component: Africa
  },
  {
    id: "europa",
    title: "Europa",
    bg: "bg-light-yellow",
    src: "./images/bg-europa.jpg",
    headingEn: "I want to travel",
    headingIt: "voglio viaggiare",
    figCaption: "Europa notes...",
    slug: "/",
    component: Africa
  },
  {
    id: "americhe",
    title: "Americhe",
    bg: "bg-light-blue",
    src: "./images/Torres.del.Paine.National.Park.original.3288.jpg",
    headingEn: "I want to travel",
    headingIt: "voglio viaggiare",
    figCaption: "Lago Grey - Torres del Paine National Park - Cile",
    slug: "/",
    component: Africa
  },
  {
    id: "medio-oriente",
    title: "Medio Oriente",
    bg: "bg-light-pink",
    src: "./images/bg-europa.jpg",
    headingEn: "I want to travel",
    headingIt: "voglio viaggiare",
    figCaption: "Orient notes...",
    slug: "/",
    component: Africa
  },
  {
    id: "grande-nord",
    title: "Grande Nord",
    bg: "bg-red",
    src: "./images/bg-ru.jpg",
    headingEn: "I want to travel",
    headingIt: "voglio viaggiare",
    figCaption: "FN, SE, DM, Ru notes...",
    slug: "/",
    component: Africa
  }
];
const Defs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" class="${"dn"}"><symbol id="${"africa"}" fill="${"currentColor"}" viewBox="${"0 0 1440 1440"}"><path d="${"M670.4,919c12-63.3,31.8-87.5-22.4-145.9c-14.9-28,30.5-60.6-31.6-64.9c-34.9-53.7-121.9,64.3-185.2-56.3\n			c-41.4-33.7-12.7-79.4-22.4-127.3c16.4-48.3,58.8-71.8,75.4-122.1c15.9-29.5,104.4-47.1,164.3-48.7c28.6,2.5,6.6,32.8,23.1,48.3\n			c28.5-4,59,55.9,79.8,6.4c58.3-3.5,45.3,24.1,122.6,15.5c26.9,5.6,13.2,30.4,6,51.8c21.2,59.4,49.3,120.9,97,163.6\n			c16.6,3.3,64.3-26.4,58.4,8.3c-27.4,101.1-103,87.2-106.2,170.6c35.8,118.9-13.8,80.1-38.4,133.9c9.8,65.2-79.9,202.1-158.9,149.9\n			C712.9,1039,668,1009.7,670.4,919z M1022.2,871.1c-3.9-16.3-63.3,28.5-63.7,87.2C958.7,1094.2,1047,923.3,1022.2,871.1z"}"></path></symbol><symbol id="${"americhe"}" fill="${"currentColor"}" viewBox="${"0 0 1440 1440"}"><path d="${"M430.3,409.6c32.1,117-92.7-97.7,26.5-36.6c35.9-2.4,19.6-14.2,43.8,14.3c24-0.3,32.4,29.1,43.3,45.9\n			c-13.8,70.8,23.2,49.6,63.3,25.1c32.5,2.8-17.6,40.6,6.1,48.3c64.5-3-28.3,66.3,80.3,53.6c26.2-34,73.7-10.4,110.7-6.1\n			c24.8,18.3,45.5,35.9,76.8,43.6c56,48.6,1.9,51.1,26.4,61.1c28.2-22.5,88.2,17.3,109.4,25.7c48.7,17.4-6.4,53.3-17.6,79\n			c1.5,21,2.3,42.8-8.3,63.8c-110.5,72.5-3.5,7.6-89.8,113.6c-4.4,5.2-17.7,4-15,11.8c14.1,45.6-66.8,7-41,108.6\n			c-5.7,69.1-46.3,23.3-70.2-9.6c13.7-37.5-12.7-41.4-17.6-66.8c-16.9-134.1,5.5-169.3-27.8-186.1c-34.2-16-42.1-46.8-63.9-75.6\n			c-35.6-50.9-10.1-32.9-16.2-63.1c-10.9-26.1,54.4-46.7,18.9-80.8c-31.4,18.1-50-16.2-67.1-37.2c-38.9-6.4-29.8-18.9-57.4-29.9\n			c-38.4,7.5-90-16.4-77.7-60.1C452.7,440.8,443.3,420,430.3,409.6z"}"></path></symbol><symbol id="${"medio-oriente"}" fill="${"currentColor"}" viewBox="${"0 0 1440 1440"}"><path d="${"M668,799.1c0.3-10.3,0.5-21.6-14.1-27.2c-155.1-96.4-127.4,63.2-206.1-15.1\n			c-33-23.1-66-50.9-100.6-64.6c12.5-12.8,8-31.5,19.4-45.8c26.3-15.4,20.4-28.5,33.5-25.1c60.7,6.6,29-22,130.5-19.5\n			c23.1,9.8-9.2,29.9,10.7,39.6c45.1,14.1,71.1,42.2,85.8,30.6c16.1-51.7,59.6,13.5,95.5-5.9c50.1,8.9,52-24.5,53.1-63\n			c-9.7-12.6-79,16.1-81.3-23.9c-10.8-19.9,34.1-22.8,57.3-34.7c27.4,3.9,50.3,18.1,80.4,10.5c26.6,17.9,18.6,28.6,49,23.8\n			c9,15.1,20.9,27.2,40.1,28.8c92.3-49.7,68.5,52.8,118.2-3.1c18.2-10.2,32.6,0.9,52.9-9.1c13.2,40-51.7,89.4-88,82.5\n			c-15.1,12.9,30.1,18.8-2.7,41.1c-21.9,6.6-27.1-7.1-41.8-16c-52,15-45.9-51.5-76.8-27.2c-8.9,14.8,7.9,26,18,45.1\n			c32.2,57.4,38-23.4,82.8,35.1c-19.3,41.6-63.6,57-103.9,75.7c-63.9,26.2-17.1-15.7-68.4-61.1c-9.8-23.2-18-42-35.3-64\n			c-50.6-51.8-12.5,42,3.1,60.1c12.9,43,0.4,29.8-4.5,56.4c-17.4,66.4-23.1,19.6-35.1,29.4C729.2,874.4,698.3,874,677,866\n			c-17.5,6-18.2-4.1-24-19.4C646.6,824.6,672.2,824.5,668,799.1z"}"></path></symbol><symbol id="${"grande-nord"}" fill="${"currentColor"}" viewBox="${"0 0 1440 1440"}"><path d="${"M723.3,404.4c-148.1-0.9-273.5,94.3-310.4,171.6c3.3,23.9,15.3,12.7-3.4,40.7\n			c-55.9,52.7,17.8,58.3-17.4,66.6c-40.1-75-37.2,0-19.3,39.8c-8.1,40,0.5,21.8,15.7,59.3c5.6,32.4,8.9,11.6,33.5,25.6\n			c4.6,9.1-28.3,27,16.4,42c8.3,7.8,48.7-64.5,49.2-74c-6.7-32.4,26.9-69.5,66.6-77.6c19.9,21,36.3,10,28.8-8.7\n			c-10-5.9-26.6-2.1-27.1-20.1c13.6-31.7,11.7,9,62.6-23.3c21.9-0.3-7.3,26,40.5,26.9c15,42.3,62.3,40,16.4-5.7\n			c-1.8-14.7,33.1-17.6,39.5-34.5c27.9-11.9,13.2-23.7,41.5-0.6c40-10.6,27.2-74.4,91.5-0.1c58.9-48-7.5,72.2,69.4,105.4\n			c29.8,10.2,66,13.7,92.6,38.2c93.1,8.6,22-35.9,47.5-42c60.3-29.9-6.2-42.6-38.3-43.1c-7,8.1-39.9,24.3-35.5,4.2\n			c12.3-3.8,25.8-13.6,28.3-29c15.8,8.5,36.6,19.9,56.4,9.8c12.6-7.7,6.8-18.1,1.3-33.7C1015.4,498.7,874.9,404.7,723.3,404.4z\n			M905.3,906.4c2.3-36.6-94.2-65-119.2-86.6c-9.9,10.7-28,5.1-36.1,19c-5,28-25.7,59.6-13.2,88.9c9.4,14.4,23.2,7.9,42.5,10.5\n			c20.2,18.9,26.4,24.5,52.7,38.9c2.1,42,85.2,79.2,101.8,42.8C921.4,984.5,901.8,993.6,905.3,906.4z M774,672.8\n			c19.5,3.4,82.2-39.1,37.2-50.7C799.4,651.5,693.9,668.4,774,672.8z M947.2,910c59.3,1.4,3-107.6-16.3-13.3\n			C928.5,906.3,935,911.3,947.2,910z M750.1,703.9c-33.8,9.7,25.1,37.1,19.5,16.8C766.4,710.9,762.7,704,750.1,703.9z"}"></path></symbol><symbol id="${"europa"}" fill="${"currentColor"}" viewBox="${"0 0 1440 1440"}"><path d="${"M685.2,690c29.5,1.7,21.1-14.2,13.4-30.7c-5.2-9.2-2.3-24.2-12.6-27.1c-55.1,44.9-42,1.7-48.6-39.9\n			c0.4-13.4,9.3-20.2,20.2-28.8c56.2-43.7,29.8-48.4,65-98.6c-3.2-22.7,26-35.9,40.4-50.3c29.3-26.1,54.5-16.4,42.9,25.7\n			c7.1,13.9,15.2,9.6,13.2,27.8c3.7,9.9,12.6,15.1,12.4,28c14.8,34.7,30.7,35.2,26.5,46c-27.4,101.7-119.9,62.8-64.6-24.9\n			c6.5-8.8-0.3-21.5-13-15.8c-6.9,2.8-11,8.8-9.7,17.7c0.7,37.4-53.5,52.6-8.4,90.8c6,11-18.5,28.9-15.5,44.7\n			c1.4,40.8-11.9,18.4-23.1,42.7c-12.4,7.4-5.3-5-23.8,6.7c-37.5-8.5-13.8,28.3,10.8,11.5c8.7-4.3,9.7,10.9,19.7,7\n			c59.6-37.3,32.4,2.4,58.9-21.5c17.4-8.3-16.2-71.1,24.6-49.1c2.9,0.6,4.4,1.5,5.8-3.3c4.2-12.3-13.6-17.8-13-28.4\n			c2.2-12.9,29.9-19.5,38.4-13.7c19,76.4,27.8,46.3,48.6,57.4c22.3,44.2,36.1,12.4,24.2,48.6c6.1,14.6,18.1-7.8,29.3,0.8\n			c29,41.9,80.3-0.9,84,28.4c15,25.7-22.6,49.1-33.6,68.7c-13.4,20.7,29.7,3.1,11.5,20.8c-21.9,16.7-18.7,26.9-39,1.3\n			c4.9-10-8.3-7.5-21.2-11.5c-9.2,2.7-9.2,12.4-14.1,21c-3.3,19.6-11.2,37.8-13.6,61.2c4.6,30.6,46.6,10.8,2,35.2\n			c-8.7,8.9-24,1.6-36.3,6c-26.5,16.5-34.6,24.9-3.5,41.1c9.1,11.8-6,15-9.4,24c0.2,34.2-26.7,9.4-31.3-10.7\n			c-61.3-62.1-7.3-45.7-52.7-72.1c-64.8-29-31.2-34.7-53.5-39.1c-2.9,1.2-6.1,1.5-7.6-1.4c-10.3-24.8-24.5,15.1-7.3,22.1\n			c12.5,6.7,13.3,21.2,23.3,29.4c16.9,4.4,25.9,14.8,43.4,22.4c41.7,28.9-32.7-5.7-5.1,27.3c3,24-28.6,23.9-24.4,45.9\n			c-2.3,15.4-71.4-22.1-22.7-20.5c33.2,2.4,43-20.9,16.2-38.5c-106.1-58.5-48.7-96-118.5-52.3c-5.8,2.1-8.9,0.7-15.9-2.8\n			c-44.6-14.8-14.7,19.6-36.4,27.7c-17,5.7-29.8,11.8-41.5,28c-7,6.5,3,16.5-5,23.4c-34.4,34.6-34.3,24.5-62.5,23.4\n			c-22,1.5-27.1,14.8-34.6-11.9c-15.3-19-36,8.7-28.9-33c-11.4-27.7,27.5-44.5,18-82c-0.2-3.3,0.9-5.3,5.2-7.5\n			c14.8-15.1,90.2,30,97.2,13c16.3-32.6,9-65.1-21.8-80.7c-13.1-29.4,28.3-5.8,32.4-11.2c5.6-19.3,2.5-13.9,18.8-8.7\n			c38.5-14.6,12.6-22.8,44.3-29.6c6.4-3.2,10.1-7.6,14.3-14.1c14.4-35.6,44.1-14.6,51.6-32.8c1.5-13.5-8.3-25.6-5.9-39.5\n			C685.4,636.6,693.8,678.6,685.2,690z M529.5,641.2c-14.6,29.1,5.7,26.8-2.8,46.3c2.7,9.7,22.7,20.1,11.1,32.8\n			c-4.3,2.7-12.1,0.2-13.5,6.6c-0.6,4.8,2,8.7-3.1,12.3c-25.4,16.3,22.4,5.2-13.6,32c1,12.5,22.7,0.1,35.4,3c12.8-1,41.6,10.5,39-11.5\n			c12.4-20,12-18.2-4.4-29.9c-2.9-19.4-12.7-33.8-19-53.6c-10.3-11.6,12-19.9,5.4-31.5c-2.7-3.7-15.1-2.9-11.4-9.2\n			C564.9,617.8,529.4,627.6,529.5,641.2z M441.3,453.5c-23.6,50.8,22.7,62.9,59.2,40.4c13.7-31-19.5-37.1-39.5-35.8\n			c-7.6,2-3-14.4-12.7-14.3C442.9,443.6,438.7,447.5,441.3,453.5z M467.6,707.5c1.6,3.8,1.7,8.3-1.7,11.6\n			c-29.1,26.1,20.6,25,35.9,13.7c7.3-5.5,4.6-15.3,8.4-23.8c11.6-12.5,14.6-27.6-7.5-27.7c-12.6-3.3-11.3,2-19.3,9\n			C473.4,690.2,464.3,696.4,467.6,707.5L467.6,707.5z M657.7,984.2c-3.5,24.1,22.2,16.6,20.2-4.1c3.3-10.2-4.4-16.6-3.8-27.7\n			c0.2-7.7,6.3-22.7-6.8-20.4c-9.9,5.8-2.7,17.9-5.3,28.5C655.5,967.5,657.3,974.6,657.7,984.2L657.7,984.2z"}"></path></symbol><symbol id="${"asia-oceania"}" fill="${"currentColor"}" viewBox="${"0 0 1440 1440"}"><path d="${"M366.5,451.2c24-32.7,41.9-10.7,73.8-14c4.7-1.4,3.7-1.5,5.2-8.4c1.7-22.1,32.2-18.5,48.5-24.9\n			c22.9,3.8,14.6,12.8,41.6,9.5c31.7,29.7,28.5,20.9,58.4,34.2c66-22.2,34.7,13.6,69.2-17c21.3,3.8,40.2,16.1,64.5,18.5\n			c26.5-9.2,39.6,0,45.9-7.7c15-42.8,41-19.3,56.8,5.9c18.1,18.1,28.1,7.7,32.2,15.5c3.2,20.9-31.3,47.3-32.5,58.8\n			c15.4,31.3-8.6,38-15.5,26c1.7-32.8-43.1-33.6-35.3-20.8c2.3,4.1,12.4,3.6,9.4,11.3c-6.1,8-6.2,14.1,0.6,23.3\n			c12.8,23.3-8.2,51.4-29,62.3c-50.3,15.9-22.2,12.4-35,24.6c-13.3,6.2,1.4-30.5-19.3-6.4c4.6,21.3,36.4,39.1,3,57.9\n			c-26.7,11.6-20.3-30.5-46.9-7.7c-12.1-19.1,0.7-24.2-25.9-30.5c-3.7-11.8-6.4-24-18.7-31.2c-29.3-0.4-80.3,52.2-50.4,77.5\n			c1.4,10.7-12.1,11.4-15.4-1.5c-28.9,3.2-33.2-48.4-40.6-68.1c-14.6-4.9-13.6-8.8-23.1-18.3c-14.6-16.9-37.4-4-56.7-12.6\n			c-32.7-7.9-78.3-34.1-57.9-74.5c6.9-15,35.3,15.2,32.4-10.4c2.7-29.7-25.9-20.8-11-49.3C383,474.8,366.2,466.2,366.5,451.2z\n			M918.9,981.6c33.8,7.1,50.4-47.3,52.7-67.6c-0.1-22.5-19.8-37.2-35.1-53.3c-47.7-85.2-29.1-25-44.2-14.9\n			c-33-7.1-8.7-24.3-24.4-28.1c-37.1-6.2-25.9,5.5-40.5,12.8c-24.3-7.1-30.2,20.9-48.3,31.4c-47.7,12.2-42.9,27.1-29.3,66.6\n			c4.4,20.9-1.2,36.4,25.1,27.9c22.6-2.5,44.5-19.3,69.7-17.4C874.2,949.1,896,988.6,918.9,981.6z M742.6,802.4\n			c44-14.6-34.6-12.9-38.1-22.1c1.5-13.7-10-19-14.3-31.4c3.6-25.5-13.1-31.3-21.6-47.6c-25.7-19.8,7.4,28.3-4.7,26\n			c-6.3-1.1-10.9-9-18.9-4.3C654.6,760.9,699.7,803.4,742.6,802.4z M843.4,762.2c6,13.6,21.5,15.6,33.9,23.6\n			c14.5,29.8,24.3,17.1,47.5,16.3c62.5,41.4-10.4-57.1-52.5-41.2C866.8,770.7,843.3,738,843.4,762.2z M732.7,772.6\n			c41.5,18.8,44.9-49.4,36.5-56.7c-11.9-7.5-28.5,16.7-38.1,19.9C705.3,743.9,717.8,766.7,732.7,772.6z M1065.6,1030.1\n			c10.1-8.7,15.6-27,26.8-34.6c34.1-12.9-4.1-40.8-8.9-33c-2.8,6.4,6.1,28.8-6.4,28.8C1009.6,1039.2,1059.6,1040.2,1065.6,1030.1z\n			M839.3,571.2c33.6-21.4,25-7.9,55.8-23.2c7-6.5,17-48.2-1.8-37C884.7,545.5,817,547.6,839.3,571.2z M789.6,778.1\n			c3.8-0.1,7.7-2.9,6.7-8.3C795.1,727.3,747.5,779.5,789.6,778.1z M919.6,489.3c-11.2-15.2-27.4-4.8-24.5,11.3\n			C902.5,508.1,925.6,503.3,919.6,489.3z M913,426.5c-18.7-21.9-15.2,59,4.3,21.4C918,441,914.7,434.7,913,426.5z M812.3,699.9\n			c-12,0.7-5.4-5.1-15.5-12.8c-11.1,1.3,3.3,18.8,4.8,28.3C810.2,727.9,827,704.7,812.3,699.9z M780.5,672.9\n			c8.8,12.2,19-13.6,13.9-22.7C782.7,636.8,773.1,662.4,780.5,672.9z M920.7,993.9c-5.8,3.2-1.7,18,7.5,19.2\n			C950.6,1011.8,941.7,981.4,920.7,993.9z M785.1,611.6c-5.6-0.4-8.8,11.6-0.8,12.9C789.5,624.8,794.2,612.9,785.1,611.6z"}"></path></symbol><symbol id="${"background"}" fill="${"currentColor"}" viewBox="${"0 0 1440 1440"}"><rect y="${"0"}" fill="${"transparent"}" width="${"1440"}" height="${"1440"}"></rect></symbol></svg>`;
});
var Snapper_svelte_svelte_type_style_lang = "";
const css = {
  code: "a{text-decoration:none!important\n		}.touch-scroll.svelte-1p27gg2{-webkit-overflow-scrolling:touch}.x-mandatory.svelte-1p27gg2{scroll-snap-type:x mandatory}:root{--time:0.6s\n	}@media all and (orientation:portrait){@media screen and (min-width:30em){}@media screen and (min-width:30em) and (max-width:60em){}@media screen and (min-width:60em){}}@media all and (orientation:landscape){@media screen and (min-width:30em){}@media screen and (min-width:30em) and (max-width:60em){}@media screen and (min-width:60em){}}html, body{padding:0 }aside.svelte-1p27gg2::-webkit-scrollbar{display:none}aside.svelte-1p27gg2{-ms-overflow-style:none;scrollbar-width:none}",
  map: null
};
const Snapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Defs, "Defs").$$render($$result, {}, {}, {})}
	<aside class="${"ma0 vh-100 vh-100-ns vh-75-m vh-75-l flex items-center x-mandatory overflow-x-auto touch-scroll w-100 ma0 pa0 backface-hidden charcoal system svelte-1p27gg2"}">${each(items, ({ id, title: title2, slug, src, headingEn, headingIt, figCaption, bg, component }) => {
    return `${validate_component(Anchor, "Anchor").$$render($$result, {
      id,
      title: title2,
      src,
      slug,
      component,
      headingEn,
      headingIt,
      figCaption,
      bg
    }, {}, {})}
		`;
  })}
	</aside>`;
});
const prerender = true;
let title = "Maurizio Levi";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}`, ""}

${validate_component(Snapper, "Snapper").$$render($$result, {}, {}, {})}`;
});
export { Routes as default, prerender };
