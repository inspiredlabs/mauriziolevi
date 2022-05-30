<script>
export let title;
</script>

<nav class="bg-red z-max fixed top0">
	<ul>
		<li><a href="/">{title ? title : undefined }</a></li>
	</ul>

	<!-- {#each endpoints as endpoint, i}
		<li><a href="{endpoint.url}">{endpoint.title}</a></li>
	{/each} -->
</nav>