import noImage from '../assets/image/noImage.jpg'
export const randomUserPhoto = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    const photo = data.results[0].picture.large

    return photo
  } catch (error) {
    console.error('Error fetching random user photo:', error)

    return noImage
  }
}
