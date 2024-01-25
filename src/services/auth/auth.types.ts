export type Authorization = {
  email: string
  id: number
  login: string
}

export type LoginArgs = {
  captcha?: string
  email: string
  password: string
  rememberMe: boolean
}
