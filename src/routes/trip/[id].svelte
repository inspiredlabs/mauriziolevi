<script context="module">
  //export const prerender = true;
  // learn: data loading: youtube.com/watch?v=El4B-2fOHCA
  // learn: fetch/promise advantages: youtube.com/watch?v=0jcEluMNy5A
  export const load = async ({ params, fetch }) => {
    let id = params.id;

    // fix: http://localhost:7777/trip/25070 || 25640 || 25660
    const response = await fetch(`http://kel12.therebelwatchtower.net/levi-single/${id}`);
    /* learn: https://kel12.therebelwatchtower.net/levi-single/${id} */
    // from: youtube.com/watch?v=6lNrvFSRmwY
    // learn: alt. approach: youtube.com/watch?v=q-MN5eejZ1k
    // learn: launch ext. link: stackoverflow.com/questions/69378392/sveltekit-base-url-for-subdirectory-throws-404
    // note: very different from `/?q="input query"`: stackoverflow.com/questions/66637632/access-url-query-string-in-svelte

    const trip = await response.json();

    return {
      props: {
        trip,
      }
    };
  }

</script>

<script>
  import Row from '$lib/Row.svelte';
  import Hero from '$lib/Hero/index.svelte';
  import FakeDataTable from '$lib/FakeDataTable.svelte';

  export let trip;
  let title = 'I Viaggi di Maurizio Levi';

  // fix: all the regex is 😅 slow/unweildy!
  // learn: usage`{[at]html sanitiseText(`${title}`)}`
  function sanitiseText(text) {
    return text.replace(/(style[\w\W](\:|\;|\"))/g, '').replace(/(text-[\w\W](\:|\;|\"))/g, "").replace(/(font-family[\w\W](':'|';'|'"'|'>'))/g, "").replace(/(-aw-[\w\W](\:|\;|\"))/g, "").replace(/(Arial|Times New Roman|12pt)/g, '').replace(/(\\r|\\n|\\\"|style=\|'\\\"'|'style=\\\"'|margin\-(left|right)\:|text\-align\:justify\\"|0cm(;|)|1\.1pt\;)/g, '').replace(/(font-family:|style=)/g, '').replace(/(margin-top:0pt;|margin-bottom:0pt;)/g, "").replace(/; font-style: italic/g, '').replace(/-aw-import:ignore/g, '').replace(/(margin[\w\W]|bottom[\w\W]|0pt)/g, '').replace(/(<span ;[\w\W]+span>)/g, "").replace(/<[^/>][^>]*><\/[^>]+>/gim, "");

      // debug: this didn't work! stackoverflow.com/questions/6953470/removing-all-empty-p-tags
      // learn: this worked well! stackoverflow.com/questions/3129738/remove-empty-tags-using-regex
      // learn: chars 1024 = 1kb
  }

  /*
  .replace(/\<body style=\\\\\\\"font\-family\:Times New Roman\; font\-size\:12pt\\\\\\\"\>\<div\>\<p style=\\\\\\\"margin\-top\:0pt\; margin\-bottom\:0pt\; text\-align\:justify\\\\\\\"\>\<span style=\\\\\\\"font\-family\:Arial\\\\\\\"\>/g, '').replace(/\<\/span\>\<\/p\>\<p style=\\\\\\\"margin\-top\:0pt\; margin\-bottom\:0pt\; text\-align\:justify\\\\\\\"\>\<span style=\\\\\\\"font\-family\:Arial\; \-aw\-import\:ignore\\\\\\\">\&\#xa0\;\<\/span\>\<\/p\>\<p style=\\\\\\\"margin\-top\:0pt\; margin\-bottom\:0pt\; text\-align\:justify\\\\\\\"\>\<span style=\\\\\\\"font\-family\:Arial\; \-aw\-import\:ignore\\\\\\\"\>\&\#xa0\;\<\/span\>\<\/p\>\<\/div\>/g, '').replace(/(style\=\\\\\\\"|\\"margin-top:0pt;|margin-bottom:0pt\"||text-align:justify\\\"|-aw-import:ignore\\\"|\\r|\\n)/g, '').replace(/(Arial|Times New Roman;|)/g, '')
  and
  .replace(/p style\=\\\\\\\"margin\-top\:0pt\;\=/g, '').replace(/(style\=\\\\\\\"|margin\-top\:0pt\;\|\\r|\\n|font-family:|Arial|Times New Roman;|font-size:|12pt)/g, '')
  .replace(/\<(p|span|div)/g, '\<p').replace(/\<p style\=\\\\\\/g, '\<p')
  */
</script>



<!-- fix: image={nations.hero.image} -->
<Hero
  image={trip.hero.image}
  payoff={trip.hero.payoff}
  title={trip.hero.title}
  location={trip.hero.location}
  overlayImage={trip.hero.overlayImage}
/>

<Row bg="bg-cocoa">
  <div class="flex items-center f5 f4-ns f3-m f3-l">
    <div class="solitaire w-two-thirds pv3 self-end">
      <div class="w-100 fraunces ttc pb2">
        <!-- learn: titlecase: stackoverflow.com/questions/42755664/capitalize-first-letter-of-each-word-in-js -->
        <!-- fix: <span>{[at]]html transformTitle(`${trip.price.title}`)}</span> -->
        <span>{@html trip.price.title.toLowerCase() }</span>
        <!-- <span>Special Capodanno -Patagonia e Deserto Atacama</span> -->
      </div>
      <div class="tracked-none tracked-ns tracked-m tracked-mega-l system fw4 f5 f5-ns f4-m f4-l ">
        <small class="o-80">Starting from&thinsp;</small>
        <span class="fraunces 0-100">€&thinsp;{trip.price.startingPrice}</span>
        <small class="o-80">pp</small>
        <!-- <span>a partire da € 5.700pp</span> -->
      </div>
    </div>
    <div class="w-third items-center">
      <!-- learn:  `self-start` is cleaner w. `pt5 pb0` -->
      <a href="/{trip.price.cta}" class="fr link pointer br-pill ph3 ba bw2 pv2 bg-black-10 white bg-hover-solitaire-20 transition ts1-dark-gray f5 f5-ns f7-m f5-l" >
        <span>Get a Quote</span>
        <!-- <span>richiedi preventivo</span> -->
      </a>
    </div>
  </div>
</Row>

<!-- debug: `<ImageComponent />` -->
<FakeDataTable />

<!-- debug: `<ExpertGuideComponent />` || `<Row bg="bg-white">test</Row>` -->

<ul class="list pl0 mv0">
  {#each trip.dayByDay as {day, title, descriptionTitle, description, images, services }, i }
    <li class="stripe-custom" id="giorni-{i + 1}">
      <Row bg="bg-transparent">

        <h5 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
          <small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">Giorni &mdash; {day}</small>
          <span class="fraunces">{@html !title ? 'Santiago <span class="fraunces-i">del</span> Cile' : title }</span>
        </h5>

        <h6 class="mv0 pa0 f4 f4-ns f3-m f3-l fw3 golden-brown">{descriptionTitle}</h6>
        <!-- debug: bg-black-10 -->
        <p class="fw2">{@html sanitiseText(`${description}`)}</p>
      </Row>



      <ul class="list pl0">
        {#each images as image, i}

          {#if i == 0}
            <li
              id="image-{i}"
              class="ma0 flex flex-column vh-75 w-100 cover"
              style="background-position: center center; background-image:url('https://viaggilevi.vercel.app/images/king-lewanika-lodge-liuwa-plain-national-park.webp')"
            ></li>
          {:else}
            <li id="image-{i}" class="dn">
              <Row bg="bg-cobalt">{@html !image ? 'https://viaggilevi.vercel.app/images/king-lewanika-lodge-liuwa-plain-national-park.webp' : image }</Row>
            </li>
          {/if}

        {/each}
      </ul>

      <!-- learn: EMPTY ROW -->
      <!-- <Row bg="bg-transparent">
        {#each services as {title, cta, address, images}, i}
          <code>{title}</code>
          <code>{address}</code>
          <code>{cta}</code>
          <code>{images}</code>
        {/each}
      </Row> -->

    </li>
  {/each}

</ul>


<style>



  .bg-hover-solitaire-20:hover {
    --alpha: 0.2;
    background: hsla(34,47%,85%,var(--alpha));
  }

  code {
		display: block;
		padding-bottom: 2.5rem;
	}

  .stripe-custom:nth-child(odd) {
    background-color: var(--solitaire);
    /* learn: custom color scheme: coolors.co/5a5353-a07178-e4ceb4-776274-c8cc92 */
    /* debug: rapidtables.com/convert/color/hsl-to-rgb.html */
    /* learn: 215°, 47%, 85% || 4°, 49%, 86% || 125°, 21%, 81% */

  }
  .stripe-custom:nth-child(even) {
    background-color: var(--linen);
  }

  /* .stripe-light:nth-child(odd) {
    --alpha: 1;
    background-color: var(--solitaire);
  }

  .stripe-light:nth-child(even) {
    --alpha: 1;
    background-color: var(--linen);
  } */

  /* learn: */
  /* .stripe-dark:nth-child(odd) {
    --alpha: 1;
    background-color: var(--cocoa);
  }

  .stripe-dark:nth-child(even) {
    --alpha: 1;
    background-color: var(--golden-brown);
  } */


</style>


