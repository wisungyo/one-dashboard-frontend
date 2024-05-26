import { BASE_URL, HEADER_AUTH, PREFIX } from "../constant/apis";

export const apiSalesSummary = async (start_date: string, end_date: string) => {
  const response = fetch(
    `${BASE_URL}${PREFIX}/dashboard/sales-summary?start_date=${start_date}&end_date=${end_date}`,
    {
      method: "GET",
      headers: HEADER_AUTH,
    },
  );
  return response;
};

export const apiMostSoldProduct = async (
  start_date: string,
  end_date: string,
) => {
  const response = fetch(
    `${BASE_URL}${PREFIX}/dashboard/most-sold-products?start_date=${start_date}&end_date=${end_date}$limit=5`,
    {
      method: "GET",
      headers: HEADER_AUTH,
    },
  );
  return response;
};

export const apiMostSoldCategory = async (
  start_date: string,
  end_date: string,
) => {
  const response = fetch(
    `${BASE_URL}${PREFIX}/dashboard/most-sold-categories?start_date=${start_date}&end_date=${end_date}`,
    {
      method: "GET",
      headers: HEADER_AUTH,
    },
  );
  return response;
};
