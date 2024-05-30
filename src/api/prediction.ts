import { BASE_URL, HEADER_AUTH, PREFIX } from "@/constant/apis";

export const getPredictions = async (data: any) => {
  const queryParams = [
    data.year && `year=${data.year}`,
    data.month && `month=${data.month}`,
    data.page && `page=${data.page}`,
    data.limit && `limit=${data.limit}`,
  ]
    .filter(Boolean)
    .join("&");
  const url = `${BASE_URL}${PREFIX}/predictions${queryParams ? `?${queryParams}` : ""}`;

  const response = fetch(url, {
    method: "GET",
    headers: HEADER_AUTH,
  });
  return response;
};
