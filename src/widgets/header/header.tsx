import { useTranslation } from 'react-i18next'

import logo from '@/assets/image/logoSoc.png'
import { Block } from '@/components/ui'
import { useLogOutMutation } from '@/pages/auth/api/auth.service'

import s from './header.module.scss'

export const Header = () => {
  const [logout, {}] = useLogOutMutation()
  const { t } = useTranslation()

  return (
    <Block as={'header'} className={s.header}>
      <header className={s.header__block}>
        <a className={s.header__btn} href={'/'}>
          <div className={s.header__logo}>
            <img alt={'image-logo'} className={s.header__image} src={logo} />
          </div>
          UpLink
        </a>
        <button className={'header__login'} onClick={() => logout()}>
          {t('LogOut')}
        </button>
      </header>
    </Block>
  )
}
