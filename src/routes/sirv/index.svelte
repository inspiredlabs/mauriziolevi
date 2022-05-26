<script context="module">
  export const prerender = true;
</script>

<script>

</script>

<pre>`"start": "sirv...",` is SPA mode, thus consumes `/#hash` differently</pre>

<pre>
"scripts": &#123; <br>
  "start": "sirv public --single",<br>
  "dev": "svelte-kit dev",<br>
  "build": "svelte-kit build",<br>
  "preview": "svelte-kit preview",<br>
  "lint": "prettier --check . && eslint --ignore-path .gitignore .",<br>
  "format": "prettier --write ."<br>
  &#125;,<br>
</pre>