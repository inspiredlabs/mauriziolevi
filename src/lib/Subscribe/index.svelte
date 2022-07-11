<script>
import Row from '$lib/Row.svelte';
import Form from '$lib/Subscribe/Form.svelte';
</script>

<!-- fix: filter: blur(0px) alt to: `"free" "royalty free" "photos"` -->
<!-- fix:https://viaggilevi.vercel.app/images/160x60-horizon.webp  -->
<figure
	style="box-shadow: inset 0 0 42px 42px var(--linen);background: url('./images/160x60-horizon.webp') center center;"
	class="cover ma0 pa0 ">
	<!-- learn: `bg-solitaire` || `hsl(34,47%,85%)` && filter: blur(1px) -->

	<!-- <Row bg="bg-transparent"> -->
	<div class="mr-auto ml-auto w-100 w-100-ns w-100-m w-40-l">
		<!-- fix: header component -->
		<header class="ph2 ph2-ns ph2-m ph0-l tc">
			<h5 class="mv0 pv4 f3 f3-ns f2-m f2-l fw2 lh-solid">
				<small class="golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0">Newsletter</small>
				<!-- Sottoscrivere -->
				<!-- <span class="fraunces">Il nostro</span><span class="fraunces-i">&nbsp;notiziario</span> -->
				<span class="fraunces">Resta<span class="fraunces-i">&nbsp;aggiornato</span>
				e ricevi<br class="dib dib-ns dib-m dn-l"> le&nbsp;nostre comunicazioni sui&nbsp;viaggi,<br class="dib dib-ns dib-m dn-l"> sulle promozioni e sulle numerose&nbsp;novità.</span>
			</h5>
		</header>

		<div
		class="ph2 ph2-ns ph2-m ph0-l ml-auto mr-auto w-100 w-100-ns w-two-thirds-m w-100-l"
		id="sottoscrivere">
			<Form />
		</div>
	</div>
	<!-- </Row> -->
</figure>