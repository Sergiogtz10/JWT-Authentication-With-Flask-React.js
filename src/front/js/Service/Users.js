const URL =
  "https://3001-4geeksacademy-reactflask-waxr5mjs6dx.ws-eu41.gitpod.io";


export const Register = (user) => {
  return fetch(`${URL}/api/signup`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const userLogin = (user) => {
    return fetch(`${URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
