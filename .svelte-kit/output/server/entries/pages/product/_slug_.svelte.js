import { c as create_ssr_component, e as escape } from "../../../chunks/index-fa0ff56f.js";
import { GraphQLClient } from "graphql-request";
var _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-sc7jvj,p.svelte-sc7jvj{text-align:center;margin:0 auto}h1.svelte-sc7jvj{font-size:2.8em;text-transform:uppercase;font-weight:700;margin:0 0 0.5em 0}p.svelte-sc7jvj{margin:1em auto}@media(min-width: 480px){h1.svelte-sc7jvj{font-size:4em}}",
  map: null
};
async function load({ params }) {
  const graphcms = new GraphQLClient("https://api-eu-central-1.graphcms.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master");
  const { product } = await graphcms.request(`query ProductPageQuery($slug: String!) {
        product(where: { slug: $slug }) {
          name
          description
          price
        }
      }`, { slug: params.slug });
  return { props: { product } };
}
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(product.name)}</title>`, ""}`, ""}

<h1 class="${"svelte-sc7jvj"}">${escape(product.name)}</h1>
<p class="${"svelte-sc7jvj"}">${escape(product.description)}</p>
<p class="${"svelte-sc7jvj"}">$${escape(product.price / 100)}</p>`;
});
export { U5Bslugu5D as default, load };
