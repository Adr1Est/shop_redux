import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from './features/allProducts/allProductsSlice.js'
import cartReducer from './features/cartProducts/cartSlice.js'

const options = {
  reducer: {
    allProducts: allProductsReducer,
    cartProducts: cartReducer,
  }
}

export const store = configureStore(options);