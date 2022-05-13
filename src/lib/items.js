import Africa from './Africa.svelte';
//import AsiaOceania from './AsiaOceania.svelte';

/* How to pass a component: https://linguinecode.com/post/how-to-pass-a-svelte-component-to-another-svelte-component */

export default [
	{
		id: 'africa',
		title: 'Africa',
		bg: 'bg-gray',
		src: './images/bg-africa.jpg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Some location",
		slug: '/',
		component: Africa
	},
	{
		id: 'asia-oceania',
		title: 'Asia Oceania',
		bg: 'bg-light-red',
		src: './images/bg-asia-oceania.jpg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Asia goes here.",
		slug: '/',
		component: Africa
		//component: AsiaOceania
	},
	{
		id: 'europa',
		title: 'Europa',
		bg: 'bg-light-yellow',
		src: './images/bg-europa.jpg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Europa notes...",
		slug: '/',
		component: Africa
		//component: Europa
	},
	{
		id: 'americhe',
		title: 'Americhe',
		bg: 'bg-light-blue',
		src: './images/Torres.del.Paine.National.Park.original.3288.jpg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Lago Grey - Torres del Paine National Park - Cile",
		slug: '/',
		component: Africa
		//component: Americhe
	},
	{
		id: 'medio-oriente',
		title: 'Medio Oriente',
		bg: 'bg-light-pink',
		src: './images/bg-europa.jpg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "Orient notes...",
		slug: '/',
		component: Africa
		//component: MedioOriente
	},
	{
		id: 'grande-nord',
		title: 'Grande Nord',
		bg: 'bg-red',
		src: './images/bg-ru.jpg',
		headingEn: "I want to travel",
		headingIt: "voglio viaggiare",
		figCaption: "FN, SE, DM, Ru notes...",
		slug: '/',
		component: Africa
		//component: GrandeNord
	}
];
