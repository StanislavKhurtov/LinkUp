import { useTranslation } from 'react-i18next'

import { Block } from '@/components/ui'
import { useLogOutMutation } from '@/services/auth/auth.service'

import s from './Header.module.scss'

import logo from '../../../assets/image/logoSoc.png'

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
