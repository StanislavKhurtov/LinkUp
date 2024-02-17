import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui'

export const ToggleThemes = () => {
  const [currentTheme, setCurrentTheme] = useState('')
  const { t } = useTranslation()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      setCurrentTheme(savedTheme) // Установка текущей темы из localStorage
      document.body.setAttribute('data-theme', savedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const body = document.body
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'

    setCurrentTheme(newTheme) // Обновление текущей темы
    body.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <Button onClick={toggleTheme} variant={'link'}>
      {currentTheme === 'light' ? t('Light') : t('Dark')}
    </Button>
  )
}
