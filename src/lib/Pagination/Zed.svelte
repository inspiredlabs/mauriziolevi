<script>
	export let length;
	export let title;
	export let excerpt;
	export let cta; // fix: req. `/${id}`
	export let image;
	export let starting_price;


	// learn: Helper functions: dev.to/rlc900/using-helper-functions-in-javascript-5eal
	function transformExcerpt(excerpt) {
		let truncate = 148;

		// fix: this regex removes any inline style:
		function sanitiseExcerpt(excerpt) {
			return excerpt.replace(/(\\r|\\n)/g, '')
			.replace(/(\<(i|em|p|style|div)\>|\<\/(i|em|p|style|div)\>)/g, '')
			.replace(/\<p/g, '').replace(/\<\/p\>/g, '').replace(/style\=\\"/g, '')
			.replace(/margin\-(left|right)\:/g, '')
			.replace(/\"\>/g, '')
			.replace(/\<p style=\\\\\\\"/g, '')
			.replace(/\\\"\>/g, '')
			.replace(/text\-align\:justify/g, '')
			.replace(/\\/g, '')
			.replace(/(0cm(;|)|1\.1pt\;)/g, '')
			.replace(/margin\-(left|right)\:0cm(;|)/g, '');
		}

		return sanitiseExcerpt(excerpt).length > truncate ? sanitiseExcerpt(excerpt).substring(0, truncate) + '&hellip;' : sanitiseExcerpt(excerpt);

	}





	let truncate = 29; /* try `Slovacchia` */

	// learn: `map` transformation: freecodecamp.org/news/how-to-capitalize-words-in-javascript/
	function transformTitle(title) {
		return title.length > truncate ? title.toLowerCase().substring(0, truncate) + '&hellip;' : title.toLowerCase();
	}

	// function transformTitle(title) {
	// 	const transformedTitle = title.length > truncate ? title.substring(0, truncate) + '&hellip;' : title;

	// 	const words = transformedTitle.toLowerCase().split(" ");

	// 	return words.map((word) => {
	// 			return word[0].toUpperCase() + word.substring(1);
	// 	}).join(" ");

	// }


	/* learn: PLEASE STOP SENDING HIGH RESOLUTION IMAGES!
	function bandwidth(image) {
		return image.replace(/\b(europa|americhe|africa|oceania)\b~?/g, '');
		// https://viaggilevi.vercel.app/images/
		// http:\/\/kel12image.com\/uploads\/(europa|americhe|africa|oceania)
	}
	*/


	function transformLink(cta) {
		return cta.replace("http:\/\/kel12.therebelwatchtower\.net\/levi-single", "trip")
	}
</script>

<li class="w-100 w-100-ns w-30-m w5-l pb3">

<!-- fix: sveltekit:prefetch -->
<a
	title="{title}"
	href="{cta.replace("http:\/\/kel12.therebelwatchtower\.net\/levi-single", "../trip").replace('destinations', '')}"
	class="link">
	<figure class="ma0 w-100 f6 mh0 ph3 ph3-ns ph1-m ph3-l pb4 pt5 cover shadow-5-hover transition-bs overflow-hidden"
	style='background-position: 50% 0; background-image: linear-gradient( rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.50) 100%), url(https://viaggilevi.vercel.app/images/Tineye.Torres.del.Paine.National.Park.webp)'
	title={title}>

	<!-- debug: {JSON.stringify(image, null, 2)} || <code class="absolute top-0 z-max f8 bg-charcoal white">{image}</code> -->

	<!-- learn: take care of escaped [Object object] strings: stackoverflow.com/questions/25721164/how-to-fix-an-escaped-json-string-javascript#25721227 -->

	<figurecap class="white ts1-dark-gray flex flex-column lh-solid">
		<!-- fix: `<time>` req. `datetime={date}`, groups only... -->
		<!-- learn: vallid datetime -->
		<time class="f5 f6-ns f7-m f6-l fw7 ttu tracked flex-auto">{@html length} giorni</time>

			<!--
				{#if country.length >= truncate }
				{@html country.substring(0, truncate)}
				{:else }
				{@html country}
				{/if}
			-->

			<h5 class="ts fraunces mv0
			ttc
			f1
			f1-ns
			f2-m
			f1-l
			fw5 h5 flex-auto">
				{@html transformTitle(`${title}`)}
			</h5>

			<p class="mv0 pb4 f5 f6-ns f7-m f6-l fw7 ttu tracked h2  flex-auto">Type</p>

			<p class="h3 mv0 pb0 f4 f5-ns f6-m f5-l fw4 flex-auto">
				{@html transformExcerpt(`${excerpt}`)}
			</p>
			<div class="flex items-center h4">
				<h6 class="ts mv0 fraunces fw4 f1 f1-ns f2-m f1-l"><small>€&nbsp;</small><span class="pt0 fw5">{@html starting_price}</span><small class="pt0 f6 f5-l system">&nbsp;p.p</small>
				</h6>
			</div>
		</figurecap>
		<div class="pointer br-pill ba bw2 ph3 pv2 bg-black-10 white hover-bg-black-50 transition-bg mr-auto ml-auto db tc w-70 w-100-ns w-90-m w-90-l ts1-dark-gray f5 f5-ns f7-m f5-l" >Scopri il viaggio</div>
	</figure>
</a>
</li>

<style>


/****** $ BREAKOUT PAGINATOR COMPONENT $ *******/

	/* `overflow-x-hidden` repaints often and `.transition` has poor performance implactions so treat them as a lazy handler. `.transition-bs` or `transition-bg`, are NOT yet integrated into Tachyonshower.
	*/

	/* https://stackoverflow.com/questions/71074/how-to-remove-firefoxs-dotted-outline-on-buttons-as-well-as-links */

	a:focus {
		outline: none;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8); /* Deeper than `.shadow-5-hover` */
	}

	a::-moz-focus-inner {
		border: 0;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8); /*Deeper than `.shadow-5-hover` */
	}

	.transition-bs {
		transition: box-shadow 0.4s ease 0s;
		-webkit-transition: box-shadow 0.4s ease 0s;
	}
	.transition-bg {
		transition: background 0.4s ease 0s;
		-webkit-transition: background 0.4s ease 0s;
	}

	:root{ --tint: 0.5; /* 1 is max */ }
	/* `.mh-100-vh { max-height: 100vh }` convention borrowed: .mw-100 { max-width: 100% } and `.100-vh { height: 100vh }` */

	/* Flexbox should be preferred over conditional-css: `.zed:nth-child(3n) { margin-right: 0 }`: css-tricks.com/almanac/selectors/n/nth-child/ */


/****** ^ BREAKOUT PAGINATOR COMPONENT ^ *******/


/* amend tachyon.shower.css
.truncate {
	display: -webkit-box;
	white-space: nowrap;
/* overflow: hidden;
	text-overflow: ellipsis;
}
*/


</style>