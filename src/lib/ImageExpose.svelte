<script>
	import Row from '$lib/Row.svelte';
	//usage: export let bg; // usage: `class="{bg ? bg : undefined }"`
	export let title;
	export let images;
	export let location;
</script>

<style>
	/* fix: Grid is incomplete, see: `__layout.svelte` */
	.vh-two-thirds { height: calc(100vh / 1.5) }
	.col-repeat-6-1fr { grid-template-columns: repeat(6, 1fr) }
</style>

<!-- <Row bg="bg-gold"> -->
  <!-- <h3>{title}</h3> -->
<!-- </Row> -->
<div class="dg vh-two-thirds col-repeat-6-1fr gg3 bg-solitaire">
  <figure
    style="background-position: center center; background-image:url({images[0].image})"
    class="grid grid-items-start grid-align-end col-span-3 row-span-3 pa3 mh0 mv0">
    <p class="white f7 mv0 ts1-dark-gray">{@html images[0].location === '' ? title : location }</p>
    <!-- <p class="white">{@html images[0].location == '' ? title : location }</p> -->
  </figure>
  <figure
    style="background-position: center center; background-image:url({images[1].image})"
    class="grid grid-items-start grid-align-end col-span-3 row-span-2 pa3 mh0 mv0">
    <p class="white f7 mv0 ts1-dark-gray">{@html images[1].location === '' ? title : location }</p>
  </figure>
  <figure
    style="background-position: center center; background-image:url({images[2].image})"
    class="grid grid-items-start grid-align-end pa3 mh0 mv0">
    <p class="white f7 mv0 ts1-dark-gray">{@html images[2].location === '' ? title : location }</p>
  </figure>

  <figure
    style="background-position: center center; background-image:url({images[3].image})"
    class="grid col-span-2 grid-items-start grid-align-end pa3 mh0 mv0">
    <p class="white f7 mv0 ts1-dark-gray">{@html images[3].location === '' ? title : location }</p>
  </figure>
</div>


