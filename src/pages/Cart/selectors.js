import { createSelector } from "@reduxjs/toolkit";

const cartItemsSelector = (state) => state.cart.cartItems;

// count nnumber of product in cart
export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);

//  calculate total of cart
export const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.salePrice * item.quantity, 0)
);
