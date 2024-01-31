import { useEffect } from 'react'

export const ToggleThemes = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme)
    }
  }, [])
  const toggleTheme = () => {
    const body = document.body
    const currentTheme = body.getAttribute('data-theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'

    body.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return <button onClick={toggleTheme}>Сменить тему</button>
}
