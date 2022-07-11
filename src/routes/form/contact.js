export const post = async ({ request }) => {
  const body = await request.formData();
  const nome = body.get("nome");
  const email = body.get("email");

  return {
    body: {
			nome,
      email,
    },
  };
};

/* learn: youtube.com/watch?v=jpKbyiQsj3k
export const post = (request) => {
	console.log(request)
	return {
		body: {
			message: "ok"
		}
	}
};
*/