import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../consts";

export const login = createAsyncThunk("auth/login", async (userData) => {
  const { data } = await axios.post(`${API}/accounts/login/`, userData);
  console.log(data);
  localStorage.setItem("token", data);
  return data;
});
