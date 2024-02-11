export type ProfileType = {
  aboutMe: string
  contacts: ProfileContacts
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: ProfilePhotos
  userId: number
}
export type ProfileContacts = {
  facebook: null | string
  github: null | string
  instagram: null | string
  mainLink: null | string
  twitter: null | string
  vk: null | string
  website: null | string
  youtube: null | string
}
export type ProfilePhotos = {
  large: string
  small: string
}

export type CreateProfileArgs = {
  contacts: ContactType
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  userId: number
}

type ContactType = {
  facebook: string
  github: string
  instagram: string
  mainLink: string
  twitter: string
  vk: string
  website: string
  youtube: string
}
