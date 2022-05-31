export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","data/destinations.json","data/my_destinations_3.json","data/my_homepage.json","data/my_nations.json","favicon.ico","favicon.png","fonts/Fraunces--latin_basic.woff2","fonts/Fraunces-Italic--latin_basic.woff2","images/.DS_Store","images/Levi-Maurizio-768x510.jpg","images/Levi-Maurizio-768x510.webp","images/Marshall-Islands-coral-reef.jpeg","images/Marshall-Islands-coral-reef.webp","images/MaurizioLevi_Anteprima.jpg","images/MaurizioLevi_Anteprima.webp","images/Maurizio_Levi.jpg","images/Maurizio_Levi.webp","images/Tineye.Torres.del.Paine.National.Park.jpeg","images/Tineye.Torres.del.Paine.National.Park.webp","images/Torres.del.Paine.National.Park.original.3288.jpg","images/adobestock-255750571.webp","images/alba10.webp","images/asc.png","images/bodgaya-island-tun-sakaran-marine-park-sulu-sea.jpeg","images/bodgaya-island-tun-sakaran-marine-park-sulu-sea.webp","images/boingboing-moon.jpeg","images/eu-largest-lake-skadar-national-park-montenegro-and-albania.jpeg","images/eu-largest-lake-skadar-national-park-montenegro-and-albania.webp","images/fai.png","images/fto.png","images/kaluahine-falls-waipio-valley-hawaii.jpeg","images/king-lewanika-lodge-liuwa-plain-national-park.jpeg","images/king-lewanika-lodge-liuwa-plain-national-park.webp","images/lagune-altiplaniche-1.jpeg","images/lake-urmia-south-caspian-sea-iran.jpeg","images/lake-urmia-south-caspian-sea-iran.webp","images/levi_logo.png","images/logo.png","images/oceania_map_southeast_asia.jpeg","images/russia-largest-freshwater-lake-ladoga.jpeg","images/russia-largest-freshwater-lake-ladoga.webp","images/tri.png","images/unesco.png","images/ungheria-repubblica-slovacca-adobestock-177932056.jpeg","images/usa-banner-01.webp","images/waipio-valley-akaka-falls.jpeg","images/waipio-valley-original.jpg","levi.favicon.png","logo.favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".json":"application/json",".ico":"image/vnd.microsoft.icon",".png":"image/png",".woff2":"font/woff2",".jpg":"image/jpeg",".webp":"image/webp",".jpeg":"image/jpeg",".txt":"text/plain"},
	_: {
		entry: {"file":"start-3ad642e8.js","js":["start-3ad642e8.js","chunks/index-4f674e2a.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/11.js'),
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
				id: "fragile",
				pattern: /^\/fragile\/?$/,
				names: [],
				types: [],
				path: "/fragile",
				shadow: () => import('./entries/endpoints/fragile/index.js'),
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "nations",
				pattern: /^\/nations\/?$/,
				names: [],
				types: [],
				path: "/nations",
				shadow: () => import('./entries/endpoints/nations/index.js'),
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "sirv",
				pattern: /^\/sirv\/?$/,
				names: [],
				types: [],
				path: "/sirv",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "snapper",
				pattern: /^\/snapper\/?$/,
				names: [],
				types: [],
				path: "/snapper",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "terms",
				pattern: /^\/terms\/?$/,
				names: [],
				types: [],
				path: "/terms",
				shadow: () => import('./entries/endpoints/terms/index.js'),
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "destinations/[id]",
				pattern: /^\/destinations\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "sirv/[slug]",
				pattern: /^\/sirv\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "trip/[id]",
				pattern: /^\/trip\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,10],
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
				a: [0,11],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
