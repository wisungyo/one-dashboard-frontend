export const PREFIX = "/api/v1";
export const BASE_URL = "http://localhost:8080";
export const HEADER_AUTH = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};
