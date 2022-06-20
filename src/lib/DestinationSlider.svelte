<script>
  export let destinations;

  import Defs from '$lib/Defs.svelte';

  let activeIndex = 0;
  let imageOverlay = true;

  // note: part of the `<Anchor />`
  /* learn: usage: `{ figCaption.length > truncate ? figCaption.substring(0, truncate) + '&hellip;' : figCaption }` @html location: `~/offline/src/routes/viaggi/cile-12-giorni/index.svelte` */
  let truncate = 48; // iPhone 5, ideal: tachyons.io/docs/typography/measure/
  let truncateNS = 66; // iPhone 8, ideal: tachyons.io/docs/typography/measure/
  let truncateMedium = 108; // ideal: tachyons.io/docs/typography/measure/

  </script>


  <!-- fix: keyboard access not integrated onto `routes`/`<Menu />` -->
  <!-- note: turn `destinationsSlider.title` into `title.replace(&urlize)`. -->
  <!-- destinationsSlider.title
  destinationsSlider.image
  destinationsSlider.location
  destinationsSlider.payoff
  destinationsSlider.overlayImage -->

  <section class="w-100 tc overflow-hidden bg-linen ">

    <aside class="overflow-y-hidden x-mandatory flex w-100 overflow-x-auto smooth-scroll vh-75 vh-50 vh-75-m vh-75-l">
    <!-- fix: `touch-scrolling` -->
      {#each destinations as {id, title, bg, src, imageCredit, headingEn, headingIt, figCaption, slug}, i}

      <!-- debug:  h-75 h-100-ns h-50-m h-100-l f-headline -->
      <figure
        id={id}
        class="w-100 h-100 justify-around snap-start flex flex-column f4 white items-center pv2 ma0 cover "
        style="
        --cocoa: 30,28.95%,14.9%;
        --alpha:0.6;
        min-width: 100vw;
        background-position-x: center;
        background-image:
        linear-gradient(
          hsla(var(--cocoa), {imageOverlay === true ? `0.555` : `0`}) 0,
          hsla(var(--cocoa), {imageOverlay === true ? `0.555` : `0`}) 100%),
          url({JSON.stringify(src)})">
          <!-- learn: req. `min-width: 100vw` -->
          <!-- Note: see: palettes.imfeld.dev/ -->
          <!-- background-position: 0% 80%; // horizontal, vertical from: developer.mozilla.org/en-US/docs/Web/CSS/background-position-x-->

          <svg
          style="transform: scale(150%)"
          class="h-50 w-100 pa0 ma0 s--accent sw2 transparent no-select pt2 pt0-ns pt4-m pt5-l">
            <!-- debug: portrait-vh-75 landscape-vh-50 portrait-vh-50-m portrait-vh-50-l
               style="height: 33%;max-height: 33%" -->

            <!-- note: `#hash-name` req. -->
            <!-- learn: svelte.dev/tutorial/else-if-blocks -->
            {#if !id}
              <use xlink:href="#sketch-compass"></use>
            {:else if id == "sketch-globe" }
              <use xlink:href="#sketch-globe"></use>
            {:else}
              <use xlink:href="#sketch-{id}"></use>
            {/if}
          </svg>

           <!-- f5 f4-ns f3-m f3-l
           measure pa2 measure-ns pa4-ns measure-m pa2-m measure-wide-l
           pa0-l mr-auto ml-auto -->


            <span class="dark-beige tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f6-l fw5 ttu tc mv0" data-en="{headingEn}">{@html headingIt}</span>

            <!-- fix: z-index && consider conditional lang="it||en" -->
            <h2 class="w-100 mv0 ph3 f2 f2-ns f1-m f1-l tc lh-solid fraunces">{@html title}</h2>
              <!-- z-1 -->

            <a href="#{slug}" class="transition link pointer br-pill b--white ba bw1 ph4 ph3-ns ph5-m ph4-l pv2 bg-black-10 white hover-bg-black-50 transition-bg mr-auto ml-auto db tc ts1-dark-gray f5 f5-ns f7-m f5-l bg-transparent ttt mv3" en="Discover This Place" lang="it">scopri le destinazioni</a>

            <figcaption class="white flex w-100 f5 f4-ns f3-m f3-l lh-copy measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto h1">
            <!-- debug: vh-05 landscape-vh-15-l -->
            <!-- debug: <div class="flex flex-column w-100 pb0 pb0-l tl"> -->

            <!-- truncate: -->
            <span class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw3 mv0 pb3 db dn-ns dn-m dn-l">{@html figCaption.length > truncate ? figCaption.substring(0, truncate) + '&hellip;' : figCaption }</span>

            <!-- truncateNS: -->
            <span class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw3 mv0 pb3 dn db-ns dn-m dn-l">{@html figCaption.length > truncateNS ? figCaption.substring(0, truncateNS) + '&hellip;' : figCaption }</span>

            <!-- truncateMedium: -->
            <span class="tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f6-m f5-l fw3 mv0 pb3 dn dn-ns db-m db-l">{@html figCaption.length > truncateMedium ? figCaption.substring(0, truncateMedium) + '&hellip;' : figCaption }</span>
          </figcaption>

        </figure>
      {/each}
    </aside>

  <div class="db black-70 f5 f4-ns f3-m f3-l lh-copy measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto">

    <nav class="fl w-100 flex flex-wrap items-center justify-around f7 fraunces">
      <!-- flex-row-ns flex-column-m flex-row-l -->
      {#each destinations as {title, id}, i}
        <a
          href="#{id}"
          class="pointer link inherit o-70 fw4 hover-fw6 hover-o-100 transition
          justify-between items-center pv1 golden-brown truncate pv2"
          class:active={i === activeIndex}
          on:click={() => activeIndex = i}
        >{title}</a>
        <!-- style="width:calc(100% / {destinations.length})" -->
      {/each}
    </nav>

  </div>
  </section>

  <style>
    /* This `.hover-ltr` can not be implemented into Tachyon Shower. It's not atomic. */
    /* redesign with atomicity in mind: codepen.io/inspiredlabs/pen/ZEvVgdr */

    .active {
      opacity: 1;
      font-variation-settings: 'wght' 600;
    }


    /* learn: NOT yet implemented in Tachyon Shower */
    .x-mandatory {
      scroll-snap-type: x mandatory
    }

    .snap-start { scroll-snap-align: start }


    /* learn: this is the new SNAPPER */
    @media all and (orientation:landscape) {
    /* .landscape-vh-100 {
        height: 100vh;
    }
    @media screen and (min-width:30em) {
      .landscape-vh-100-ns {
        height: 100vh;
      }
    } */
    @media screen and (min-width:30em) and (max-width:60em) {
      .landscape-vh-100-m {
        height: 100vh;
      }
    }
    /* @media screen and (min-width:60em) {
      .landscape-vh-100-l {
        height: 100vh;
      }
    } */
  }

  @media all and (orientation:portrait) {
    /* .portrait-vh-75 {
      height: 75vh;
    }
    @media screen and (min-width:30em) {
      .portrait-vh-75-ns {
        height: 75vh;
      }
    } */
    @media screen and (min-width:30em) and (max-width:60em) {
      .portrait-vh-75-m {
        height: 75vh;
      }
    }
    /* @media screen and (min-width:60em) {
      .portrait-vh-75-l {
        height: 75vh;
      }
    } */
  }
  </style>
  <Defs />