import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const actionApi = createSlice({
  name: "action",
  initialState: {},
  reducers: {
    connectingRegister: (data) => {
      axios.post("http://localhost:3003/v1/auth/register", data);
      
    },
  },
});

export const { connectingRegister } =
  actionApi.actions;

export default actionApi.reducer;
