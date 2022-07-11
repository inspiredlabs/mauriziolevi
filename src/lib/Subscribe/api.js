const usernames = ["ealush", "codechips"];

export const doesUserExist = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usernames.includes(`${username}`.toLowerCase()) ? reject() : resolve();
    }, 33);
  });
};
