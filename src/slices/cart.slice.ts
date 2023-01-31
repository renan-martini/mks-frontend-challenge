import { IProductCart } from "@/interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  total: 0,
  totalAmount: 0,
} as { cartProducts: IProductCart[]; total: number; totalAmount: number };

export const getCart = createAsyncThunk(
  "cart/getAllProductsFromCart",
  async (thunkApi) => {
    const string = localStorage.getItem("@mks-front-end_cart");
    if (string != null) {
      return JSON.parse(string);
    }
    return [];
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, data) => {
      const repeated = state.cartProducts.findIndex(
        (product) => product.id == data.payload.id
      );
      if (repeated === -1) {
        state.cartProducts.push({ ...data.payload, amount: 1 });
      } else {
        state.cartProducts[repeated].amount++;
      }
      state.total += parseFloat(data.payload.price);
      state.totalAmount++;
      localStorage.setItem(
        "@mks-front-end_cart",
        JSON.stringify(state.cartProducts)
      );
    },
    addAmount: (state, data) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id == data.payload
      );
      state.cartProducts[productIndex].amount++;
      state.totalAmount++;
      state.total += parseFloat(state.cartProducts[productIndex].price);
      localStorage.setItem(
        "@mks-front-end_cart",
        JSON.stringify(state.cartProducts)
      );
    },
    reduceAmount: (state, data) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id == data.payload
      );
      state.total -= parseFloat(state.cartProducts[productIndex].price);
      state.totalAmount--;
      if (state.cartProducts[productIndex].amount > 1) {
        state.cartProducts[productIndex].amount--;
      } else {
        state.cartProducts.splice(productIndex, 1);
      }
      localStorage.setItem(
        "@mks-front-end_cart",
        JSON.stringify(state.cartProducts)
      );
    },
    removeProduct: (state, data) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id == data.payload
      );
      state.total -=
        parseFloat(state.cartProducts[productIndex].price) *
        state.cartProducts[productIndex].amount;
      state.totalAmount -= state.cartProducts[productIndex].amount;
      state.cartProducts.splice(productIndex, 1);
      localStorage.setItem(
        "@mks-front-end_cart",
        JSON.stringify(state.cartProducts)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      console.log("action.payload");
      state.cartProducts.push(...action.payload);
      state.total = action.payload.reduce(
        (acc: number, elem: IProductCart) =>
          acc + parseFloat(elem.price) * elem.amount,
        0
      );
      state.totalAmount = action.payload.reduce(
        (acc: number, elem: IProductCart) => acc + elem.amount,
        0
      );
    });
  },
});

export default cartSlice.reducer;
export const { addCart, addAmount, reduceAmount, removeProduct } =
  cartSlice.actions;
