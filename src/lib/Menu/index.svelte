<nav class="levi-nav fixed z-max w-100 top-0 landscape-top-0-ns landscape-top-0-m landscape-top-0-l flex tc white system">

<div class="w-100 flex justify-between
            f5 f4-ns f3-m f3-l lh-copy
						pv0
						pa2 measure
						ph4-ns measure-ns
						ph2-m measure-m
						pa0-l measure-wide-l mr-auto ml-auto">
	<h1 class="w-50 w-50-ns w-20-m w-20-l pv0 h3 f5 f4-ns fs-m f5-l mv0">
		<img class="w4" src="https://viaggilevi.vercel.app/images/levi-logo.svg" alt="Levi" />
		<span class="visually-hidden">I Vaggi di Maurizio Levi</span>
	</h1>

	<!-- ONLY: large & landscape -->
	<div class="dn dn-ns w-40-m w-40-l justify-between flex-m landscape-flex-l debug"><!-- bg-red -->
		<button class="w-25 pv0 pv2 pv2-l ttt bg-transparent f6 f4-ns f6-m f5-l pointer o-80 hover-o-100 transition white bn bb b--white ph0">partenze</button>
		<button class="w-25 pv0 pv2 pv2-l ttt bg-transparent f6 f4-ns f6-m f5-l pointer o-80 hover-o-100 transition white bn bb b--white ph0">viaggi</button>
	  <button class="w-25 pv0 pv2 pv2-l ttt bg-transparent f6 f4-ns f6-m f5-l pointer o-80 hover-o-100 transition white bn bb b--white ph0 nowrap">chi siamo</button>
		<button class="w-25 pv0 pv2 pv2-l ttt bg-transparent f6 f4-ns f6-m f5-l pointer o-80 hover-o-100 transition white bn bb b--white ph0">News</button>
	</div>

	<!-- debug: `outline b--blue` -->
  <div class="w-80 w-80-ns w-40-m w-50-l f5 f4-ns fs-m f5-l flex items-center justify-around debug">
    <!-- pv3 pv2-m pv2-l -->
    <div class="flex items-center justify-center-l justify-bettween-m br-pill bg-meadow nowrap hover-bg-gold pointer transition mr2">
			<!-- ph2 pv2 pa3 w3 w3-ns w-40-m w3-l h3 -->
		  <svg viewbox="0 0 24 24" class="no-select h2 pa2 pa2-m pr0-l pl2-l pv2">
		    <use xlink:href="#icon-search"></use>
		  </svg>
		  <span class="dn dn-ns dn-m flex-l w-100 h-100 nowrap items-center f5">Call</span>
		</div>
		<div class="flex items-center justify-center-l justify-bettween-m br-pill bg-meadow nowrap hover-bg-gold pointer transition">
		<!-- ph2 pv2 pa3 w3 w3-ns w-40-m w3-l h3 -->
		  <svg viewbox="0 0 24 24" class="no-select h2 pa2 pa2-m pr0-l pl2-l pv2">
		    <use xlink:href="#icon-search"></use>
		  </svg>
			<span class="dn dn-ns dn-m flex-l w-100 h-100 nowrap items-center f5">email</span>
		</div>

    <aside class="pl2 w-60 w-60-ns w-100-m w-100-l">
      <div class="flex items-center br-pill bg-meadow f6 f4-ns f6-m f5-l nowrap hover-bg-near-white bg-charcoal pointer transition pl3">
      <!-- w3 w3-ns w-40-m w3-l h3  -->
  		<input id="search" type="search" name="search" placeholder="Search" data-placeholder="Cerca" class="bg-transition input-reset br0 bb bw0 bg-transparent b--black f6 f5-ns db tl w-100 nowrap items-center nowrap white pv3">
			<!-- pv3 pa3 pl1 && form reset: codepen.io/inspiredlabs/pen/BaLRXaN  -->
  		<button class="inherit bg-near-black hover-bg-golden-brown pointer b--black br-pill ba bw2 aspect-ratio--object relative w1 w1-ns ph2 ph2-ns ph4-m w1-m ph4 w2-l ph4-l ">
	    <svg viewbox="0 0 24 24" class="no-select h2 relative" style="left:-1rem">
	    	<use xlink:href="#icon-search"></use>
	    </svg>
  	</button>
	</div>
</aside>
</div>

</div>
</nav>


<script>

/*

<!-- EXCEPT large & landscape -->
<nav class="levi-nav fixed z-9999 w-100 bottom-0 portrait-bottom-0-ns portrait-bottom-0-m portrait-bottom-0-l landscape-dn-l flex tc "><!-- bg-red -->
<div class="w-100 flex justify-between
						f5 f4-ns f3-m f3-l lh-copy
						pa2 measure
						pa4-ns measure-ns
						pa2-m measure-m
						pa0-l measure-wide-l mr-auto ml-auto">
	<!-- <button class="w-20 ttt bg-transparent h3 f6 f4-ns f6-m f5-l pointer o-80 hover-o-100 transition white bn bb b--white"><span class="bb bw2 b--transparent">destinazioni</span></button> -->
	<button class="w-25 ttt bg-transparent h3 f6 f4-ns f6-m f5-l pointer o-80 hover-o-100 transition white bn bb b--white"><!--calendario--><span class="bb bw2 b--transparent">partenze</span></button>
	<button class="w-25 ttt bg-transparent h3 f6 f4-ns f6-m f5-l pointer o-80 hover-o-100 transition white bn bb b--white"><!--tipologie viaggio--><span class="bb bw2 b--transparent">viaggi</span></button>
	<button class="w-25 ttt bg-transparent h3 f6 f4-ns f6-m f5-l pointer o-80 hover-o-100 transition white bn bb b--white">
		<span class="bb bw2 b--transparent">chi siamo</span>
		<!-- <span class="bb bw2 b--transparent">circa</span> -->
	</button>
	<button class="w-25 ttt bg-transparent h3 f6 f4-ns f6-m f5-l pointer o-80 hover-o-100 transition white bn bb b--white"><span class="bb bw2 b--transparent">news</span></button>
</div>
</nav>
*/
</script>


<style>

/**** MENU ****/

.ttt {
	text-transform: capitalize
}

.visually-hidden {
	/* Contain text within 1px box */
	height: 1px;
	overflow: hidden;
	width: 1px;
	/* Keep the layout */
	position: absolute;
	/* Remove any visible trace (e.g. background color) */
	clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%); /* browsers in the future */
	/* Prevent the screen reader to skip spaces between words */
	white-space: nowrap;
	/* snook: medium.com/web-dev-survey-from-kyoto/the-visually-hidden-technique-303f8e2bd409 */
}

.levi-nav {
	--alpha: 0.9;
	background-color: hsla(30,28.95%,14.9%,var(--alpha));
	backdrop-filter: blur(8px);
	/*  .backdrop-blur */
}

/*
orientation, is NOT integrated into Tachyonshower.
*/

@media all and (orientation:portrait) {
	@media screen and (min-width:30em) {
	  .portrait-bottom-0-ns {
	    bottom: 0;
	  }
	}
	@media screen and (min-width:30em) and (max-width:60em) {
	  .portrait-bottom-0-m {
	    bottom: 0;
	  }
	}
	@media screen and (min-width:60em) {
	  .portrait-bottom-0-l {
	    bottom: 0;
	  }
	}
}

/* .vh-05 { height: 5vh } */

@media all and (orientation:landscape) {
	@media screen and (min-width:60em) {
	/*     .landscape-vh-10-l {
	  	height: 10vh;
	  } */
	/*     .landscape-vh-15-l {
		  height: 15vh;
	  } */
	  .landscape-top-0-l {
	    top: 0;
	  }
	  .landscape-dn-l {
	    display: none;
	  }
	  .landscape-flex-l {
	    display: flex;
	  }
	}
}
</style>