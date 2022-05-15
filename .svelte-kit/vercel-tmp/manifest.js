export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","favicon.ico","images/.DS_Store","images/Tineye.Torres.del.Paine.National.Park.jpeg","images/Torres.del.Paine.National.Park.original.3288.jpg","images/bodgaya-island-tun-sakaran-marine-park-sulu-sea.jpeg","images/eu-largest-lake-skadar-national-park-montenegro-and-albania.jpeg","images/kaluahine-falls-waipio-valley-hawaii.jpeg","images/king-lewanika-lodge-liuwa-plain-national-park.jpeg","images/king-lewanika-lodge-liuwa-plain-national-park.webp","images/lake-urmia-south-caspian-sea-iran.jpeg","images/oceania_map_southeast_asia.jpeg","images/russia-largest-freshwater-lake-ladoga.jpeg","images/waipio-valley-akaka-falls.jpeg","images/waipio-valley-original.jpg","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".jpeg":"image/jpeg",".jpg":"image/jpeg",".webp":"image/webp",".txt":"text/plain",".png":"image/png"},
	_: {
		entry: {"file":"start-991ff8c1.js","js":["start-991ff8c1.js","chunks/index-32b7ec39.js"],"css":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/4.js')
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
