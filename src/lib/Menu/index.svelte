<script>

/*
learn: stackoverflow.com/questions/68187584/how-to-route-programmatically-in-sveltekit
function routeToPage(route: string, replaceState: boolean) {
	goto(`/${route}`, { replaceState })
}
*/
import { goto } from '$app/navigation';
</script>

<nav class="levi-nav fixed z-max w-100 top-0 landscape-top-0-ns landscape-top-0-m landscape-top-0-l flex tc white system">

<div class="w-100 flex justify-between
            f5 f4-ns f3-m f3-l lh-copy
						pv0
						pa2 measure
						ph4-ns measure-ns
						ph2-m measure-m
						pa0-l measure-wide-l mr-auto ml-auto">
	<h1 class="tl w-50 w-50-ns w-25-m w-20-l pv0 h3 f5 f4-ns fs-m f5-l mv0">
		<a href="/" class="link pointer transition hover-saturate">
			<img class="w4" src="https://viaggilevi.vercel.app/images/levi-logo.svg" alt="Levi" />
			<span class="visually-hidden">I Vaggi di Maurizio Levi</span>
		</a>
	</h1>

	<!-- ONLY: large & landscape -->
	<div class="dn dn-ns
	w-45-m landscape-flex-m
	w-40-l justify-between landscape-flex-l">
	<!-- debug: portrait-dn-m landscape-flex-m -->

		<button on:click={() => goto("#partenze")} class="w-25 pv0 pv2 pv2-l ttt bg-transparent f6 f4-ns f6-m f5-l pointer o-80 hover-o-100 transition white bn bb b--white ph0">partenze</button>

		<button on:click={() => goto("#viaggi")} class="w-25 pv0 pv2 pv2-l ttt bg-transparent f6 f4-ns f6-m f5-l pointer o-80 hover-o-100 transition white bn bb b--white ph0">viaggi</button>

	  <button on:click={() => goto("#chi-siamo")} class="w-25 pv0 pv2 pv2-l ttt bg-transparent f6 f4-ns f6-m f5-l pointer o-80 hover-o-100 transition white bn bb b--white ph0 nowrap">chi siamo</button>

		<button on:click={() => goto("#news")} class="w-25 pv0 pv2 pv2-l ttt bg-transparent f6 f4-ns f6-m f5-l pointer o-80 hover-o-100 transition white bn bb b--white ph0">News</button>
	</div>

  <div class="w-80 w-80-ns w-40-m w-50-l f5 f4-ns fs-m f5-l flex items-center justify-around">
    <!-- pv3 pv2-m pv2-l -->
		<a  href="tel:+390234934528" class="link flex items-center justify-center-l justify-bettween-m br-pill charcoal bg-solitaire hover-bg-linen pointer transition mr2">
			<!-- ph2 pv2 pa3 w3 w3-ns w-40-m w3-l h3 -->
		  <svg viewbox="0 0 24 24" class="no-select h1 ph2 pv2 pr0-l pa2-ns h2-m pa2-m h2-l">
				<!-- h2 pa2 -->
				<use xlink:href="#icon-phone"></use>
				<!-- <use xlink:href="#whatsapp"></use> -->
		  </svg>
			<!-- <span class="dn dn-ns dn-m flex-l w-100 h-100 nowrap items-center f5 pl2">Call</span> -->
		  <span class="dn dn-ns dn-m flex-l w-100 h-100 truncate items-center f7 pv2-l fraunces pl0 ml0">
				<span class="fw4">+</span>
				<span class="fw4 bb b--transparent hover-b--inherit">39&thinsp;02&thinsp;3493&thinsp;4528</span>
			</span>
			<!-- debug: `fraunces fw4` style="letter-spacing:-0.0125em" -->
		</a>

		<a href="&#109;&#97;&#105;&#108;&#116;&#111;&colon;&#105;&#110;&#102;&#111;&commat;&#118;&#105;&#97;&#103;&#103;&#105;&#108;&#101;&#118;&#105;&period;&#99;&#111;&#109;" class="link flex items-center justify-center-l justify-bettween-m br-pill charcoal bg-solitaire hover-bg-linen pointer transition mr2 ">
			<!--
				white bg-golden-brown hover-bg-cocoa
				ph2 pv2 pa3 w3 w3-ns w-40-m w3-l h3 -->
		  <svg viewbox="0 0 24 24" class="no-select h1 pa2 pa2-ns h2-m pa2-m h2-l">
				<!-- h2 pa2 -->
				<use xlink:href="#icon-open"></use>
		  </svg>
			<!-- <span class="dn dn-ns dn-m flex-l w-100 h-100 nowrap items-center f5 pl2">Call</span> -->
			<span class="dn dn-ns dn-m flex-l w-100 f7 pv2-l fraunces fw4 nowrap">
				<span class="fw4 bb b--transparent hover-b--inherit">info&hellip;</span>
			</span>
			<!-- h-100 truncate items-center  -->
		</a>



    <aside class="pl2 w-60 w-60-ns w-100-m w-100-l">
      <div class="flex items-center br-pill bg-meadow f6 f4-ns f6-m f5-l hover-bg-near-white bg-charcoal pointer transition ">
      <!-- w3 w3-ns w-40-m w3-l h3  -->
  		<input id="search" type="search" name="search" placeholder="Search" data-placeholder="Cerca" class="charcoal bg-transition input-reset br0 bb bw0 bg-transparent b--black f5 f5-ns f5-m f5-l tl items-center pv3 w-100 mr0 pr0 pl1 pl2-ns pl3-m pl3-l">
			<!-- pr0 mr0 -->
			<!-- pv3 pa3 pl1 && form reset: codepen.io/inspiredlabs/pen/BaLRXaN  -->
  		<button class="inherit bg-near-black hover-bg-golden-brown pointer  br-pill bn aspect-ratio--object relative
			w2 w3-l
			pr0 pl0 pv2"
			style="border-radius: 0px 9999px 9999px 0px">
			<!--
			w3 pv2 ph1
			w1-ns ph2-ns
			w3-m ph1-m
			w2-l ph4-l
			-->
			<!-- ba b--transparent || b--black ba bw2  -->
	    <svg viewbox="0 0 24 24" class="no-select h2 relative left-0">
	    	<use xlink:href="#icon-search"></use>
	    </svg>
  	</button>
	</div>
</aside>
</div>

</div>
</nav>


<!-- EXCEPT large & landscape -->
<nav class="levi-nav fixed z-9999 w-100
bottom-0
landscape-dn-m
landscape-dn-l flex tc "><!-- bg-red -->
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




<style>

.hover-b--inherit {
	border: 2px solid inherit;
	transition: border 0.4s ease 0s!important;
	transform: translateZ(0);
}

.hover-b--inherit:hover {
	border-color: inherit
}

/* note: similar to: `CONTATTACI` */
/* .link:hover span {
	text-decoration:underline
} */

/**** MENU ****/

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

.ttt {
	text-transform: capitalize
}


/*
orientation, is NOT integrated into Tachyonshower.
*/

@media screen and (min-width:30em) and (max-width:60em) {
	.w-45-m {
		width: 45%;
	}
}



@media all and (orientation:portrait) {
	@media screen and (min-width:30em) {
	  /* .portrait-bottom-0-ns {
	    bottom: 0;
	  } */
	}
	@media screen and (min-width:30em) and (max-width:60em) {
	  /* .portrait-bottom-0-m {
	    bottom: 0;
	  } */
	}
	@media screen and (min-width:60em) {
	  /* .portrait-bottom-0-l {
	    bottom: 0;
	  } */
	}
}

/* .vh-05 { height: 5vh } */

@media all and (orientation:landscape) {

	@media screen and (min-width:30em) {

	}
	@media screen and (min-width:30em) and (max-width:60em) {
	  .landscape-dn-m {
	    display: none;
	  }
	  .landscape-flex-m {
	    display: flex;
	  }
	}

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

/* learn: css-tricks.com/basics-css-blend-modes/ */
.hover-saturate:hover {
	filter: saturate(1.8); /*  sepia(100%) */
}
</style>