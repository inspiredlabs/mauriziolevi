<script>
	export const length; // {length ? length : undefined }
	export const title; // {title ? title : undefined }
	export const excerpt;
	export const cta;
	export const image;
	export const starting_price;


	import { paginate, LightPaginationNav } from 'svelte-paginate';
  let items = suggestedTrips;
  let currentPage = 1;
  let pageSize = 3;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>



<ul class="items bg-red">
	{#each paginatedItems as  {cta, excerpt, image, length, starting_price, title}, i}
		<li class="item">
			<code>{length}<br></code>
			<code>{title}<br></code>
			<code>{excerpt}<br></code>
			<code>{cta}<br></code>
			<code>{image}<br></code>
			<code>{starting_price}<br></code>
		</li>
	{/each}
</ul>

<LightPaginationNav
	totalItems="{items.length}"
	pageSize="{pageSize}"
	currentPage="{currentPage}"
	limit="{1}"
	showStepOptions="{true}"
	on:setPage="{(e) => currentPage = e.detail.page}"
/>