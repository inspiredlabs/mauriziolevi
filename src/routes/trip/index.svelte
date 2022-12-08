<script>
  import Row from '$lib/Row.svelte';
  import Hero from '$lib/Hero/index.svelte';
  import ImageExpose from '$lib/ImageExpose.svelte';
  import ImageDayPerDay from '$lib/ImageDayPerDay.svelte';
  import FakeDataTable from '$lib/FakeDataTable.svelte';

  export let my_trip_25660;
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

  let trip = my_trip_25660;

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
  <div class="flex items-center f5 f4-ns f3-m f3-l ph2">
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
      <a href="/{trip.price.cta}" class="fr link pointer br-pill ph3 ba bw2 pv2 bg-black-10 white bg-hover-solitaire-20 transition ts1-dark-gray
      f7 f5-ns f7-m f5-l" >
        <span class="db db-ns db-m dn-l">Preventivo</span>
        <span class="dn dn-ns dn-m db-l">Richiedi&nbsp;Preventivo</span>
        <!-- <span class="db db-ns dn-m dn-l">Quote</span>
        <span class="dn dn-ns db-m dn-l">Get&nbsp;Quote</span>
        <span class="dn dn-ns dn-m db-l">Get a&nbsp;Quote</span> -->
      </a>
    </div>
  </div>
</Row>

<ImageExpose
  title={trip.gallery.title}
  images={trip.gallery.images}
  location={trip.gallery.images.location}
/>

<FakeDataTable />

<!-- debug: `<ExpertGuideComponent />` || `<Row bg="bg-white">test</Row>` -->

<ul class="list pl0 mv0 ">
  {#each trip.dayByDay as {day, title, descriptionTitle, description, images, services }, i }
    <li class="stripe-custom" id="giorni-{i + 1}">
      <Row bg="bg-transparent">

        <article class="ph2">

          <h5 class="mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid">
            <small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">Giorni &mdash; {day}</small>
            <span class="fraunces">{@html !title ? 'Santiago <span class="fraunces-i">del</span> Cile' : title }</span>
          </h5>

          <h6 class="mv0 pa0 f4 f4-ns f3-m f3-l fw3 golden-brown">{descriptionTitle}</h6>
          <!-- debug: bg-black-10 -->
          <p class="fw2">{@html sanitiseText(`${description}`)}</p>

        </article>
      </Row>

      <ImageDayPerDay images={images} />





      <!-- learn: EMPTY ROW
      <Row bg="bg-meadow">
        {#each services as {title, cta, address, images}, i}
          <code>{title}</code>
          <code>{address}</code>
          <code>{cta}</code>
          <code>{images}</code>
        {/each}
      </Row>-->

    </li>
  {/each}

</ul>


<style>
  /* debug: code { display: block; padding-bottom: 2.5rem } */

  .bg-hover-solitaire-20:hover {
    --alpha: 0.2;
    background: hsla(34,47%,85%,var(--alpha));
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

</style>