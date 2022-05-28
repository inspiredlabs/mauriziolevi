<script>
	export let bg;
	export let id;
	// learn: usage: `<Section id={some-title} bg={tachyon-class}/>`
	</script>

	<section class="db w-100 cf {bg ? bg : undefined }" id={id ? id : undefined }>

		<!-- Inside the full-width section is the feature width: -->
		<div class="w-100 flex items-center justify-between fw6 f4 f3-ns f3-m f3-l measure measure-ns measure-m measure-wide-l mr-auto ml-auto overflow-x-hidden">
			<div class="db fl w-100 cf overflow-y-hidden">
				<!-- pt5 pb5 -->
				<slot></slot>
			</div>
		</div>

	</section>




