import { baseApi } from '@/app/services/baseApi'
import {
  DialogType,
  MessageArgs,
  MessageFriendType,
  SendMessageToFriendArgs,
  UserType,
} from '@/pages/dialogs/api/dialog.types'

const dialogService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      //получить все диалоги
      getDialogs: builder.query<DialogType[], void>({
        providesTags: ['Dialogs'],
        query: () => {
          return {
            url: `dialogs`,
          }
        },
      }),
      //ваше сообщение просмотрено
      getMessageViewed: builder.query<any, { messageId: number }>({
        providesTags: ['Dialogs'],
        query: ({ messageId }) => {
          return {
            url: `dialogs/messages/${messageId}/viewed`,
          }
        },
      }),
      //получить список сообщений с вашим другом
      getMessagesFriend: builder.query<MessageFriendType, MessageArgs>({
        providesTags: ['Dialogs'],
        query: params => {
          return {
            params: params ?? {},
            url: `dialogs/${params.userId}/messages`,
          }
        },
      }),
      //отправить сообщение своему другу
      sendMessageFriend: builder.mutation<MessageFriendType, SendMessageToFriendArgs>({
        invalidatesTags: ['Dialogs'],
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `dialogs/${args.userId}/messages`,
          }
        },
      }),
      //начните общение, обновите собеседника, чтобы он был сверху
      updateDialogsUsers: builder.mutation<UserType, { userId: number }>({
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

export const {
  useGetDialogsQuery,
  useGetMessageViewedQuery,
  useGetMessagesFriendQuery,
  useSendMessageFriendMutation,
  useUpdateDialogsUsersMutation,
} = dialogService
