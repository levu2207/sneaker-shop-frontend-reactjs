import api from "./api";

const login = (user) => api.post(api.url.login, user);

const register = (user) => api.post(api.url.register, user);

const userService = {
  login,
  register,
};

export default userService;
