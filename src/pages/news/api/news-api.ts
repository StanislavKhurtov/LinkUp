import { NewsType } from '@/pages/news/api/newsApi.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const imageApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pexels.com/v1/',
    prepareHeaders: headers => {
      headers.append('Authorization', 'SSFFyPA38wDWfhBtKuXPJx7NJKs5EMazWhGTpQlTRmu8oyQYEcb9yP0A')
    },
  }),
  endpoints: builder => ({
    getImage: builder.query<NewsType, any>({
      query: params => {
        return {
          params: params ?? '',
          url: `curated`,
        }
      },
    }),
  }),
  reducerPath: 'imageApi',
  tagTypes: ['Image'],
})

export const { useGetImageQuery } = imageApi
