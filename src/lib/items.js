//import Africa from './Africa.svelte';
//import AsiaOceania from './AsiaOceania.svelte';

// Stefano needs conditional logic to filter middleware: {@html arrayName.length > currentFields ? arrayName.substring(0, currentFields) + '&hellip;' : arrayName }

/* pass components, eg: `{#each items as item} <svelte:component this={item.component} /> {/each}`:  https://linguinecode.com/post/how-to-pass-a-svelte-component-to-another-svelte-component */


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
		slug: 'africa',
		//component: Africa
	},
	{
		id: 'lontano-oriente',
		title: 'Lontano Oriente',
		bg: 'bg-light-pink',
		src: './images/lake-urmia-south-caspian-sea-iran.jpeg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Lake Urmia, East Azerbaijan &amp; West Azerbaijan - South of the Caspian Sea, Iran",
		slug: 'lontano-oriente',
		//component: FarEast
	},
	{
		id: 'americhe',
		title: 'Americhe',
		bg: 'bg-light-blue',
		src: './images/Tineye.Torres.del.Paine.National.Park.webp',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Lago Grey, Torres del Paine National Park - Cile, South Westerly tip of South America",
		slug: 'americhe',
		//component: Americhe
	},
	{
		id: 'oceania',
		title: 'Oceania',
		bg: 'bg-light-red',
		src: './images/Marshall-Islands-coral-reef.webp',
		imageCredit: 'This image is from: http://www.logicum.co/wp-content/uploads/2016/04/Marshall-Islands-coral-reef.jpg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "The Marshall Islands, slightly west of the International Date Line, Micronesia",
		slug: 'oceania',
		//component: Oceania
	},
	{
		id: 'europa',
		title: 'Europa',
		bg: 'bg-light-yellow',
		src: './images/eu-largest-lake-skadar-national-park-montenegro-and-albania.jpeg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Lake Skadar National Park - Albania, South East Europe",
		slug: 'europa',
		//component: Europa
	},
	{
		id: 'vicino-oriente-asia-centrale',
		title: 'Vicino Oriente - Asia Centrale',
		bg: 'bg-light-red',
		src: './images/bodgaya-island-tun-sakaran-marine-park-sulu-sea.jpeg',
		imageCredit: 'This image is from: https://www.molon.de/galleries/Malaysia/Sabah/Islands/',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Bodgaya Island, Tun Sakaran Marine Park – Sulu Sea, Malaysia",
		slug: 'vicino-oriente-asia-centrale',
		//component: CentralEastAsia
	},
	{
		id: 'artide-e-antartide',
		title: 'Artide e Antartide',
		bg: 'bg-red',
		src: './images/russia-largest-freshwater-lake-ladoga.jpeg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Freshwater Lake Ladoga – Russia, &amp; Finland's boarder",
		slug: 'artide-e-antartide',
		//component: GrandeNord
	}
];
