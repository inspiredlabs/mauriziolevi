export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/cms.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/product/[slug].svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"cms": [[0, 2], [1]],
	"product/[slug]": [[0, 4], [1]]
};