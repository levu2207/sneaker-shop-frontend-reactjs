import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteList: [],
  },
  reducers: {
    loadFavoriteList(state, action) {
      const favoriteList = action.payload;
      state.favoriteList = favoriteList;
    },

    addFavoriteItem(state, action) {
      //  newFavoriteItem = product
      const newFavoriteItem = action.payload;
      const index = state.favoriteList.findIndex((item) => item.id === newFavoriteItem.id);
      if (index !== -1) return;
      state.favoriteList.push(newFavoriteItem);
    },

    removeFavoriteItem(state, action) {
      const { productId } = action.payload;
      state.favoriteList = state.favoriteList.filter((item) => item.id !== productId);
    },

    clearFavoriteList(state) {
      state.favoriteList = [];
    },
  },
});

export const { loadFavoriteList, addFavoriteItem, clearFavoriteList, removeFavoriteItem } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
