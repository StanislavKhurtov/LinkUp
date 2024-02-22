export const VKButton = () => {
  const login = () => {
    const CLIENT_ID = '51862943'
    const REDIRECT_URI = 'https://localhost:3000/auth'
    const url = `https://oauth.vk.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&display=popup&scope=email&response_type=code&v=5.131`

    window.location.assign(url)
  }

  return (
    <div>
      <button onClick={login}>VK</button>
    </div>
  )
}
