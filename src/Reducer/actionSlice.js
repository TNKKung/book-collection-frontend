import { createSlice } from "@reduxjs/toolkit";

export const actionSlice = createSlice({
  name: "action",
  initialState: {
    stateLeftBar: true,
    stateLayout: 3,
  },
  reducers: {
    stateBar: (state, action) => {
      state.stateLeftBar = action.payload;
    },
    stateLayout: (state, action) => {
      state.stateLayout = action.payload;
    },
  },
});

export const { stateBar, stateLayout } = actionSlice.actions;

export default actionSlice.reducer;
