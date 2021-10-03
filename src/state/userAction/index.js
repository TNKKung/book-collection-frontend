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
    await axios.post(API_URL + "auth/logout", { refreshToken });
  }
);

export const fetchUser = createAsyncThunk("user/fetchUser", async (data) => {
  const respone = await axios.get(API_URL + "users/", {
    headers: {
      Authorization: `${data}`,
    },
  });
  return respone.data;
});

export const fetchUpdateUser = createAsyncThunk(
  "user/fetchUpdateUser",
  async (data) => {
    const respone = await axios.patch(API_URL + "users/", data);
    return respone.data;
  }
);

export const fetchCreateBook = createAsyncThunk(
  "book/createbook",
  async (data) => {
    const respone = await axios.post(API_URL + "books/createbook", data);
    return respone.data;
  }
);

export const apiSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.tokens = action.payload.tokens;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        console.log(action.payload);
        state.tokens = action.payload.tokens;
        state.user = action.payload.user;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.user = undefined;
        state.tokens = undefined;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.tokens = action.payload.tokens;
      })
      .addCase(fetchUpdateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(fetchCreateBook.fulfilled, (state, action) => {
        console.log(action.payload);
      });
  },
});

export default apiSlice.reducer;
