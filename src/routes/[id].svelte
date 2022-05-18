<script context="module">
  export const prerender = true;

  // learn: `load(context)`: `context.params.id` from: youtu.be/Z8r8JTgJyj4?t=484x
  export async function load(url) {
    let id = url.params.id;
    return {
      props: {id}
    }
  }
</script>

<script>
  export let id;
</script>

<pre>{JSON.stringify(id, null, 2)}</pre>