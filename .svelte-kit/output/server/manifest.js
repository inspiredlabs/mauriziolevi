export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","data/destinations.json","favicon.ico","images/.DS_Store","images/Tineye.Torres.del.Paine.National.Park.jpeg","images/Torres.del.Paine.National.Park.original.3288.jpg","images/bodgaya-island-tun-sakaran-marine-park-sulu-sea.jpeg","images/eu-largest-lake-skadar-national-park-montenegro-and-albania.jpeg","images/kaluahine-falls-waipio-valley-hawaii.jpeg","images/king-lewanika-lodge-liuwa-plain-national-park.jpeg","images/king-lewanika-lodge-liuwa-plain-national-park.webp","images/lake-urmia-south-caspian-sea-iran.jpeg","images/oceania_map_southeast_asia.jpeg","images/russia-largest-freshwater-lake-ladoga.jpeg","images/waipio-valley-akaka-falls.jpeg","images/waipio-valley-original.jpg","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".json":"application/json",".ico":"image/vnd.microsoft.icon",".jpeg":"image/jpeg",".jpg":"image/jpeg",".webp":"image/webp",".txt":"text/plain",".png":"image/png"},
	_: {
		entry: {"file":"start-945c7d1f.js","js":["start-945c7d1f.js","chunks/index-da12b2a7.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: () => import('./entries/endpoints/index.js'),
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "[id]",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => import('./entries/endpoints/_id_.js'),
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
