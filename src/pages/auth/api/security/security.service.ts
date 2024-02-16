import { baseApi } from '@/app/services/baseApi'

const securityService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDSecurity: builder.query<{ url: string }, void>({
        providesTags: ['Security'],
        query: () => {
          return {
            url: 'security/get-captcha-url',
          }
        },
      }),
    }
  },
})

const {} = securityService
