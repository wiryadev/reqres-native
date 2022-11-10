import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (payload) => ({
                url: '/login',
                method: 'POST',
                body: payload,
            })
        }),
        register: builder.mutation({
            query: (payload) => ({
                url: '/register',
                method: 'POST',
                body: payload,
            })
        }),
    })
})

export const { useLoginMutation, useRegisterMutation } = authApi