import { c as create_ssr_component, d as createEventDispatcher, a as each, e as escape, v as validate_component } from "../../chunks/index-67cca998.js";
import { S as Snapper } from "../../chunks/Snapper-88076d4d.js";
function paginate({ items, pageSize: pageSize2, currentPage }) {
  return items.slice((currentPage - 1) * pageSize2, (currentPage - 1) * pageSize2 + pageSize2);
}
const PREVIOUS_PAGE = "PREVIOUS_PAGE";
const NEXT_PAGE = "NEXT_PAGE";
const ELLIPSIS = "ELLIPSIS";
function generateNavigationOptions({ totalItems, pageSize: pageSize2, currentPage, limit = null, showStepOptions = false }) {
  const totalPages = Math.ceil(totalItems / pageSize2);
  const limitThreshold = getLimitThreshold({ limit });
  const limited = limit && totalPages > limitThreshold;
  let options = limited ? generateLimitedOptions({ totalPages, limit, currentPage }) : generateUnlimitedOptions({ totalPages });
  return showStepOptions ? addStepOptions({ options, currentPage, totalPages }) : options;
}
function generateUnlimitedOptions({ totalPages }) {
  return new Array(totalPages).fill(null).map((value, index) => ({
    type: "number",
    value: index + 1
  }));
}
function generateLimitedOptions({ totalPages, limit, currentPage }) {
  const boundarySize = limit * 2 + 2;
  const firstBoundary = 1 + boundarySize;
  const lastBoundary = totalPages - boundarySize;
  const totalShownPages = firstBoundary + 2;
  if (currentPage <= firstBoundary - limit) {
    return Array(totalShownPages).fill(null).map((value, index) => {
      if (index === totalShownPages - 1) {
        return {
          type: "number",
          value: totalPages
        };
      } else if (index === totalShownPages - 2) {
        return {
          type: "symbol",
          symbol: ELLIPSIS,
          value: firstBoundary + 1
        };
      }
      return {
        type: "number",
        value: index + 1
      };
    });
  } else if (currentPage >= lastBoundary + limit) {
    return Array(totalShownPages).fill(null).map((value, index) => {
      if (index === 0) {
        return {
          type: "number",
          value: 1
        };
      } else if (index === 1) {
        return {
          type: "symbol",
          symbol: ELLIPSIS,
          value: lastBoundary - 1
        };
      }
      return {
        type: "number",
        value: lastBoundary + index - 2
      };
    });
  } else if (currentPage >= firstBoundary - limit && currentPage <= lastBoundary + limit) {
    return Array(totalShownPages).fill(null).map((value, index) => {
      if (index === 0) {
        return {
          type: "number",
          value: 1
        };
      } else if (index === 1) {
        return {
          type: "symbol",
          symbol: ELLIPSIS,
          value: currentPage - limit + (index - 2)
        };
      } else if (index === totalShownPages - 1) {
        return {
          type: "number",
          value: totalPages
        };
      } else if (index === totalShownPages - 2) {
        return {
          type: "symbol",
          symbol: ELLIPSIS,
          value: currentPage + limit + 1
        };
      }
      return {
        type: "number",
        value: currentPage - limit + (index - 2)
      };
    });
  }
}
function addStepOptions({ options, currentPage, totalPages }) {
  return [
    {
      type: "symbol",
      symbol: PREVIOUS_PAGE,
      value: currentPage <= 1 ? 1 : currentPage - 1
    },
    ...options,
    {
      type: "symbol",
      symbol: NEXT_PAGE,
      value: currentPage >= totalPages ? totalPages : currentPage + 1
    }
  ];
}
function getLimitThreshold({ limit }) {
  const maximumUnlimitedPages = 3;
  const numberOfBoundaryPages = 2;
  return limit * 2 + maximumUnlimitedPages + numberOfBoundaryPages;
}
const PaginationNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let totalPages;
  createEventDispatcher();
  let { totalItems = 0 } = $$props;
  let { pageSize: pageSize2 = 1 } = $$props;
  let { currentPage = 1 } = $$props;
  let { limit = null } = $$props;
  let { showStepOptions = false } = $$props;
  if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0)
    $$bindings.totalItems(totalItems);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize2 !== void 0)
    $$bindings.pageSize(pageSize2);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.showStepOptions === void 0 && $$bindings.showStepOptions && showStepOptions !== void 0)
    $$bindings.showStepOptions(showStepOptions);
  options = generateNavigationOptions({
    totalItems,
    pageSize: pageSize2,
    currentPage,
    limit,
    showStepOptions
  });
  totalPages = Math.ceil(totalItems / pageSize2);
  return `<div class="${"pagination-nav"}">${each(options, (option) => {
    return `<span class="${[
      "option",
      (option.type === "number" ? "number" : "") + " " + (option.type === "symbol" && option.symbol === PREVIOUS_PAGE ? "prev" : "") + " " + (option.type === "symbol" && option.symbol === NEXT_PAGE ? "next" : "") + " " + (option.type === "symbol" && option.symbol === NEXT_PAGE && currentPage >= totalPages || option.type === "symbol" && option.symbol === PREVIOUS_PAGE && currentPage <= 1 ? "disabled" : "") + " " + (option.type === "symbol" && option.symbol === ELLIPSIS ? "ellipsis" : "") + " " + (option.type === "number" && option.value === currentPage ? "active" : "")
    ].join(" ").trim()}">${option.type === "number" ? `${slots.number ? slots.number({ value: option.value }) : `
          <span>${escape(option.value)}</span>
        `}` : `${option.type === "symbol" && option.symbol === ELLIPSIS ? `${slots.ellipsis ? slots.ellipsis({}) : `
          <span>...</span>
        `}` : `${option.type === "symbol" && option.symbol === PREVIOUS_PAGE ? `${slots.prev ? slots.prev({}) : `
          <svg style="${"width:24px;height:24px"}" viewBox="${"0 0 24 24"}"><path fill="${"#000000"}" d="${"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}"></path></svg>
        `}` : `${option.type === "symbol" && option.symbol === NEXT_PAGE ? `${slots.next ? slots.next({}) : `
          <svg style="${"width:24px;height:24px"}" viewBox="${"0 0 24 24"}"><path fill="${"#000000"}" d="${"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}"></path></svg>
        `}` : ``}`}`}`}
    </span>`;
  })}</div>`;
});
var LightPaginationNav_svelte_svelte_type_style_lang = "";
const css = {
  code: ".light-pagination-nav.svelte-s5ru8s .pagination-nav{display:flex;justify-content:center;background:#FFF;border-radius:3px;box-shadow:0 1px 2px rgba(0, 0, 0, 0.3)}.light-pagination-nav.svelte-s5ru8s .option{padding:10px;display:flex;align-items:center;justify-content:center;transition:0.2s all ease-out;user-select:none;color:hsl(200, 90%, 10%)}.light-pagination-nav.svelte-s5ru8s .option.number,.light-pagination-nav.svelte-s5ru8s .option.ellipsis{padding:10px 15px}.light-pagination-nav.svelte-s5ru8s .option:hover{background:rgba(0, 0, 0, 0.1);cursor:pointer}.light-pagination-nav.svelte-s5ru8s .option.active{color:hsl(200, 70%, 50%)}",
  map: null
};
const LightPaginationNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"light-pagination-nav svelte-s5ru8s"}">${validate_component(PaginationNav, "PaginationNav").$$render($$result, Object.assign($$props), {}, {})}
</div>`;
});
var DarkPaginationNav_svelte_svelte_type_style_lang = "";
const prerender = true;
let title = "Maurizio Levi";
let pageSize = 3;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paginatedItems;
  let { spotLight } = $$props;
  let items = Object.values(spotLight);
  console.log(items);
  let currentPage = 1;
  if ($$props.spotLight === void 0 && $$bindings.spotLight && spotLight !== void 0)
    $$bindings.spotLight(spotLight);
  paginatedItems = paginate({ items, pageSize, currentPage });
  return `${validate_component(Snapper, "Snapper").$$render($$result, {}, {}, {})}

<ul class="${"items"}">${each(paginatedItems, (item, i) => {
    return `<li class="${"item"}">${escape(item.titolo_viaggio)}
      ${escape(item.titolo_viaggio)}
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
