export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","data/destinations.json","favicon.ico","favicon.png","images/.DS_Store","images/Marshall-Islands-coral-reef.jpeg","images/Marshall-Islands-coral-reef.webp","images/Tineye.Torres.del.Paine.National.Park.jpeg","images/Torres.del.Paine.National.Park.original.3288.jpg","images/bodgaya-island-tun-sakaran-marine-park-sulu-sea.jpeg","images/eu-largest-lake-skadar-national-park-montenegro-and-albania.jpeg","images/kaluahine-falls-waipio-valley-hawaii.jpeg","images/king-lewanika-lodge-liuwa-plain-national-park.jpeg","images/king-lewanika-lodge-liuwa-plain-national-park.webp","images/lake-urmia-south-caspian-sea-iran.jpeg","images/oceania_map_southeast_asia.jpeg","images/russia-largest-freshwater-lake-ladoga.jpeg","images/waipio-valley-akaka-falls.jpeg","images/waipio-valley-original.jpg","levi.favicon.png","logo.favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".json":"application/json",".ico":"image/vnd.microsoft.icon",".png":"image/png",".jpeg":"image/jpeg",".webp":"image/webp",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		entry: {"file":"start-10944569.js","js":["start-10944569.js","chunks/index-d3d7ad42.js"],"css":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "sirv/[slug]",
				pattern: /^\/sirv\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
