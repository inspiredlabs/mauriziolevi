<script>
export let bg;
// fix: `db` is now akward to use without `grid` || `flex`!
// learn: usage: `<Section id={some-title} bg={tachyon-class}/>`
</script>

<section class="db w-100 cf {bg ? bg : undefined }">
	<div class="w-100 flex items-center justify-between fw6 f4 f3-ns f3-m f3-l measure measure-ns measure-m measure-wide-l mr-auto ml-auto overflow-x-hidden">
		<div class="db fl w-100 cf overflow-y-hidden overflow-x-hidden ">
			<!-- ph2 ph0-ns ph0-m ph0-l pt5 pb5 -->
			<slot></slot>
		</div>
	</div>
</section>

<style>

.bg-triad {
		/* learn: blue: */
    /* background-color: hsl(215, 47%, 85%);  */
		/* learn: pink */
		/* background-color: hsl(4, 49%, 86%);  */
		/* learn: green */
		background-color: hsl(125, 21%, 81%);
  }

/* learn: `triad` color scheme from: convertingcolors.com/hsl-color-35_47_85.html?search=HSL(35%C2%B0,%2047%,%2085%) */
</style>