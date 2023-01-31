import { IProduct, IReducer } from "@/interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/getAllProducts",
  async (thunkApi) => {
    const response = await fetch(
      "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
    );

    const { products } = await response.json();

    const timer = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products);
        }, 0);
      });
    return await timer();
  }
);

const initialState = {
  products: [],
  loading: true,
} as IReducer;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action.payload);

      state.loading = false;
      state.products.push(...(action?.payload as IProduct[]));
    });

    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export default productsSlice.reducer;
