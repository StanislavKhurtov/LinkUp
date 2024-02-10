import { ChatApi } from '@/pages/chat/api/chat-api'
import { ChatMessageType } from '@/pages/chat/ui'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  initialState: {
    messages: [] as ChatMessageType[],
  },
  name: 'chat',
  reducers: {
    messagesReceived: (state, action: PayloadAction<{ messages: ChatMessageType[] }>) => {
      state.messages = [...state.messages, ...action.payload.messages]
    },
  },
})

export const chatActions = slice.actions
export const chatReducer = slice.reducer

export const startMessagesListening = createAsyncThunk(
  'chat/startMessagesListening',
  async (_, { dispatch }) => {
    ChatApi.start()
    ChatApi.subscribe(messages => {
      dispatch(chatActions.messagesReceived({ messages }))
    })
  }
)
export const stopMessagesListening = createAsyncThunk(
  'chat/stopMessagesListening',
  async (_, { dispatch }) => {
    ChatApi.unsubscribe(messages => {
      dispatch(chatActions.messagesReceived({ messages }))
    })
    ChatApi.stop()
  }
)

export const sendMessages = createAsyncThunk('chat/sendMessages', async (message: string) => {
  ChatApi.sendMessage(message)
})
