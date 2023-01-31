import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/products.slice";
import cartReducer from "../slices/cart.slice";

export function makeStore() {
  return configureStore({
    reducer: {
      products: productsReducer,
      cart: cartReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
