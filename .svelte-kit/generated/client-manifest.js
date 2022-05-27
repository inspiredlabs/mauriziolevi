export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/[slug].svelte"),
	() => import("../../src/routes/fragile/index.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/nations/index.svelte"),
	() => import("../../src/routes/sirv/[slug].svelte"),
	() => import("../../src/routes/sirv/index.svelte"),
	() => import("../../src/routes/snapper/index.svelte"),
	() => import("../../src/routes/terms/index.svelte"),
	() => import("../../src/routes/trip/[id].svelte")
];

export const dictionary = {
	"": [[0, 4], [1], 1],
	"fragile": [[0, 3], [1], 1],
	"nations": [[0, 5], [1], 1],
	"sirv": [[0, 7], [1]],
	"snapper": [[0, 8], [1]],
	"terms": [[0, 9], [1], 1],
	"sirv/[slug]": [[0, 6], [1]],
	"trip/[id]": [[0, 10], [1]],
	"[slug]": [[0, 2], [1]]
};