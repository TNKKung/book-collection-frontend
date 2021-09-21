import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config";

export const initialState = {
  user: undefined,
  tokens: undefined,
  error: undefined,
};

export const fetchRegister = createAsyncThunk(
  "user/fetchRegister",
  async (data) => {
    const respone = await axios.post(API_URL + "auth/register", data);
    return respone.data;
  }
);

export const fetchLogin = createAsyncThunk("user/fetchLogin", async (data) => {
  const respone = await axios.post(API_URL + "auth/login", data);
  return respone.data;
});

export const fetchLogout = createAsyncThunk(
  "user/fetchLogout",
  async (refreshToken) => {
    await axios.post(API_URL + "auth/logout", {refreshToken});
  }
);

export const apiSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.tokens = action.payload.tokens;
        state.user = action.payload.user;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        console.log("tamtam");
        state.user = undefined;
        state.tokens = undefined;
      });
  },
});


export default apiSlice.reducer;
