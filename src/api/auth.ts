import { BASE_URL, HEADER_AUTH, PREFIX } from "../constant/apis";

export const apiAuthSignin = async (
  email: string = "",
  password: string = "",
) => {
  const response = fetch(`${BASE_URL}${PREFIX}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response;
};

export const apiAuthSignout = async () => {
  const response = fetch(`${BASE_URL}${PREFIX}/auth/logout`, {
    method: "POST",
    headers: HEADER_AUTH,
  });
  return response;
};
