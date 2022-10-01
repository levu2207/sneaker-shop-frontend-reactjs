import axios from "axios";

const url = {
  baseUrl: "http://localhost:8080/api",
  login: "/users/login",
  register: "/users/register",
  products: "/products",
};

const instance = axios.create({
  baseURL: url.baseUrl,
  header: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use((request) => request);

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
