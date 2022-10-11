import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      isLoggedIn: false,
      token: null,
      userInfo: {},
    },
    register: {
      isFetching: false,
      error: false,
      success: false,
    },
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.userInfo = {};
    },

    updateUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },

    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.success = true;
      state.register.error = false;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.success = false;
      state.register.error = true;
    },
  },
});

export const { login, logout, updateUserInfo, registerStart, registerSuccess, registerFailed } =
  authSlice.actions;
export default authSlice.reducer;
