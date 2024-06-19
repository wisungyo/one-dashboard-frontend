export const PREFIX = "/api/v1";
export const BASE_URL = "http://localhost:8080";
export const HEADER_AUTH = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};
export const HEADER_AUTH_JSON = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Content-Type": "application/json",
};
