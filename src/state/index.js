import { configureStore } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import actionSlice from "./stateAction";
import userSlice from "./userAction";

const persistedConfig = {
  state: ["user"],
  namespace: "user",
};

export default configureStore({
  reducer: {
    storeState: actionSlice,
    userApi: userSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(save(persistedConfig)),
  preloadedState: load(persistedConfig),
});
