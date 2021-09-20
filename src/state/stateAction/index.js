import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  stateLeftBar: true,
  stateLayout: 1,
  stateIconDark: true,
};

export const actionSlice = createSlice({
  name: "user",
  initialState,
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
