const URL =
  "https://3001-sergiogtz10-jwtauthenti-hcm5q0h69pk.ws-eu42.gitpod.io";


export const Register = (user) => {
  return fetch(`${URL}/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
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
