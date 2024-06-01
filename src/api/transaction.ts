import { BASE_URL, HEADER_AUTH, PREFIX } from "@/constant/apis";

export const getTransactions = async (data: any) => {
  const queryParams = [
    data.category_id && `sort=${data.category_id}`,
    data.product_id && `product_id=${data.product_id}`,
    data.code && `code=${data.code}`,
    data.type && `type=${data.type}`,
    data.total_item && `total_item=${data.total_item}`,
    data.total_quantity && `total_quantity=${data.total_quantity}`,
    data.total_price && `total_price=${data.total_price}`,
    data.customer_name && `customer_name=${data.customer_name}`,
    data.customer_phone && `customer_phone=${data.customer_phone}`,
    data.customer_address && `customer_address=${data.customer_address}`,
    data.note && `note=${data.note}`,
    data.start_date && `start_date=${data.start_date}`,
    data.end_date && `end_date=${data.end_date}`,
    data.sort && `sort=${data.sort}`,
    data.sort_by && `sort_by=${data.sort_by}`,
    data.limit && `limit=${data.limit}`,
    data.page && `page=${data.page}`,
  ]
    .filter(Boolean)
    .join("&");
  const url = `${BASE_URL}${PREFIX}/transactions${queryParams ? `?${queryParams}` : ""}`;

  const response = fetch(url, {
    method: "GET",
    headers: HEADER_AUTH,
  });
  return response;
};

export const getTransactionDetail = async (id: string) => {
  const url = `${BASE_URL}${PREFIX}/transactions/${id}`;

  const response = fetch(url, {
    method: "GET",
    headers: HEADER_AUTH,
  });
  return response;
};

export const createTransaction = async (data: any) => {
  const url = `${BASE_URL}${PREFIX}/transactions`;

  const response = fetch(url, {
    method: "POST",
    headers: {
      ...HEADER_AUTH,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};
