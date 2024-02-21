import { baseApi } from '@/app/services/baseApi'
import {
  DialogType,
  MessageArgs,
  MessageFriendType,
  UserType,
} from '@/pages/dialogs/api/dialog.types'

const dialogService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDialogs: builder.query<DialogType[], void>({
        providesTags: ['Dialogs'],
        query: () => {
          return {
            url: `dialogs`,
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
      updateDialogsById: builder.mutation<UserType, { userId: number }>({
        invalidatesTags: ['Dialogs'],
        query: args => {
          return {
            body: args,
            method: 'PUT',
            url: `dialogs/${args.userId}`,
          }
        },
      }),
    }
  },
})

export const { useGetDialogsQuery, useGetMessagesFriendQuery } = dialogService
