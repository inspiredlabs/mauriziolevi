export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","favicon.ico","images/Torres.del.Paine.National.Park.original.3288.jpg","images/waipio-valley-original.jpg","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".jpg":"image/jpeg",".txt":"text/plain",".png":"image/png",".webp":"image/webp"},
	_: {
		entry: {"file":"start-634b9c98.js","js":["start-634b9c98.js","chunks/index-32b7ec39.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "cms",
				pattern: /^\/cms\/?$/,
				names: [],
				types: [],
				path: "/cms",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "product/[slug]",
				pattern: /^\/product\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
