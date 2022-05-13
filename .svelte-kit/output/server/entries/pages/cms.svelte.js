import { c as create_ssr_component, a as each, e as escape } from "../../chunks/index-fa0ff56f.js";
import { GraphQLClient } from "graphql-request";
var cms_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1s27p8v,p.svelte-1s27p8v{text-align:center;margin:0 auto}h1.svelte-1s27p8v{font-size:2.8em;text-transform:uppercase;font-weight:700;margin:0 0 0.5em 0}p.svelte-1s27p8v{margin:1em auto}@media(min-width: 480px){h1.svelte-1s27p8v{font-size:4em}}",
  map: null
};
async function load() {
  const graphcms = new GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master", { headers: {} });
  const { products } = await graphcms.request(`{ 
        products {
          slug
          name
        }
      }`);
  return { props: { products } };
}
const Cms = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { products } = $$props;
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>SvelteKit project template</title>`, ""}`, ""}

<h1 class="${"svelte-1s27p8v"}">GraphCMS with SvelteKit!</h1>

${each(products, (product) => {
    return `<p class="${"svelte-1s27p8v"}"><a href="${"/product/" + escape(product.slug)}">${escape(product.name)}</a>
	</p>`;
  })}`;
});
export { Cms as default, load };
