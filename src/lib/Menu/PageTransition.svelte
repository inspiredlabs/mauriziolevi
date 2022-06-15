<script>
	/*
	--Note: `style="will-change:opacity"`, post this fix here: https://dev.to/evanwinter/page-transitions-with-svelte-kit-35o6
	Originally from: el3um4s.medium.com/sveltekit-github-pages-4fe2844773de
	*/

	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
  export let url = '';
  const duration = 360;

/* learn: Mounts a component when the DOM is ready.  Useful for intro animations. */
import { onMount } from 'svelte';
let loaded = false;
onMount(() => {
	loaded = true;
});

// learn: this is insufficent (as prerendered paged appear onload): youtube.com/watch?v=G3KFXKawy7Y

import { browser } from '$app/env';

//$: if (browser && loaded) {	container.classList.remove("o-0") }

function rm() {
	container.classList.remove("o-0");
	// let container;
	// bind:this={container} && \<style\>.o-0{opacity:0}\<\/style\>
}

</script>

<div class="container">
  {#key url}
    <div class="cell"
			in:fade={{ duration: duration, delay: duration }}
			out:fade={{ duration: duration }}>
			<slot></slot>
  </div>
  {/key}
</div>




<!-- {#if browser && loaded}
	{#key url}
		<div
			style="will-change:opacity"
			in:fade={{  duration: 360, delay: 1000 }}
			out:fade={{ duration: 180, delay: 0 }}>
			<!-- note: using `<slot />` breaks the transition ->
			<slot />
		</div>
	{/key}
{:else}
	<div class="o-0">
		<slot />
	</div>
{/if} -->

<!-- {#if !loaded && $page.url.pathname === url || !loaded && $page.url.pathname != url }
INVISIBLE
{:else}
FADE IN
{/if} -->

<!-- { !loaded && $page.url.pathname === url || !loaded && $page.url.pathname != url ? `opacity:0` : '' } -->



<style>
  .container {
    display: grid;
    grid-template: 1fr 1fr;
  }
  .cell {
    grid-row: 1;
    grid-column: 1;
  }
</style>