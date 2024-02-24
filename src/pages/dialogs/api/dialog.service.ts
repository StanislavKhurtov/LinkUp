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
      //удалить только для себя, а не для твоего собеседника
      deleteDialogsUsers: builder.mutation<void, { messageId: string }>({
        invalidatesTags: ['Dialogs'],
        query: ({ messageId }) => {
          return {
            method: 'DELETE',
            url: `dialogs/messages/${messageId}`,
          }
        },
      }),
      //получить все диалоги
      getDialogs: builder.query<DialogType[], void>({
        providesTags: ['Dialogs'],
        query: () => {
          return {
            url: `dialogs`,
          }
        },
      }),
      //ваше сообщение просмотрено ( сделать занчек галочка )
      getMessageViewed: builder.query<boolean, { messageId: string }>({
        providesTags: ['Dialogs'],
        query: ({ messageId }) => {
          return {
            url: `dialogs/messages/${messageId}/viewed`,
          }
        },
      }),
      //возвращать сообщения, новейшие, чем дата
      getMessages: builder.query<any, { date: string; userId: number }>({
        providesTags: ['Dialogs'],
        query: params => {
          return {
            params: params ?? {},
            url: `dialogs/${params.userId}/messages/new?newerThen=${params.date}`,
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
      //список новых сообщений
      getNewMessagesCount: builder.query<any, void>({
        query: () => 'dialogs/messages/new/count',
      }),
      //восстановить форму сообщения удалена и спам
      restoreDialogsUsers: builder.mutation<any, { messageId: string }>({
        invalidatesTags: ['Dialogs'],
        query: ({ messageId }) => {
          return {
            method: 'PUT',
            url: `dialogs/messages/${messageId}/restore`,
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
  useDeleteDialogsUsersMutation,
  useGetDialogsQuery,
  useGetMessageViewedQuery,
  useGetMessagesFriendQuery,
  useGetMessagesQuery,
  useGetNewMessagesCountQuery,
  useRestoreDialogsUsersMutation,
  useSendMessageFriendMutation,
  useUpdateDialogsUsersMutation,
} = dialogService
