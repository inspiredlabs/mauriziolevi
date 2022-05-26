import { c as create_ssr_component, a as each, v as validate_component, e as escape } from "../../chunks/index-fa0ff56f.js";
import { S as Snapper } from "../../chunks/Snapper-fad386e8.js";
const prerender = true;
let title = "Maurizio Levi";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { continents } = $$props;
  let { spotLight } = $$props;
  let { upcomingDepartures } = $$props;
  let { posts } = $$props;
  if ($$props.continents === void 0 && $$bindings.continents && continents !== void 0)
    $$bindings.continents(continents);
  if ($$props.spotLight === void 0 && $$bindings.spotLight && spotLight !== void 0)
    $$bindings.spotLight(spotLight);
  if ($$props.upcomingDepartures === void 0 && $$bindings.upcomingDepartures && upcomingDepartures !== void 0)
    $$bindings.upcomingDepartures(upcomingDepartures);
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `
<pre class="${"dn"}">  <ul class="${"list pl0"}">
    ${each(continents, (area) => {
    return `<li>${escape(area.descrizione)}</li>`;
  })}
  </ul>
</pre>
${validate_component(Snapper, "Snapper").$$render($$result, {}, {}, {})}

<ul>${each(spotLight, (featuredDestination, i) => {
    return `<li>${escape(i)}:
      <!-- HTML_TAG_START -->${featuredDestination.titolo_viaggio.replace(/\\r/g, "").replace(/\\n/g, "")}<!-- HTML_TAG_END -->
      <pre>        <!-- HTML_TAG_START -->${featuredDestination.testo_per_sito.replace(/\\r/g, "").replace(/\\n/g, "")}<!-- HTML_TAG_END -->
      </pre>
    </li>`;
  })}</ul>

<ul>${each(upcomingDepartures, (departure, i) => {
    return `<li><!-- HTML_TAG_START -->${departure.titolo_viaggio.replace(/\\r/g, "").replace(/\\n/g, "")}<!-- HTML_TAG_END -->
      <pre>        <!-- HTML_TAG_START -->${departure.testo_per_sito.replace(/\\r/g, "").replace(/\\n/g, "")}<!-- HTML_TAG_END -->
      </pre>
    </li>`;
  })}</ul>


${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}`, ""}`;
});
export { Routes as default, prerender };
