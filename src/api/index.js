import axios from "axios";
import { getToken } from "../redux/localStorageAPI";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://dkfmovies.herokuapp.com";

const API = axios.create({
  baseURL,
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
