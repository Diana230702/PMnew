import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../consts";

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  const response = await axios.get(`${API}/products`);
  return response.data;
});

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (productData) => {
    const response = await axios.post(`${API}/products/`, productData);
    return response.data;
  }
);

export default createProduct;
