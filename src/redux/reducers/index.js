import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../../services/baseApi";

const reducers = combineReducers({
    api: baseApi.reducer
})

export default reducers