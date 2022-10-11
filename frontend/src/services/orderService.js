import api from "./api";

const createOrder = (data) => api.post(api.url.orders, data);

const cancelOrder = (id) => api.delete(`${api.url.orders}/${id}`);

const getList = (userId) => api.get(`${api.url.orderList}/${userId}`);

const orderService = {
  createOrder,
  cancelOrder,
  getList,
};

export default orderService;
