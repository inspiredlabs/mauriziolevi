<script>
export let payoff;
export let title;

export let text;
export let lines;

import Row from '$lib/Row.svelte';

</script>

<div class="bg-cobalt white-60">
  Bespoke = <br>
  IL TUO ESSERE<br>
  Linee<br>
  di viaggio<br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
</div>

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
	<code>{payoff ? payoff : '' }</code>
	<code>{title ? title : '' }</code>
	<code>{text ? text : '' }</code>

	<!-- note; itinerary -->
	{#each lines as {title, cta, image}, i}
		<code>{title}</code>
		<code>{cta}</code>
		<code>{image}</code>
	{/each}
</Row>

<style>
	code {
		display: block;
		padding-bottom: 2.5rem;
	}
</style>