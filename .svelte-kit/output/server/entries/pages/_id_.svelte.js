import { c as create_ssr_component, e as escape } from "../../chunks/index-1259f1f6.js";
const prerender = true;
async function load(url) {
  let id = url.params.id;
  return { props: { id } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<pre>${escape(JSON.stringify(id, null, 2))}</pre>`;
});
export { U5Bidu5D as default, load, prerender };
