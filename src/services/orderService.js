import api from "./api";

const createOrder = (data) => api.post(api.url.orders, data);

const cancelOrder = (id) => api.delete(`${api.url.orders}/${id}`);

const getList = (userId) => api.get(`${api.url.orderList}/${userId}`);

const update = (id, data) => api.put(`${api.url.orders}/${id}`, data);

const orderService = {
  createOrder,
  cancelOrder,
  getList,
  update,
};

export default orderService;
