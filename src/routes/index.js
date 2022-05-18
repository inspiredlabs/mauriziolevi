export async function get() {

  /* learn: how to use fetch with method & headers:
  const request = await fetch(`https://viaggilevi.vercel.app/data/destinations.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  */

  const request = await fetch(`https://viaggilevi.vercel.app/data/destinations.json`);

  const posts = await request.json();

  if (posts) {
    return {
      body: { posts }
    }
  }

  return {
    status: 404
  };

}