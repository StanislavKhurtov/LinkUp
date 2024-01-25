export type ResponseType<T = {}> = {
  data: T
  messages: string[]
  resultCode: number
}
