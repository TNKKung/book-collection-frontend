import { createSlice } from "@reduxjs/toolkit";

export const actionSlice = createSlice({
  name: "action",
  initialState: {
    stateLeftBar: true,
    stateLayout: 1,
    stateIconDark: true,
  },
  reducers: {
    toggleStateBar: (state) => {
      state.stateLeftBar = !state.stateLeftBar;
    },
    toggleStateLayout: (state) => {
      state.stateLayout = ++state.stateLayout % 2;
    },
    toggleStateIconDark: (state) => {
      state.stateIconDark = !state.stateIconDark;
    },
  },
});

export const { toggleStateBar, toggleStateLayout, toggleStateIconDark } =
  actionSlice.actions;

export default actionSlice.reducer;
