import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Product from './Product';

interface ProductState {
  products: Product[];
}

const initialState : ProductState = {
  products:[],
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct:(state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },

    addProductList:(state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },

    removeProduct:(state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },

    editProduct:(state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex (product => product.id === action.payload.id);
      if (index !== -1)
      {
        state.products[index] = action.payload;
      }
    },
  }
});

export const {addProduct, addProductList, removeProduct, editProduct} = productSlice.actions;
export default productSlice.reducer;