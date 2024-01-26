import { baseApi } from '@/services/baseApi'
import { CreateProfileArgs, ProfileType } from '@/services/profile/profile.types'

import { ResponseType } from '../baseApi/baseApi.types'

const profileService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createProfile: builder.mutation<ResponseType, CreateProfileArgs>({
        invalidatesTags: ['Profile'],
        query: args => ({
          body: args,
          method: 'PUT',
          url: 'profile',
        }),
      }),
      createProfilePhoto: builder.mutation<ResponseType, { image: string }>({
        invalidatesTags: ['Profile'],
        query: args => ({
          body: args.image,
          method: 'PUT',
          url: 'profile/photo',
        }),
      }),
      createProfileStatus: builder.mutation<ResponseType, { status: string }>({
        invalidatesTags: ['Profile'],
        query: args => ({
          body: args.status,
          method: 'PUT',
          url: 'profile/status',
        }),
      }),
      getProfileById: builder.query<ProfileType, { userId: string }>({
        providesTags: ['Profile'],
        query: ({ userId }) => {
          return {
            url: `profile/${userId}`,
          }
        },
      }),
      getProfileStatusById: builder.query<string, { userId: string }>({
        providesTags: ['Profile'],
        query: ({ userId }) => {
          return {
            url: `profile/status/${userId}`,
          }
        },
      }),
    }
  },
})

export const { useGetProfileByIdQuery, useGetProfileStatusByIdQuery } = profileService

/*
useCreateProfileMutation,
useCreateProfilePhotoMutation,
useCreateProfileStatusMutation,
useGetProfileByIdQuery,
useGetProfileStatusByIdQuery,
*/
