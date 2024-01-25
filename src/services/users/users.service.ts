import { baseApi } from '@/services/baseApi/base-api'
import { GetUsersArgs, UsersResponseType } from '@/services/users/users.types'

const usersService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getUsers: builder.query<UsersResponseType, GetUsersArgs | void>({
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
})

export const { useGetUsersQuery } = usersService
