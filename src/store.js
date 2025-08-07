import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from './features/allProducts/allProductsSlice.js'

const options = {
  reducer: {
    allProducts: allProductsReducer,
  }
}

export const store = configureStore(options);