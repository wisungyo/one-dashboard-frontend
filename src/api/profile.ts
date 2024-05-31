import { BASE_URL, HEADER_AUTH, PREFIX } from "@/constant/apis";

export const gerProfile = async () => {
  const response = fetch(`${BASE_URL}${PREFIX}/profile`, {
    method: "GET",
    headers: HEADER_AUTH,
  });
  return response;
};

export const updateProfile = async (data: any) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phoneNumber", data.phoneNumber);
  formData.append("bio", data.bio);
  formData.append("password", data.password);
  // data.avatar && formData.append("file", data.avatar);

  const response = fetch(`${BASE_URL}${PREFIX}/profile`, {
    method: "POST",
    headers: {
      ...HEADER_AUTH,
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });
  return response;
};
