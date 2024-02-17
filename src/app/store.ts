import { baseApi } from '@/app/services/baseApi'
import { chatReducer } from '@/pages/chat/model/chatSlice'
import { imageApi } from '@/pages/news/api/news-api'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, imageApi.middleware),
  reducer: {
    baseApi: baseApi.reducer,
    chat: chatReducer,
    imageApi: imageApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)
