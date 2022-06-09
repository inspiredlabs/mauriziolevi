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
/>

<div class="bg-gold">

  <code>{trip.price.title}</code>
  <code>{trip.price.starting_price}</code>
  <code>{trip.price.cta}</code>

  <code>{trip.gallery.title}</code>

  {#each trip.gallery.images as {image, location}, i}
    <code>{image}</code>
    <code>{location}</code>
  {/each}


  <code>{trip.departures.title}</code>
  <code>{trip.departures.length}</code>

  <!-- fix: `{trip.departures['nr-pax']}` breaks convention with what we normally use. -->
  <!-- learn: while `underscore_name` is acceptable, in future Python, Java/Kotlin & Javascript projects could benefit from OOTB Swift compatability -->
  <!-- learn: EG: `camelCaseKeyNames` in this Swift5 tutorial: youtu.be/xVj5xEEwTEk?t=414 -->
  <!-- note: we should maximise compatability now as it may hurt when we need to build the string in Apple's Swift: softwareengineering.stackexchange.com/questions/319698/is-it-bad-practice-to-use-hyphens-in-json-keys/422030#422030 -->
  <!-- note: this is obviously better than having to use a decoder/encoder: javatpoint.com/swiftyjson -->

  <code class="bg-red">{trip.departures['nr-pax']}</code>
  <code class="bg-red">{trip.departures['nr-pax-max']}</code>
  <code>{@html sanitiseText(`${trip.departures.text}`)}</code>


  <!-- learn: `trip.departures.dates.leave` and `return` is more acceptable -->
  <!-- learn: ...especially considering we have the overhead of including structured data -->
<!-- fix: `return` is a reserved keyword in JS -->
<!-- note: suggest replacing occurrences of `departure` with: `trip.departures.dates.inbound` and `return` with: `trip.departures.dates.outbound`, these are semantically accurate too. -->
<p>
  {#each trip.departures.dates as date, i}
    <code>{date.departure} with: `dates.inbound`</code>
    <code>{date.return}  with: `dates.outbound`</code>
  {/each}
</p>


<p>
  {#each trip.tour_leaders.experts as { name, title, image, social_links }, i }
    <code>{name.replace(' ', ', ')}</code>
    <code>{title}</code>
    <code>{image}</code>

    <!-- fix: `social_links`, probably more robust as `platforms` email, twitter, instagram, linkedIn, whatsApp -->
    {#each social_links as platform, i }
      <code>{platform}</code>
    {/each}

    <!-- fix: key contains a problematic `space` character -->
    <code class="bg-white">{trip.tour_leaders.experts[i]['next departure']}, note: this key contains a problematic `space` character: `trip.tour_leaders.experts[i][<span class="red">'next&nbsp;departure'</span>]`</code>
  {/each}
</p>

{#each trip.day_by_day as {day, title, description_title, description}, i }

  <code>{day}</code>

  <code>{title}</code>

  <code>{description_title}</code>

  <code class="bg-green">{@html sanitiseText(`${description}`)}</code>

{/each}





  <!-- <code>{trip.departures.dates.departure ? trip.departures.dates.departure : '' }</code> -->
  <!-- <code>{trip.departures.dates.return ? trip.departures.dates.return : '' }</code> -->



  <!-- tour_leaders.experts -->
</div>

<style>
	code {
		display: block;
		padding-bottom: 2.5rem;
	}
</style>

<!-- <code>{trip.title}</code><br>
<code>{trip.body}</code> -->