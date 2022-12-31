import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProduct = createAsyncThunk("product/fetch", () => {
  return fetch("https://fakestoreapi.com/products").then((result) =>
    result.json()
  );
});
const initialState = {
  products: [],
  status: "READY",
  errMsg: "",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "READY";
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "ERROR";
        state.errMsg = action.error.message || "";
      });
  },
});

export default productSlice.reducer;
