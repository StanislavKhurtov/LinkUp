export type NewsType = {
  next_page: string
  page: number
  per_page: number
  photos: Photo[]
  total_results: number
}
export type PhotosSrc = {
  landscape: string
  large: string
  large2x: string
  medium: string
  original: string
  portrait: string
  small: string
  tiny: string
}
export type Photo = {
  alt: string
  avg_color: string
  height: number
  id: number
  liked: boolean
  photographer: string
  photographer_id: number
  photographer_url: string
  src: PhotosSrc
  url: string
  width: number
}
