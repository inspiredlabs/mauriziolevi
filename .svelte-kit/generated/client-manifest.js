export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/[id].svelte"),
	() => import("../../src/routes/blog/[id].svelte"),
	() => import("../../src/routes/cms.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/product/[slug].svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"cms": [[0, 4], [1]],
	"blog/[id]": [[0, 3], [1]],
	"product/[slug]": [[0, 6], [1]],
	"[id]": [[0, 2], [1]]
};