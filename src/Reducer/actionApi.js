import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../config";
import axios from "axios";
export const actionApi = createSlice({
  name: "action",
  initialState: {},
  reducers: {
    connectingRegister: (state, action) => {
      return axios.post(API_URL + "v1/auth/register", action.payload);
    },
  },
});

export const { connectingRegister } = actionApi.actions;

export default actionApi.reducer;
