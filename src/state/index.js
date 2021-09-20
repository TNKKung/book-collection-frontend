import { configureStore } from "@reduxjs/toolkit";
import actionSlice from "./stateAction";
import userSlice from "./userAction";
export default configureStore({
  reducer: {
    storeState: actionSlice,
    userApi: userSlice,
  },
});
