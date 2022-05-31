import { c as create_ssr_component, v as validate_component, d as each, e as escape } from "../../chunks/index-bf33b1d7.js";
import { S as Snapper } from "../../chunks/Snapper-5dce0340.js";
import { p as paginate, L as LightPaginationNav, Z as Zed } from "../../chunks/Zed-009c6153.js";
import { R as Row } from "../../chunks/Row-fac6ed9f.js";
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

${validate_component(Row, "Row").$$render($$result, { bg: "bg-linen" }, {}, {
    default: () => {
      return `
  <ul class="${"items list pl0 w-100 flex justify-between flex-column flex-column-ns flex-row-m flex-row-l"}">${each(paginatedItems, ({ cta, excerpt, image, length, starting_price, title: title2 }, i) => {
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
        totalItems: items.length,
        pageSize,
        currentPage,
        limit: 1,
        showStepOptions: true
      }, {}, {})}`;
    }
  })}


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
