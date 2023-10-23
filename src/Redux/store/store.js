import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice";
import ProductSlice from "../Slices/ProductSlice";

const store = configureStore({
  reducer: {
    products: ProductSlice,
    register: AuthSlice,
  },
});
export default store;
