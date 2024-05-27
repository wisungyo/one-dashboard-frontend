import { BASE_URL, HEADER_AUTH, PREFIX } from "@/constant/apis";

export const gerProfile = async () => {
  const response = fetch(`${BASE_URL}${PREFIX}/profile`, {
    method: "GET",
    headers: HEADER_AUTH,
  });
  return response;
};

export const updateProfile = async (data: any) => {
  const params = {
    name: data.name,
    email: data.email,
    phone_number: data.phone_number,
    bio: data.bio,
    password: data.password,
    avatar: data.avatar,
  };

  const response = fetch(`${BASE_URL}${PREFIX}/profile`, {
    method: "POST",
    headers: {
      ...HEADER_AUTH,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  return response;
};
