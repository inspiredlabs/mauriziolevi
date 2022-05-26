<script context="module">
  export const prerender = true;
</script>

<script>
  export let posts;
</script>
<ul>
  {#each posts as post}
    <li>
      <a href={post.id}>{post.title}</a>
    </li>
  {/each}
  </ul>
<p class="pa3 measure">This route is served from <code>`src/static/...`</code>, it's fragile because the data can be written in a non-valid way too easily on the local filesystem: <br><code>`https://viaggilevi.vercel.app/data/destinations.json`</code>, can cause the repo to crash the server if comments are added for example.</p>

<pre>{JSON.stringify(posts, null, 2)}</pre>

