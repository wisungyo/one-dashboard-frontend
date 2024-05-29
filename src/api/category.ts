import { BASE_URL, HEADER_AUTH, PREFIX } from "@/constant/apis";

export const getCategories = async () => {
  const response = fetch(`${BASE_URL}${PREFIX}/categories`, {
    method: "GET",
    headers: HEADER_AUTH,
  });
  return response;
};
