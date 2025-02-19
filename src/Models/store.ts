import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductSlice';
 
const store = configureStore({
  reducer: {
      products: productReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export default store;
