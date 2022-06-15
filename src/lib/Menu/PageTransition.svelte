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



//import { browser } from '$app/env';

//$: if (browser && loaded) {	container.classList.remove("o-0") }

function rm() {
	container.classList.remove("o-0");
	// let container;
	// bind:this={container} && \<style\>.o-0{opacity:0}\<\/style\>
}

</script>

<!-- learn: prerendered pages are insufficent: youtube.com/watch?v=G3KFXKawy7Y -->
<!-- learn: wrapped in a `grid`, prevents firing paint 2x: practicaldev-herokuapp-com.freetls.fastly.net/evanwinter/page-transitions-with-svelte-kit-35o6 -->
<div style="display: inline-grid">
  {#key url}
    <div style="width: 100vw"
			in:fade={{ duration: duration, delay: duration }}
			out:fade={{ duration: duration }}>
			<!-- note: using `<slot />` can break the transition -->
			<slot></slot>
  </div>
  {/key}
</div>