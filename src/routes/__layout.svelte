<script context="module">
export const prerender = true;
import '../app.css' // <- just import your css: stackoverflow.com/questions/63637662/add-js-css-files-to-svelte-component
</script>

<!-- <nav>
	<ul>
		<li><a href="/">Home</a></li>
	</ul>
</nav> -->

<main class="system y-mandatory overflow-x-hidden w-100 h-100 ma0 pa0 backface-hidden charcoal fixed ">
	<slot />
</main>

<!-- <style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	nav {
		border-bottom: 1px solid rgba(255, 62, 0, 0.1);
		font-weight: 300;
		padding: 0 1em;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}
	li {
		display: block;
		float: left;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style> -->