import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStateSyncMiddleware, initMessageListener } from "redux-state-sync";
import thunk from "redux-thunk";
import authReducer from "./reducers/authSlice";
import cartReducer from "./reducers/cartSlice";

const authPersistConfig = { key: "auth", storage };
const cartPersistConfig = { key: "cart", storage };

const syncConfig = {
  blacklist: ["persist/PERSIST"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  cart: persistReducer(cartPersistConfig, cartReducer),
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, createStateSyncMiddleware(syncConfig)],
});
initMessageListener(store);
// initStateWithPrevTab(store);

export default store;
export const persistor = persistStore(store);
