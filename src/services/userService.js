import api from "./api";

const login = (user) => api.post(api.url.login, user);

const register = (user) => api.post(api.url.register, user);

const update = (id, data) => {
  const formData = new FormData();
  for (const key in data) formData.append(key, data[key]);

  return api.put(`${api.url.users}/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const userService = {
  login,
  register,
  update,
};

export default userService;
