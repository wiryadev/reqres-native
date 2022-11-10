import { createReducer } from "@reduxjs/toolkit"
import { authApi } from "../../../services/authApi"

const initialState = {
    token: null,
}

const AuthReducer = createReducer(initialState, (builder) => {
    builder.addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, action) => ({
            ...state,
            token: action.payload.token,
        })
    )
    builder.addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, action) => ({
            ...state,
            token: action.payload.token,
        })
    )
})

export default AuthReducer