import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/users?per_page=10',
        method: 'GET',
      })
    }),
  })
})

export const { useGetUsersQuery } = userApi