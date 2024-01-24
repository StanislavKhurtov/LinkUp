export type GetUsersArgs = {
  count?: number
  friend?: boolean
  page?: number
  term?: string
}

export type ResponseType = {
  error: string
  items: UserType[]
  totalCount: number
}
export type PhotosType = {
  large: null | string
  small: null | string
}

export type UserType = {
  followed: boolean
  id: number
  name: string
  photos: PhotosType
  status: null | string
  uniqueUrlName: null | string
}
