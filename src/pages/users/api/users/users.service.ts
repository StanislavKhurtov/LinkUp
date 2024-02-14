import { baseApi } from '@/app/services/baseApi'
import { GetUsersArgs, UsersResponseType } from '@/pages/users/api/users/users.types'

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
