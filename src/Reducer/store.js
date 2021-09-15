import { configureStore } from "@reduxjs/toolkit";
import actionSlice from "./actionSlice";
import actionApi from "./actionApi";
export default configureStore({
    reducer :{
        storeState : actionSlice,
        storeApi : actionApi
    }
})