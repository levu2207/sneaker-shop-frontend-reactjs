import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.hideMiniCart = false;
    },

    addToCart(state, action) {
      // newItem = {id, product, salePrice, sizeSelect quantity}
      const newItem = action.payload;
      const index = state.cartItems.findIndex(
        (item) => item.id === newItem.id && item.sizeSelect === newItem.sizeSelect
      );
      if (index !== -1) {
        // increase quantity
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        // add to cart
        state.cartItems.push(newItem);
      }
    },

    setQuantityItem(state, action) {
      const { id, sizeSelect, quantity } = action.payload;
      // check if product is available in cart
      const index = state.cartItems.findIndex(
        (item) => item.id === id && item.sizeSelect === sizeSelect
      );
      if (index !== -1) {
        state.cartItems[index].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      const { idRemove, sizeRemove } = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        if (item.id !== idRemove) return item;
        else {
          if (item.sizeSelect === sizeRemove) return null;
          else return item;
        }
      });
    },
  },
});

export const { showMiniCart, hideMiniCart, addToCart, setQuantityItem, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
