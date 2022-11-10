import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../../services/baseApi";
import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";

const reducers = combineReducers({
   auth: AuthReducer,
   user: UserReducer,
   api: baseApi.reducer,
})

export default reducers