import { useTranslation } from 'react-i18next'

import { Block, Button } from '@/components/ui'
import { useMeQuery } from '@/pages/auth/api'

import s from './footer.module.scss'

export const Footer = () => {
  const { data } = useMeQuery()
  const isAuthenticated = data?.resultCode === 1
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const handleClickEN = () => {
    i18n.changeLanguage('en')
  }
  const handleClickRU = () => {
    i18n.changeLanguage('ru')
  }

  return (
    <>
      {isAuthenticated && (
        <Block as={'footer'} className={s.footer}>
          <div className={s.footer__block}>
            <div className={s.footer__text}>©2024 Stanislav Khurtoff</div>
            <div className={s.footer__lang}>
              <Button
                className={currentLanguage === 'en' ? s.active : ''}
                onClick={handleClickEN}
                type={'button'}
                variant={'primary'}
              >
                English
              </Button>
              <Button
                className={currentLanguage === 'ru' ? s.active : ''}
                onClick={handleClickRU}
                type={'button'}
                variant={'primary'}
              >
                Русский
              </Button>
            </div>
          </div>
        </Block>
      )}
    </>
  )
}
