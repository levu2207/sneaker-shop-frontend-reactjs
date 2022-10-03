import api from "./api";

const list = () => api.get(api.url.products);

const getPaging = (page, limit, price, brand, search) => {
  const queryString = `page=${page}&limit=${limit}&price=${price}&brand=${brand}&search=${search}`;
  return api.get(`${api.url.products}?${queryString}`);
};

const get = (id) => api.get(`${api.url.products}/${id}`);

const add = (data) => api.post(api.url.products, data);

const update = (id, data) => api.put(`${api.url.products}/${id}`, data);

const remove = (id) => api.delete(`${api.url.products}/${id}`);

const productService = {
  list,
  getPaging,
  get,
  add,
  update,
  delete: remove,
};

export default productService;
