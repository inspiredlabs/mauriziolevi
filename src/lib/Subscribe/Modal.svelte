<script>
  // learn: css-tricks.com/some-hands-on-with-the-html-dialog-element/
  // learn: dev.to/hideckies/modal-window-in-svelte-1kdo
  import { createEventDispatcher } from 'svelte';

  export let modalOpen;

  const dispatch = createEventDispatcher();

  function closeModal() {
    modalOpen = false;
    dispatch('closeModal', { modalOpen });
  }

  // learn: svelte.dev/repl/08a2a569d1354426ab747445ece60fcb?version=3.22.2
  function handleEscape(event) {
		if (event.key === 'Escape' ) {
			closeModal();
		}
	}

</script>

<svelte:window on:keydown={handleEscape}></svelte:window>

<dialoge
on:click={closeModal}
class="z-9 top-0 left-0 {modalOpen ? 'db' : 'dn'}"
>

	<aside class="z-1 flex justify-center vh-100 fixed bg-black-80 top-0 right-0 btm-0 left-0 dg cols-fr1">

    <div class="ma0 pa0 mt2 pa4-ns pa3-m ">

      <!-- learn: consider: svelte.dev/repl/c11942342a554a0e8df4b28d4248e313?version=3.23.1 -->
      <button
        autofocus
        on:click={closeModal}
        class="pointer bn f7 tc dib bg-transparent fr mt5 mt4-l white hover-solitaire transition"
        aria-label="Close this dialog window">

          <svg viewBox="0 0 16 16" class="db h1 w1 dib-ns h2-ns w2-ns mr-auto ml-auto no-select ds1-dark-gray" alt="icon-x">
            <use xlink:href="#icon-x"></use>
          </svg>

        <span class="inherit db db-ns dn-m db-l f7 f6-ns f7-m f5-l overflow-x-hidden white ts1-dark-gray">Close</span>
      </button>

    </div>

    <section class="pointer relative bg-solitaire w5 h4 ml-auto mr-auto">
      <article class="absolute tc system f5 text fw3 top-0 pa2 w5 no-select">
        <div class="bg-white pb4 shadow-0">
          <span class="bg-semichevron tc f4 fw5 db pt2"></span>
          <span class="tc f4 fw5 db pt3 mv0">Grazie</span> per esserti iscritto
        <div>
        <p class="f8 silver mb0">Fare <span>clic</span> per chiudere</p>

      </article>
      <div class="flex flex-auto envelope z-3 absolute top-0"></div>
      <div class="flap absolute top-0 no-select" ></div>
    </section>

  </aside>
  <!-- bg-gold -->

</dialoge>



<style>
  /* fly: codepen.io/inspiredlabs/pen/KKQLegy */
  /* original: codepen.io/lenasta92579651/pen/NWdeYYb */
  /* `.staggered` timing: codepen.io/elska-jo/pen/QKWZLr */
  /* scuzzy: codepen.io/bedekelly/pen/VzyjRP?editors=1100 */
  article {
    animation: onEnter calc(0.5 * var(--duration)) ease-in-out 1s forwards;
    z-index: 2;
  }

  section:hover article {
    /* as we're using the same animation for each instance, call it here so we're not repeating it */
    animation: mouseOver var(--duration) ease-in-out calc(1 * var(--duration)) 1s forwards
  }

  @keyframes onEnter {
    from { transform: translateY(0px) }
    to { transform: translateY(-100px) }
  }

  @keyframes mouseOver {
    from { transform: translateY(-100px) }
    to { transform: translateY(0px) }
  }

  .flap {
    border-top: 4rem solid var(--solitaire);
    border-left:  8rem solid transparent;
    border-right: 8rem solid transparent;
    transform-origin: top;

    /* EXIT */
    animation: openFlap calc(0.33 * var(--duration)) ease-in-out 0s forwards;
  }



  section:hover .flap {
    /* ENTER */
    animation: closeFlap calc(0.7 * var(--duration)) ease-in-out 0s forwards;
  }

  /* debug: speed, just add: `border-color:cyan` */
  @keyframes openFlap {
    0% {
      transform: rotateX(0);
      z-index: 9;
    }
    50% {
      transform: rotateX(0);
      z-index: 9;
    }
    100% {
      transform: rotateX(160deg);
      z-index: 1;
    }
  }
  @keyframes closeFlap {
    0% {
      transform: rotateX(160deg);
      z-index: 1;
    }
    50% {
      transform: rotateX(160deg);
      z-index: 1;
    }
    100% {
      transform: rotateX(0);
      z-index: 9;
    }
  }

  :root{ --duration: 2s }


  /*** GENERIC STYLING ***/

  .envelope {
    /* w, h = `flex-auto` */
    border-top:4rem solid transparent;
    border-right:8rem solid hsla(34,47%,96% );
    border-bottom:4rem solid hsla(34,47%,93% );
    border-left:8rem solid hsla(34,47%,96% );
    /* learn: vanseodesign.com/css/creating-shapes-with-css-borders/ */
  }

  .bg-semichevron {
    /* from: https://codepen.io/inspiredlabs/pen/BgYooY */
    /* Visual treatment (busta Italiana): mercatofilatelico.com/repubblica-italiana/aerogramma-per-gli-u-s-a-f-lli-di-toscana-1951 */
    background: repeating-linear-gradient(
      -45deg, white, white 1.25vw,
              firebrick 1.25vw, firebrick 3.5vw,
              white 3.5vw, white 4.45vw,
              #446a1b 4.45vw, #446a1b 7vw );
              /* olivedrab navy 9.5vw, navy 14vw */
    }

  .shadow-0 { box-shadow: 0px 0.3rem 0.3rem rgba(0,0,0, 0.2) }
</style>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none;">
	<!-- Deprecated (but backwards compatible): developer.mozilla.org/en-US/docs/Web/SVG/Element/use -->
	<defs>
		<g id="icon-x" fill="none" stroke="currentColor" stroke-width="3">
			<!-- icon.now.sh/x -->
			<path d="M1.06 1.06 L14.9 14.9"></path>
			<path d="M14.9 1.06 L1.06 14.9"></path>
		</g>
	</defs>
</svg>

<!-- learn: hack-around will probably stay: github.com/sveltejs/svelte/issues/3105 -->
<svelte:head>
  {#if modalOpen}
    <style> html, body { overflow: hidden!important } </style>
  {/if}
</svelte:head>