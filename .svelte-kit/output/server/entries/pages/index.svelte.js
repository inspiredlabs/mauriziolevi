import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "../../chunks/index-ed6b8b8e.js";
import { S as Snapper } from "../../chunks/Snapper-b89ca5d7.js";
import { p as paginate, L as LightPaginationNav } from "../../chunks/DarkPaginationNav.svelte_svelte_type_style_lang-23b98763.js";
const prerender = true;
let title = "Maurizio Levi";
let pageSize = 3;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paginatedItems;
  let { homepage } = $$props;
  let { spotLight } = $$props;
  Object.values(homepage.travels_in_evidence.travels);
  let departingSoon = Object.values(homepage.departing_travels.travels);
  let items = departingSoon;
  let currentPage = 1;
  if ($$props.homepage === void 0 && $$bindings.homepage && homepage !== void 0)
    $$bindings.homepage(homepage);
  if ($$props.spotLight === void 0 && $$bindings.spotLight && spotLight !== void 0)
    $$bindings.spotLight(spotLight);
  paginatedItems = paginate({ items, pageSize, currentPage });
  return `${validate_component(Snapper, "Snapper").$$render($$result, {}, {}, {})}

<ul class="${"items bg-gold ma0"}">${each(paginatedItems, ({ cta, excerpt, image, length, starting_price, title: title2 }, i) => {
    return `<li class="${"item"}"><code>${escape(length)}<br></code>
      <code>${escape(title2)}<br></code>
      <code>${escape(excerpt)}<br></code>
      <code>${escape(cta)}<br></code>
      <code>${escape(image)}<br></code>
      <code>${escape(starting_price)}<br></code>
    </li>`;
  })}</ul>

${validate_component(LightPaginationNav, "LightPaginationNav").$$render($$result, {
    totalItems: items.length,
    pageSize,
    currentPage,
    limit: 1,
    showStepOptions: true
  }, {}, {})}



<div class="${"measure-wide"}"><ul>${each(spotLight, (featuredDestination, i) => {
    return `<li>${escape(i)}:
        <!-- HTML_TAG_START -->${featuredDestination.titolo_viaggio.replace(/\\r/g, "").replace(/\\n/g, "").replace(/\\"/g, "")}<!-- HTML_TAG_END -->
        <p><!-- HTML_TAG_START -->${featuredDestination.testo_per_sito.replace(/\\r/g, "").replace(/\\n/g, "").replace(/\\"/g, "")}<!-- HTML_TAG_END --></p>
      </li>`;
  })}</ul>

  </div>

${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}`, ""}


`;
});
export { Routes as default, prerender };
