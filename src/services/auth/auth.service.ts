import { baseApi } from '@/services/baseApi'
import { ResponseType } from '@/services/baseApi/baseApi.types'

import { Authorization, LoginArgs } from './auth.types'

const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      logOut: builder.mutation<ResponseType, void>({
        invalidatesTags: ['Auth'],
        query: () => {
          return {
            method: 'DELETE',
            url: 'auth/login',
          }
        },
      }),
      login: builder.mutation<ResponseType<{ userId: number }>, LoginArgs>({
        invalidatesTags: ['Auth'],
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: 'auth/login',
          }
        },
      }),
      me: builder.query<ResponseType<Authorization>, void>({
        providesTags: ['Auth'],
        query: () => {
          return {
            url: 'auth/me',
          }
        },
      }),
    }
  },
})

export const { useLogOutMutation } = authService
