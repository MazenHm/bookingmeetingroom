import axios from "axios";

export const baseUrl = "http://localhost:8080/api";
export const Api = axios.create({
  baseURL: baseUrl,
});
