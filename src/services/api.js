import axios from "axios";
import store from "../redux/store";

const url = {
  baseUrl: process.env.REACT_APP_API_BASE_URL,
  login: "/users/login",
  register: "/users/register",
  products: "/products",
  users: "/users",
  orders: "/orders",
  details: "/orders/details",
  orderList: "/orders/users",
};

const instance = axios.create({
  baseURL: url.baseUrl,
  header: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use((request) => {
  const state = store.getState();

  if (state.auth.token) {
    request.headers.token = `${state.auth.token}`;
  }

  return request;
});

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response.data,
  (error) => error.response.data
);

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
};

export default api;
