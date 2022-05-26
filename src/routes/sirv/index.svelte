<script context="module">
  export const prerender = true;
</script>

<script>

</script>

<!-- learn: `sirv...` syntax: cloudhadoop.com/svelte-change-port/ -->
<pre>`"start": "sirv...",` is SPA mode, thus consumes `/#hash` differently</pre>

<pre>
<!-- learn: `&#123; ... &#125;` htmlsymbol.com/html-entities/ -->
"scripts": &#123; <br>
  "start": "sirv public --single",<br>
  "dev": "svelte-kit dev",<br>
  "build": "svelte-kit build",<br>
  "preview": "svelte-kit preview",<br>
  "lint": "prettier --check . && eslint --ignore-path .gitignore .",<br>
  "format": "prettier --write ."<br>
  &#125;,<br>
</pre>