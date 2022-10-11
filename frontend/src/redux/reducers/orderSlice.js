import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    loadOrderList(state, action) {
      const orderList = action.payload;
      state.orders = orderList;
    },

    createOrder(state, action) {
      //  newOrder = {userId, fullName, phoneNumber, totalPrice, cartItems, timeOrder, status}
      const newOrder = action.payload;
      state.orders.push(newOrder);
    },

    cancelOrder(state, action) {
      // if (state.status) return;
      const { timeOrderCancel } = action.payload;
      state.orders = state.orders.filter((order) => order.timeOrder !== timeOrderCancel);
    },

    clearOrder(state) {
      state.orders = [];
    },
  },
});

export const { createOrder, cancelOrder, loadOrderList, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
