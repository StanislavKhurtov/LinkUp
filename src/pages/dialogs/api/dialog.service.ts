import { baseApi } from '@/app/services/baseApi'
import { ResponseType } from '@/app/services/baseApi/baseApi.types'
import {
  DialogType,
  MessageArgs,
  MessageFriendType,
  UserType,
} from '@/pages/dialogs/api/dialog.types'
import { CreateProfileArgs } from '@/pages/profile/api/profile.types'

const dialogService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createProfile: builder.mutation<ResponseType, CreateProfileArgs>({
        invalidatesTags: ['Dialogs'],
        query: args => ({
          body: args,
          method: 'PUT',
          url: 'profile',
        }),
      }),
      createProfilePhoto: builder.mutation<ResponseType, { image: string }>({
        invalidatesTags: ['Dialogs'],
        query: args => ({
          body: args.image,
          method: 'PUT',
          url: 'profile/photo',
        }),
      }),
      createProfileStatus: builder.mutation<ResponseType, { status: string }>({
        invalidatesTags: ['Dialogs'],
        query: args => ({
          body: args.status,
          method: 'PUT',
          url: 'profile/status',
        }),
      }),
      getDialogs: builder.query<DialogType[], void>({
        providesTags: ['Dialogs'],
        query: () => {
          return {
            url: `dialogs`,
          }
        },
      }),
      getDialogsById: builder.query<UserType, { userId: number }>({
        providesTags: ['Dialogs'],
        query: ({ userId }) => {
          return {
            url: `dialogs/${userId}`,
          }
        },
      }),
      getMessagesFriend: builder.query<MessageFriendType, MessageArgs>({
        providesTags: ['Dialogs'],
        query: params => {
          return {
            params: params ?? {},
            url: `dialogs/${params.userId}/messages`,
          }
        },
      }),
    }
  },
})

export const { useGetDialogsByIdQuery, useGetDialogsQuery, useGetMessagesFriendQuery } =
  dialogService
