import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cartProducts',
  initialState: [],
  reducers: {
    clearCartProducts: () => [],
    addCart: (state, action) => { state.push(action.payload) },
    deleteCartProduct: (state, action) => state.filter((product) => product.name !== action.payload)
  }
});

export const { clearCartProducts, addCart, deleteCartProduct } = cartSlice.actions;
export default cartSlice.reducer;