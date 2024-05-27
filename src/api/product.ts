import { BASE_URL, HEADER_AUTH, PREFIX } from "@/constant/apis";

export const getProduct = async (data: any) => {
  const queryParams = [
    data.category_id && `category_id=${data.category_id}`,
    data.code && `code=${data.code}`,
    data.name && `name=${data.name}`,
    data.description && `description=${data.description}`,
    data.price && `price=${data.price}`,
    data.quantity && `quantity=${data.quantity}`,
    data.sort && `sort=${data.sort}`,
    data.sort_by && `sort_by=${data.sort_by}`,
    data.limit && `limit=${data.limit}`,
    data.page && `page=${data.page}`,
  ]
    .filter(Boolean)
    .join("&");
  const url = `${BASE_URL}${PREFIX}/products${queryParams ? `?${queryParams}` : ""}`;

  const response = fetch(url, {
    method: "GET",
    headers: HEADER_AUTH,
  });
  return response;
};
