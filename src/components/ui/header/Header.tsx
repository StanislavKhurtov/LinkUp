import { Page } from '@/components/ui'

import s from './Header.module.scss'

import logo from '../../../assets/image/logo.png'

export const Header = () => {
  return (
    <Page>
      <header className={s.header}>
        <a className={s.header__btn} href={'/'}>
          <div className={s.header__logo}>
            <img alt={'image-logo'} className={s.header__image} src={logo} />
          </div>
          LinkUp
        </a>
        <button className={'header__login'}>Login</button>
      </header>
    </Page>
  )
}
