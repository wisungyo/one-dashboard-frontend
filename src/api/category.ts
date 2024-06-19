import {
  BASE_URL,
  HEADER_AUTH,
  HEADER_AUTH_JSON,
  PREFIX,
} from "@/constant/apis";

export const getCategories = async () => {
  const response = fetch(`${BASE_URL}${PREFIX}/categories`, {
    method: "GET",
    headers: HEADER_AUTH_JSON,
  });
  return response;
};

export const createCategory = async (name: string, description: string) => {
  const response = fetch(`${BASE_URL}${PREFIX}/categories`, {
    method: "POST",
    headers: HEADER_AUTH_JSON,
    body: JSON.stringify({ name, description }),
  });
  return response;
};

export const deleteCategory = async (id: string) => {
  const response = fetch(`${BASE_URL}${PREFIX}/categories/${id}`, {
    method: "DELETE",
    headers: HEADER_AUTH_JSON,
  });
  return response;
};

export const updateCategory = async (
  id: string,
  name: string,
  description: string,
) => {
  const response = fetch(`${BASE_URL}${PREFIX}/categories/${id}`, {
    method: "PUT",
    headers: HEADER_AUTH_JSON,
    body: JSON.stringify({ name, description }),
  });
  return response;
};

export const getCategory = async (id: string) => {
  const response = fetch(`${BASE_URL}${PREFIX}/categories/${id}`, {
    method: "GET",
    headers: HEADER_AUTH_JSON,
  });
  return response;
};
