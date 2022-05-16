<script context="module">

  export const load = async ({ fetch, params, url }) => {
    const id = params.id;
    const res = await fetch(`/${id}.json`);
    const data = await res.json();

    return {
      props: {
        data
      }
    };

  }

  </script>

  <script>
    export let data;
  </script>

  <!-- <pre>{data.title}</pre> -->

  <pre>{JSON.stringify(data, null, 2)}</pre>