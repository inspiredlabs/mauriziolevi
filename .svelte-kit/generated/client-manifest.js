export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/[slug].svelte"),
	() => import("../../src/routes/destinations/[id].svelte"),
	() => import("../../src/routes/form/index.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/nations/[id].svelte"),
	() => import("../../src/routes/sirv/[slug].svelte"),
	() => import("../../src/routes/sirv/index.svelte"),
	() => import("../../src/routes/table/grid.svelte"),
	() => import("../../src/routes/table/index.svelte"),
	() => import("../../src/routes/terms/index.svelte"),
	() => import("../../src/routes/trip/[id].svelte")
];

export const dictionary = {
	"": [[0, 5], [1], 1],
	"form": [[0, 4], [1]],
	"sirv": [[0, 8], [1]],
	"table": [[0, 10], [1]],
	"terms": [[0, 11], [1], 1],
	"table/grid": [[0, 9], [1]],
	"destinations/[id]": [[0, 3], [1]],
	"nations/[id]": [[0, 6], [1]],
	"sirv/[slug]": [[0, 7], [1]],
	"trip/[id]": [[0, 12], [1]],
	"[slug]": [[0, 2], [1]]
};