
<!-- Note: `"start": "sirv...",` is SPA mode, thus consumes `/#hash` differently
"scripts": {
  "start": "sirv public --single",
  "dev": "svelte-kit dev",
  "build": "svelte-kit build",
  "preview": "svelte-kit preview",
  "lint": "prettier --check . && eslint --ignore-path .gitignore .",
  "format": "prettier --write ."
},

-->

<script context="module">
  //export const prerender = true;

  // learn: `load(context)`: `context.params.id` from: youtu.be/Z8r8JTgJyj4?t=484x
  export async function load(url) {
    let slug = url.params.slug;
    return {
      props: {slug}
    }
  }
</script>

<script>
  export let slug;
  // fix: `/#url` fails: bjornlu.com/blog/simple-svelte-routing-with-reactive-urls
</script>

<pre>{JSON.stringify(slug, null, 2)}</pre>