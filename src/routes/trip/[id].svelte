<script context="module">
  //export const prerender = true;

  export const load = async ({ params, fetch }) => {
    let id = params.id;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // from: youtube.com/watch?v=6lNrvFSRmwY
    // learn: alt. approach: youtube.com/watch?v=q-MN5eejZ1k
    // learn: launch ext. link: stackoverflow.com/questions/69378392/sveltekit-base-url-for-subdirectory-throws-404
    // note: very different from `/?q="input query"`: stackoverflow.com/questions/66637632/access-url-query-string-in-svelte

    const trip = await response.json();

    return {
      props: {
        trip,
      }
    };
  }

</script>

<script>
  export let trip;
</script>

<pre class="bg-gold">{JSON.stringify(trip, null, 2)}</pre>

<!-- <code>{trip.title}</code><br>
<code>{trip.body}</code> -->