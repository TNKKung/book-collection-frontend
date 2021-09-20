import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config";

export const initialState = {
  user: undefined,
  tokens: undefined,
  error: undefined,
};

export const fetchRegister = createAsyncThunk("user/fetchRegister", async (data) => {
  const respone = await axios.post(API_URL + "auth/register", data);
  return respone.data;
});

export const fetchLogin = createAsyncThunk("user/fetchLogin",async (data) => {
  const respone = await axios.post(API_URL + "auth/login", data);
  return respone.data;
});

export const apiSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // apiResgister: (state, action) => {
    //   fetchRegister(action.payload);
    // },
    // apiLogin: (state, action) => {
    //   const a = fetchLogin(action.payload);
    //   console.log(a.data);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        console.log(action.payload)
        state.tokens = action.payload.tokens
        state.user = action.payload.user
      });
  },
});
export const { apiResgister, apiLogin } = apiSlice.actions;

export default apiSlice.reducer;
