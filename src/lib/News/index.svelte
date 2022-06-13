<script>
export let news;

import Row from '$lib/Row.svelte';

</script>

<div class="bg-cocoa linen">
  NEWS = <br>
  Care Viaggiatrici<br>
  cari Viaggiatori.<br>
</div>

<Row bg="bg-cocoa linen">

	{#each news as { image, text, cta }}
		<code>
			{cta ? cta : '' }
		</code>
		<code>
			{text ? text : '' }
		</code>
		<code>
			{image ? image : '' }
		</code>
	{/each}

</Row>

<style>
	code {
		display: block;
		padding-bottom: 2.5rem;
	}
</style>