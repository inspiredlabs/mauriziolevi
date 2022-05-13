import Africa from './Africa.svelte';
//import AsiaOceania from './AsiaOceania.svelte';

/* How to pass a component: https://linguinecode.com/post/how-to-pass-a-svelte-component-to-another-svelte-component */

export default [
	{
		id: 'africa',
		title: 'Africa',
		bg: 'bg-gray',
		src: './images/king-lewanika-lodge-liuwa-plain-national-park.webp',
		imageCredit: '',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "King Lewanika Lodge, Liuwa Plain National Park – Zambia, Africa",
		slug: '/',
		component: Africa
	},
	{
		id: 'asia-oceania',
		title: 'Asia Oceania',
		bg: 'bg-light-red',
		src: './images/bodgaya-island-tun-sakaran-marine-park-sulu-sea.jpeg',
		imageCredit: 'This image is from: https://www.molon.de/galleries/Malaysia/Sabah/Islands/',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Bodgaya Island, Tun Sakaran Marine Park – Sulu Sea, Malaysia",
		slug: '/',
		component: Africa
		//component: AsiaOceania
	},
	{
		id: 'europa',
		title: 'Europa',
		bg: 'bg-light-yellow',
		src: './images/eu-largest-lake-skadar-national-park-montenegro-and-albania.jpeg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Lake Skadar National Park - Albania, South East Europe",
		slug: '/',
		component: Africa
		//component: Europa
	},
	{
		id: 'americhe',
		title: 'Americhe',
		bg: 'bg-light-blue',
		src: './images/Tineye.Torres.del.Paine.National.Park.jpeg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Lago Grey, Torres del Paine National Park - Cile, South Westerly tip of South America",
		slug: '/',
		component: Africa
		//component: Americhe
	},
	{
		id: 'medio-oriente',
		title: 'Medio Oriente',
		bg: 'bg-light-pink',
		src: './images/lake-urmia-south-caspian-sea-iran.jpeg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Lake Urmia, East Azerbaijan &amp; West Azerbaijan - South of the Caspian Sea, Iran",
		slug: '/',
		component: Africa
		//component: MedioOriente
	},
	{
		id: 'grande-nord',
		title: 'Grande Nord',
		bg: 'bg-red',
		src: './images/russia-largest-freshwater-lake-ladoga.jpeg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Freshwater Lake Ladoga – Russia, &amp; Finland's boarder",
		slug: '/',
		component: Africa
		//component: GrandeNord
	}
];
