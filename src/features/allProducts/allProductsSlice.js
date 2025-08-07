import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getShopMockData } from "../../services/shopMockDataService"

const initialState = {
  allProducts: [],
  status: 'idle'
}

export const fetchMockData = createAsyncThunk(
  'allProducts/fetchMockData',
  async (_, thunkAPI) => {
    const response = await getShopMockData();
    return response
  }
)

const options = {
  name: 'allProducts',
  initialState,
  reducers: {
    clearAllProducts: (state) => { state.allProducts = [] },
    addProduct: (state, action) => {
      state.allProducts.push(action.payload);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMockData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMockData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allProducts = [...action.payload];
      })
      .addCase(fetchMockData.rejected, (state) => {
        state.status = 'rejected';
      });
  }
}
const allProductsSlice = createSlice(options);

export const { clearAllProducts, addProduct } = allProductsSlice.actions;
export default allProductsSlice.reducer;