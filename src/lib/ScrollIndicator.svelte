<script>
	// import Row from '$lib/Row.svelte';
</script>

<div class="h2 relative">
	<div class="direction-indicator"></div>
</div>

<style>

	/*
	Mouse Wheel, from: ~/locality.site/src/01-isotope-hugo-json-output/index.html
	*/

	/*
	orig: `.mouse > .wheel`, replaced with: `.relative > .direction-indicator`
	*/
	.direction-indicator {
		display: block;
		margin: 0 0 0 -4px;/* Consider REM */
		position: absolute;
		top: 0px;
		left: 50%;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: white;
		animation: scroll 5.4s linear 0s infinite normal none;
	}

	@keyframes scroll {
		0% {
			transform: translate3d(0,0px,0);
			opacity: 0;
			background: transparent;
		}

		5% {
			opacity: 1;
			background: white;
		}

		13% {
			transform: translate3d(0,0.8rem,0);
			opacity: 1;
			background: white;
		}

		62% {
			transform: translate3d(0,1.8rem,0);
			opacity: 0;
			background: transparent;
		}

		100% {
			transform: translate3d(0,0px,0);
			opacity: 0;
			background: transparent;
		}

	}

	</style>