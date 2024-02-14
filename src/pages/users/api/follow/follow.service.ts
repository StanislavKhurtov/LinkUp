import { baseApi } from '@/app/services/baseApi'
import { ResponseType } from '@/app/services/baseApi/baseApi.types'

const followService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      follow: builder.mutation<ResponseType, { userId: number }>({
        invalidatesTags: ['Follow'],
        query: ({ userId }) => ({
          method: 'POST',
          url: `follow/${userId}`,
        }),
      }),
      getFollowUnfollow: builder.query<boolean, { userId: number }>({
        providesTags: ['Follow'],
        query: ({ userId }) => {
          return {
            url: `follow/${userId}`,
          }
        },
      }),
      unfollow: builder.mutation<ResponseType, { userId: number }>({
        invalidatesTags: ['Follow'],
        query: ({ userId }) => ({
          method: 'DELETE',
          url: `follow/${userId}`,
        }),
      }),
    }
  },
})

export const { useFollowMutation, useGetFollowUnfollowQuery, useUnfollowMutation } = followService
