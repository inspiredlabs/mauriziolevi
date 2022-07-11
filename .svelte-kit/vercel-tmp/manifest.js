export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","apple-icon-180.png","apple-splash-1125-2436.jpg","apple-splash-1136-640.jpg","apple-splash-1170-2532.jpg","apple-splash-1242-2208.jpg","apple-splash-1242-2688.jpg","apple-splash-1284-2778.jpg","apple-splash-1334-750.jpg","apple-splash-1536-2048.jpg","apple-splash-1620-2160.jpg","apple-splash-1668-2224.jpg","apple-splash-1668-2388.jpg","apple-splash-1792-828.jpg","apple-splash-2048-1536.jpg","apple-splash-2048-2732.jpg","apple-splash-2160-1620.jpg","apple-splash-2208-1242.jpg","apple-splash-2224-1668.jpg","apple-splash-2388-1668.jpg","apple-splash-2436-1125.jpg","apple-splash-2532-1170.jpg","apple-splash-2688-1242.jpg","apple-splash-2732-2048.jpg","apple-splash-2778-1284.jpg","apple-splash-640-1136.jpg","apple-splash-750-1334.jpg","apple-splash-828-1792.jpg","data/.DS_Store","data/items.js","data/person/index.html","favicon.ico","favicon.png","fonts/Fraunces--latin_basic.woff2","fonts/Fraunces-Italic--latin_basic.woff2","images/.DS_Store","images/160x60-horizon.webp","images/48x19-horizon.gif","images/96x40-horizon.jpg","images/Levi-Maurizio-768x510.jpg","images/Levi-Maurizio-768x510.webp","images/Marshall-Islands-coral-reef.jpeg","images/Marshall-Islands-coral-reef.webp","images/MaurizioLevi_Anteprima.jpg","images/MaurizioLevi_Anteprima.webp","images/Maurizio_Levi.jpg","images/Maurizio_Levi.webp","images/Tineye.Torres.del.Paine.National.Park.jpeg","images/Tineye.Torres.del.Paine.National.Park.webp","images/Torres.del.Paine.National.Park.original.3288.jpg","images/adobestock-255750571.webp","images/alba10.webp","images/arab.png","images/arab.webp","images/asc.png","images/asc.webp","images/bodgaya-island-tun-sakaran-marine-park-sulu-sea.jpeg","images/bodgaya-island-tun-sakaran-marine-park-sulu-sea.webp","images/boingboing-moon.jpeg","images/cile-flag.webp","images/cile-hilton-640x480.webp","images/eu-largest-lake-skadar-national-park-montenegro-and-albania.jpeg","images/eu-largest-lake-skadar-national-park-montenegro-and-albania.webp","images/fai.png","images/fai.webp","images/fto-landscape.png","images/fto-landscape.webp","images/fto.png","images/fto.webp","images/journal.png","images/journal.webp","images/kaluahine-falls-waipio-valley-hawaii.jpeg","images/king-lewanika-lodge-liuwa-plain-national-park.jpeg","images/king-lewanika-lodge-liuwa-plain-national-park.webp","images/lagune-altiplaniche-1.jpeg","images/lake-urmia-south-caspian-sea-iran.jpeg","images/lake-urmia-south-caspian-sea-iran.webp","images/levi-logo.svg","images/levi-stamp.svg","images/levi_logo.png","images/levi_logo.webp","images/logo.png","images/logo.webp","images/oceania_map_southeast_asia.jpeg","images/placeholder.gif","images/russia-largest-freshwater-lake-ladoga.jpeg","images/russia-largest-freshwater-lake-ladoga.webp","images/surf.png","images/surf.webp","images/tri.png","images/tri.webp","images/unesco.png","images/unesco.webp","images/ungheria-repubblica-slovacca-adobestock-177932056.jpeg","images/unsplash.com.photos.loRvsBv0Xek.jpeg","images/unsplash.com.photos.loRvsBv0Xek.webp","images/usa-banner-01.webp","images/waipio-valley-akaka-falls.jpeg","images/waipio-valley-original.jpg","levi.favicon.png","logo.favicon.png","manifest.webmanifest","pwa-192x192.png","pwa-512x512.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".js":"application/javascript",".html":"text/html",".ico":"image/vnd.microsoft.icon",".woff2":"font/woff2",".webp":"image/webp",".gif":"image/gif",".jpeg":"image/jpeg",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".txt":"text/plain"},
	_: {
		entry: {"file":"start-3d6ad61f.js","js":["start-3d6ad61f.js","chunks/index-eaa1a73f.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				type: 'endpoint',
				id: "form/contact",
				pattern: /^\/form\/contact\/?$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/form/contact.js')
			},
			{
				type: 'page',
				id: "destinations/[id]",
				pattern: /^\/destinations\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "nations/[id]",
				pattern: /^\/nations\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,3],
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
				a: [0,4],
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
				a: [0,5],
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
				a: [0,6],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
