<script context="module">
  export const prerender = true;
</script>


<script>
import { paginate, LightPaginationNav } from 'svelte-paginate';
export let spotLight // viaggi in evidenza

let items = spotLight;
let currentPage = 1;
let pageSize = 3;
$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<ul class="items">
  {#each paginatedItems as item}
    <li class="item">
      {item}
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

<div class="measure-wide">
  <ul>
    {#each spotLight as featuredDestination, i}
      <li>{i}:
        {@html featuredDestination.titolo_viaggio.replace(/\\r/g, '').replace(/\\n/g, '').replace(/\\"/g, '') }
        <p>
          {@html featuredDestination.testo_per_sito.replace(/\\r/g, '').replace(/\\n/g, '').replace(/\\"/g, '') }
        </p>
      </li>
    {/each}
  </ul>
</div>