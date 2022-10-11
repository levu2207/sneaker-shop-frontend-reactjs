import api from "./api";

const add = (data) => api.post(api.url.details, data);

const detailService = {
  add,
};

export default detailService;
