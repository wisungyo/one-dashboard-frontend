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

export const getProductById = async (id: string) => {
  const url = `${BASE_URL}${PREFIX}/products/${id}`;
  const response = fetch(url, {
    method: "GET",
    headers: HEADER_AUTH,
  });
  return response;
};

export const createProduct = async (data: any) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("code", data.code);
  formData.append("price", data.price);
  formData.append("image", data.image);
  formData.append("quantity", data.quantity);
  formData.append("description", data.description);
  formData.append("category_id", data.category_id);

  const url = `${BASE_URL}${PREFIX}/products`;
  const response = fetch(url, {
    method: "POST",
    headers: HEADER_AUTH,
    body: formData,
  });
  return response;
};

export const updateProduct = async (id: string, data: any) => {
  const prepData = {
    category_id: data.category_id,
    code: data.code,
    name: data.name,
    description: data.description,
    price: data.price,
    quantity: data.quantity,
    image: data.image,
  };

  const url = `${BASE_URL}${PREFIX}/products/${id}`;
  const response = fetch(url, {
    method: "PUT",
    headers: HEADER_AUTH,
    body: JSON.stringify(prepData),
  });
  return response;
};

export const deleteProduct = async (id: string) => {
  const url = `${BASE_URL}${PREFIX}/products/${id}`;
  const response = fetch(url, {
    method: "DELETE",
    headers: HEADER_AUTH,
  });
  return response;
};
