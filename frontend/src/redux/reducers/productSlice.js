import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    loadproductList(state, action) {
      const productList = action.payload;
      state.products = productList;
    },

    clearproduct(state) {
      state.products = [];
    },
  },
});

export const { loadproductList, clearproduct } = productSlice.actions;
export default productSlice.reducer;
