import { GetUsersArgs, ResponseType } from '@/services/users/users.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    credentials: 'include',
  }),
  endpoints: builder => {
    return {
      getUsers: builder.query<ResponseType, GetUsersArgs | void>({
        providesTags: ['Users'],
        query: params => {
          return {
            params: params ?? {},
            url: 'users',
          }
        },
      }),
    }
  },
  reducerPath: 'baseApi',
  tagTypes: ['Users', 'Profile'],
})

export const { useGetUsersQuery } = baseApi
