export const get = async (request) => {

  console.log(request);

  const id = request.params.id;

  const res = await fetch(
    `/data/${id}` // from: youtu.be/kBNRraRVlmE?t=284 where: `https://jsonplaceholder.typicode.com/posts/${id}`


  );
  return {
    status: 200,
    body: await res.json()
  };
}
