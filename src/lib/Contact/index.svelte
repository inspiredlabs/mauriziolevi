<script>
import Row from '$lib/Row.svelte';
import items from '$lib/items.js';
let baseUrl = `${import.meta.env.VITE_BASEURL}/`;
// fix: href="{`${baseUrl}${slug}`}"

// note: consider: `let mung = myValue.escape(myValue); not: "&#109;&#97;&#105;&#108;&#116;&#111;&colon;&#105;&#110;&#102;&#111;&commat;&#118;&#105;&#97;&#103;&#103;&#105;&#108;&#101;&#118;&#105;&period;&#99;&#111;&#109;"` from: onlinestringtools.com/html-encode-string
// learn: tutorialspoint.com/javascript-escape
</script>

<Row bg="bg-solitaire">
<!-- Double check: contrast-ratio.com/#%23966417-on-%23faf3eb -->

<div class="highlight db black-70 f2 f4-ns f3-m f2-l lh-copy pb6 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto pv5">
	<section class="fl w-100 cf">

		<div class="fl w-100 w-third-ns w-third-m w-two-thirds-l lh-copy measure ">
			<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l ttu mv0 pb2">destinazioni</small>
			<hr class="inherit b--golden-brown" />
			<ul class="list pl0 fraunces pr1 pr4-ns pr4-m pr1-l">
				{#each items as { title, slug }}
					<li class="truncate">
						<a href="{`#${slug}`}" class="link inherit o-80 fw4 hover-fw6 hover-o-100 hover-o-100 ">{title}</a>
						<!-- title={title} -->
					</li>
				{/each}
		</ul>
	</div>

	<div class="fl w-100 w-third-ns w-third-m w-third-l lh-copy measure">
			<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l ttu mv0 pb2">contattaci</small>
	<hr class="inherit b--golden-brown" />
		<ul class="list pl0 fraunces pr1 pr4-ns pr4-m pr1-l mb0-l">
<li class="truncate"><small class="golden-brown o-50  db tracked-none tracked-ns tracked-m tracked-mega-l ttu pt3 pb1 system f6 f5-ns f4-m f3-l">chiamaci</small><small><a href="tel:+390234934528" class="link inherit o-80 fw4 bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100 ">+39&nbsp;02&nbsp;34934528</a></small></li>
			<li class="truncate"><small class="golden-brown o-50  db tracked-none tracked-ns tracked-m tracked-mega-l ttu pt3 pb1 system f6 f5-ns f4-m f3-l">scrivici</small><small><a href="&#109;&#97;&#105;&#108;&#116;&#111;&colon;&#105;&#110;&#102;&#111;&commat;&#118;&#105;&#97;&#103;&#103;&#105;&#108;&#101;&#118;&#105;&period;&#99;&#111;&#109;" class="link inherit o-80 fw4 bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100 " style="letter-spacing:-0.0125em">&#105;&#110;&#102;&#111;&commat;&#118;&#105;&#97;&#103;&#103;&#105;&#108;&#101;&#118;&#105;&period;&#99;&#111;&#109;</a></small></li>
<!-- <li class="truncate">
<span class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l ttu pt3 pb1 system f6 f5-ns f4-m f3-l">visitare</span>
<small>
<a href="https://google.it/maps/place/Via+Francesco+Londonio,+4,+20154+Milano" class="link inherit o-80 fw4 bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100 ">Via Londonio 4<br>20154 Milano</a>
</small>
</li> -->
</ul>
	</div>
	<div class="fl w-100 w-third-ns w-third-m w-third-l ph0 lh-copy measure ">
		<small class="golden-brown o-50  db tracked-none tracked-ns tracked-m tracked-mega-l fw5 ttu mv0 pb2 dn-l">&nbsp;<!-- visitare --></small>
<hr class="inherit b--golden-brown dn-l" />
<address class="fs-normal">
<ul class="list pl0 fraunces pr1 pr4-ns pr4-m pr1-l mt0-l">
<li class="truncate">
<small class="golden-brown o-50  db tracked-none tracked-ns tracked-m tracked-mega-l ttu pt3 pb1 system f6 f5-ns f4-m f3-l">trovaci</small>
<small>
<a href="https://google.it/maps/place/Via+Francesco+Londonio,+4,+20154+Milano" class="link inherit o-80 fw4 bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100 ">Via Londonio 4<br>20154 Milano</a>
</small>
</li>
</ul>
</address>

</div>
<!-- <div class="fl w-100 w-third-ns w-third-m w-50-l ph0 lh-copy measure ">
			<small class="golden-brown o-50  db tracked-none tracked-ns tracked-m tracked-mega-l fw5 ttu mv0 pb2">seguici</small>
	<hr class="inherit b--golden-brown" />
		<p class="flex justify-between">
			<a class="link o-80 glow transition inherit dib h2 w2 pr1 pr0-l" href="https://www.facebook.com/" title="Facebook">
				<svg viewbox="0 0 16 16" class="no-select">
						<use xlink:href="#fb"></use>
					</svg>
			</a>
			<a class="link o-80 glow transition inherit dib h2 w2 pr1 pr0-l" href="https://www.twitter.com/" title="Twitter">
				<svg viewbox="0 0 16 16" class="no-select">
						<use xlink:href="#twitter"></use>
					</svg>
			</a>

			<a class="link o-80 glow transition inherit dib h2 w2 pr1 pr0-l" href="https://www.youtube.com/" title="YouTube">
				<svg viewbox="0 0 16 16" class="no-select">
						<use xlink:href="#yt"></use>
					</svg>
			</a>
			<a class="link o-80 glow transition inherit dib h2 w2 pr1 pr0-l" href="https://www.instagram.com/" title="Instagram">
				<svg viewbox="0 0 16 16" class="no-select">
						<use xlink:href="#instagram"></use>
					</svg>
			</a>
			<a class="link o-80 glow transition inherit dib h2 w2 pr1 pr0-l" href="https://www.pintrest.com/" title="Pintrest">
				<svg viewbox="0 0 16 16" class="no-select">
						<use xlink:href="#pintrest"></use>
					</svg>
			</a>
			</p>
	</div> -->
</section>
</div>

</Row>

<style>
.active {
	opacity: 0.9;
	font-variation-settings: 'wght' 600;
}

/*
`.hover-b--transparent`, is NOT integrated into Tachyonshower.
*/
/* debug: basic only below... */
.hover-b--inherit {
  transition: all 0.4s ease 0s!important;
}
.hover-b--inherit:hover {
  border-color: inherit;
  /* usage: `bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100 transition` */
}
</style>