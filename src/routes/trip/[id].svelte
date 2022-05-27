<script context="module">
  //export const prerender = true;

  export const load = async ({ params, fetch }) => {
    let id = params.id;
    const response = await fetch(`http://kel12.therebelwatchtower.net/levi-nations/${id}`); // from: youtube.com/watch?v=6lNrvFSRmwY

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

<pre>{JSON.stringify(trip, null, 2)}</pre>

<!-- <code>{trip.title}</code><br>
<code>{trip.body}</code> -->