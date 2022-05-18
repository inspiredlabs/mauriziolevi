async function get() {
  const request = await fetch(`https://viaggilevi.vercel.app/data/destinations.json`);
  const posts = await request.json();
  if (posts) {
    return {
      body: { posts }
    };
  }
  return {
    status: 404
  };
}
export { get };
