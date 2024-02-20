export type DialogType = {
  hasNewMessages: boolean
  id: number
  lastDialogActivityDate: string
  lastUserActivityDate: string
  newMessagesCount: number
  photos: DialogPhotos
  userName: string
}

export type DialogPhotos = {
  large: string
  small: string
}

export type UserType = {
  aboutMe: string
  contacts: UserContacts
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: UserPhotos
  userId: number
}
export type UserContacts = {
  facebook: string
  github: string
  instagram: string
  mainLink?: any
  twitter: string
  vk: string
  website?: any
  youtube?: any
}
export type UserPhotos = {
  large: string
  small: string
}

export type MessageArgs = {
  count?: number
  page?: number
  userId: number
}

export type MessageFriendType = {
  error?: null | string
  items: MessageFriendTypeItems[]
  totalCount: number
}
export type MessageFriendTypeItems = {
  addedAt: string
  body: string
  id: string
  recipientId: number
  senderId: number
  senderName: string
  translatedBody?: any | string
  viewed: boolean
}
