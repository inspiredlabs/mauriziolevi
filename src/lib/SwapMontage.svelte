<script>
  export let images;
  const imagesBaseUrl = `${import.meta.env.VITE_BASEURL}/images/`; // usage: `{imagesBaseUrl}`
  let alt = 'Levi, quasi architecto beatae vitae dicta sunt explicabo.'; // `alt={alt}`
  import viewport from '$lib/useViewportAction';
  let visible;
  </script>
  <figure
  use:viewport
  on:enterViewport={() => visible = true }
  on:exitViewport={() => visible = false }
  class="w-100 swap { visible ? 'visible' : '' }
  cf relative top-0 mr-auto ml-auto"
  style="left:calc( -0.5 * var(--distance));height:60vh">
  <!-- fix: `-portrait` || `-landscape` -->
  <!-- learn: serve images correctly -->
  <!-- note: pass `background-image` with an empty image string -->
  {#each images as image}
    <img
      alt={image}
      title={image}
      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      class="shadow-5 mr-auto ml-auto"
      style="background-image: url('https://viaggilevi.vercel.app/images/king-lewanika-lodge-liuwa-plain-national-park.webp')"
    />
    <!-- {image} -->
    {/each}
  </figure>
  <style>
    /* learn: animated: codepen.io/gametroll/pen/rNMggoO */
    /* fix: breakout this component w. natural motion: css-tricks.com/making-css-animations-feel-natural */
  /****** $ fix:BREAKOUT MONTAGE $ *******/

  .swap {
    /* learn: padding: t r b l; */
    padding:
    calc(0.1 * var(--height)) /* top */
    calc(0.333 * var(--width)) /* right */
    0  /* bottom */
    calc(0.333 * var(--width)); /* left */
  }
  .swap img {
    width: var(--width);
    height: var(--height);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .swap img:nth-child(1) {
  /* background: firebrick; */
    z-index:2;
    position: absolute;
    transform:
      translateX(0)
      translateY(-1rem)
      rotate(calc(-1 * var(--jaunt)))
      scale(1);
    transition:
      transform var(--speed) cubic-bezier(0,1.69,1,1.41)
      0s;
  }
  .swap img:nth-child(2) {
  /* background: forestgreen; */
    z-index:1;
    position: absolute;
    transform:
      translateX(var(--distance))
      translateY(1rem)
      rotate(var(--jaunt))
      scale(0.8);
    transition:
      transform var(--speed) cubic-bezier(0,1.69,1,1.41) 0s;
  }
  /*
  `.swap`, is NOT integrated into Tachyonshower.
  This req. `overflow-hidden` to prevent scrollbar
  */
  .swap {
    will-change: transform;
    /* debug: background: gainsboro; */
  }
  .swap.visible img:nth-child(1) {
    transform:
      translateX(var(--distance))
      translateY(10px)
      rotate(var(--jaunt))
      scale(0.8);
  }
  .swap.visible img:nth-child(2) {
    transform:
      translateX(calc(0.4 * var(--distance)))
      translateY(-10px)
      rotate(calc(-1 * var(--jaunt)))
      scale(1);
      /* translateX(calc(-0.125 * var(--distance))) */
  }



:root{
  --height: 48vh;
  --width: calc(0.5 * var(--height));
  --distance: calc(0.25 * var(--height));
  --speed: 1.666s;
  --jaunt: 2deg;
  /* negative var(--value): stackoverflow.com/a/48639938 */
}

@media screen and (min-width: 30em) {
  :root{ --height: 32vh }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
  :root{ --height: 42vh }
}

@media screen and (min-width: 60em) {
  :root{ --height: 36vh }
}
</style>