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
