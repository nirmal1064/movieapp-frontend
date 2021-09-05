import axios from "axios";
import { getToken } from "../redux/localStorageAPI";

const API = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-type": "application/json" }
});

API.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
});

export default API;
