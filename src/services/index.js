import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const BaseService = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://reqres.in/api',
        reducerPath: 'reqres',
        endpoints: () => ({})
    })
})