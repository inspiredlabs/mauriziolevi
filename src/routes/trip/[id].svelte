<script context="module">
  //export const prerender = true;

  export const load = async ({ params, fetch }) => {
    let id = params.id;

    // fix: http://localhost:7777/trip/25070 || 25640 || 25660
    const response = await fetch(`http://kel12.therebelwatchtower.net/levi-single/${id}`);
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

<div class="bg-gold">
  <code>{trip.price.title}</code>
  <code>{trip.price.startingPrice}</code>
  <code>{trip.price.cta}</code>
</div>

<div class="bg-meadow">
  <code>{trip.gallery.title}</code>

  {#each trip.gallery.images as {image, location}, i}
    <code>{image}</code>
    <code>{location}</code>
  {/each}
</div>

<div class="bg-caribbean">
  <code>{trip.departures.title}</code>
  <code>{trip.departures.length}</code>
  <code>{trip.departures.nrPax}</code>
  <code>{trip.departures.nrPaxMax}</code>
  <code>{@html sanitiseText(`${trip.departures.text}`)}</code>

  <!-- learn: `trip.departures.dates.leave` and `return` is more acceptable -->
  <!-- learn: ...especially considering we have the overhead of including structured data -->
  <!-- fix: `return` is a reserved keyword in JS -->
  <!-- note: suggest replacing occurrences of `departure` with: `trip.departures.dates.inbound` and `return` with: `trip.departures.dates.outbound`, these are semantically accurate too. -->
  {#each trip.departures.dates as date, i}
    <code>{date.departure}</code>
    <code>{date.return}</code>
  {/each}
</div>

<div class="bg-raspberry">
{#each trip.tourLeaders.experts as { name, title, image, socialLinks, nextDeparture }, i }
  <code>{name.replace(' ', ', ')}</code>
  <code>{title}</code>
  <code>{image}</code>

  <!-- fix: `social_links`, probably more robust as `platforms` email, twitter, instagram, linkedIn, whatsApp -->
  {#each socialLinks as platform, i }
    <code>{platform}</code>
  {/each}

  <!-- fix: key contains a problematic `space` character -->
  <code>{nextDeparture}</code>

{/each}
</div>

<div class="bg-mexicano">
{#each trip.dayByDay as {day, title, descriptionTitle, description, images, services }, i }

  <code>{day}</code>

  <code>{title}</code>

  <code>{descriptionTitle}</code>

  <code class="bg-black-10">{@html sanitiseText(`${description}`)}</code>

  {#each images as image, i}
    <code>{image}</code>
  {/each}



  {#each services as {title, cta, address, images}, i}
    <code>{title}</code>
    <code>{address}</code>
    <code>{cta}</code>
    <code>{images}</code>
  {/each}

{/each}
</div>

<style>
	code {
		display: block;
		padding-bottom: 2.5rem;
	}
</style>