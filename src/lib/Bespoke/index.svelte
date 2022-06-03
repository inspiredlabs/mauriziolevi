<script>
export let payoff;
export let title;

export let text;
export let lines;

import Row from '$lib/Row.svelte';

</script>

<!-- learn:
Be yourself
Bespoke itineraries
- Expert Guided Tour
- Trekking Expeditions
- Tailor-made Package
- Waterways
- Photo Safari
- Mountain Queen (Marmolada: the Queen of the Dolomites)
- Luxury Cruise
-->

<Row bg="bg-linen">
	<code>
		{payoff ? payoff : '' }
	</code>
	<code>
		{title ? title : '' }
	</code>
	<code>
		{text ? text : '' }
	</code>

	{#each lines as itinerary}
		<code>
			{itinerary.title}
		</code>
		<code>
			{itinerary.cta}
		</code>
		<code>
			{itinerary.image}
		</code>
	{/each}

</Row>

<style>
	code {
		display: block;
		padding-bottom: 2.5rem;
	}
</style>