<script>
	import { onMount } from "svelte";
	const endpoint = "http://kel12.therebelwatchtower.net/aree-geografiche";
	const endpoint1 = "http://kel12.therebelwatchtower.net/viaggi-in-evidenza"
	const endpoint2 = "http://kel12.therebelwatchtower.net/viaggi-in-partenza"
	// const endpoint = "http://192.168.17.129/sveltekit/json.json";

	let areas = [];
	let viaggi_in_evidenza = [];
	let viaggi_partenza=[];

	onMount(async () => {
		const response = await fetch(endpoint);
		areas = await response.json();
	});

	onMount(async () => {
		const response = await fetch(endpoint1);
		viaggi_in_evidenza = await response.json();
	});

	onMount(async () => {
		const response = await fetch(endpoint2);
		viaggi_partenza = await response.json();
	});

// debug: perhaps consider a helper function: stackoverflow.com/questions/25921319/escape-new-lines-with-js#25921448
</script>

<main>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
.red {
	background:red;
}
</style>

<h4 class="red">My nations</h4>
	<ul>
		{#each areas as area}
			<div>
				<p>{area.descrizione}</p>
			</div>
		{/each}
	</ul>

	<h4>Viaggi in evidenza</h4>
	<ul>
		{#each viaggi_in_evidenza as viaggi}
			<div>
				{@html viaggi.titolo_viaggio.replace(/\\r/g, '').replace(/\\n/g, '')}
				<div>
					{@html viaggi.testo_per_sito.replace(/\\r/g, '').replace(/\\n/g, '')}
				</div>
			</div>
		{/each}
	</ul>
	<h4>Viaggi in partenza</h4>
	<ul>
		{#each viaggi_partenza as viaggi}
			<div>
				{@html viaggi.titolo_viaggio.replace(/\\r/g, '').replace(/\\n/g, '')}
				<div>
					{@html viaggi.testo_per_sito.replace(/\\r/g, '').replace(/\\n/g, '')}
				</div>
			</div>
		{/each}
	</ul>
</main>
