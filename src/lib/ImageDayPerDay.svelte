<script>
	import Row from '$lib/Row.svelte';
	export let images;
</script>

<style>
	/* fix: Grid is incomplete, see: `__layout.svelte` */
	.col-repeat-3-1fr { grid-template-columns: repeat(3, 1fr) }
</style>

<div
style="background-position: center center; background-image:url('{!images[0] ? 'https://viaggilevi.vercel.app/images/king-lewanika-lodge-liuwa-plain-national-park.webp' : images }')"
class="cover vh-75"
>
	<Row>
		<div class="dg row-h-25vh col-repeat-3-1fr">
			<!--   -->
			<div class="dg grid-items-start grid-align-start pa4">
				<figure
					class="cover w-75 h-75 ma0"
					style="background-position: center center; background-image:url('{!images[1] ? 'https://viaggilevi.vercel.app/images/unsplash.com.photos.loRvsBv0Xek.webp' : images }')"
				></figure>
			</div>
			<div class="dg grid-items-center grid-align-start pa3">
				<figure
					class="cover w-75 h-75 ma0"
					style="background-position: center center; background-image:url('{!images[2] ? 'https://viaggilevi.vercel.app/images/unsplash.com.photos.loRvsBv0Xek.webp' : images }')"
				></figure>
			</div>
			<div class="dg grid-items-end grid-align-start pa4">
				<figure
					class="cover w-75 h-75 ma0"
					style="background-position: center center; background-image:url('{!images[1] ? 'https://viaggilevi.vercel.app/images/unsplash.com.photos.loRvsBv0Xek.webp' : images }')"
				></figure>
			</div>

			<div class="dg grid-items-start grid-align-center pa3">
				<figure
					class="cover w-75 h-75 ma0"
					style="background-position: center center; background-image:url('{!images[1] ? 'https://viaggilevi.vercel.app/images/unsplash.com.photos.loRvsBv0Xek.webp' : images }')"
				></figure>
			</div>
			<div class="dg grid-items-center grid-align-center pa3">
				<figure
					class="cover w-75 h-75 ma0"
					style="background-position: center center; background-image:url('{!images[1] ? 'https://viaggilevi.vercel.app/images/unsplash.com.photos.loRvsBv0Xek.webp' : images }')"
				></figure>
			</div>
			<div class="dg grid-items-end grid-align-center pa3">
				<figure
					class="cover w-75 h-75 ma0"
					style="background-position: center center; background-image:url('{!images[1] ? 'https://viaggilevi.vercel.app/images/unsplash.com.photos.loRvsBv0Xek.webp' : images }')"
				></figure>
			</div>

			<div class="dg grid-items-start grid-align-end pa4">
				<figure
					class="cover w-75 h-75 ma0"
					style="background-position: center center; background-image:url('{!images[1] ? 'https://viaggilevi.vercel.app/images/unsplash.com.photos.loRvsBv0Xek.webp' : images }')"
				></figure>
			</div>
			<div class="dg grid-items-center grid-align-end pa3">
				<figure
					class="cover w-75 h-75 ma0"
					style="background-position: center center; background-image:url('{!images[1] ? 'https://viaggilevi.vercel.app/images/unsplash.com.photos.loRvsBv0Xek.webp' : images }')"
				></figure>
			</div>
			<div class="dg grid-items-end grid-align-end pa4">
				<figure
					class="cover w-75 h-75 ma0"
					style="background-position: center center; background-image:url('{!images[1] ? 'https://viaggilevi.vercel.app/images/unsplash.com.photos.loRvsBv0Xek.webp' : images }')"
				></figure>
			</div>
		</div>
	</Row>
</div>