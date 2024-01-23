import { Link } from 'react-router-dom'

import { Button, Page } from '@/components/ui'

import s from './Header.module.scss'

import logo from '../../../assets/image/logo.png'

export const Header = () => {
  return (
    <Page>
      <header className={s.header}>
        <Button as={Link} className={s.header__btn} to={'/'}>
          <div className={s.header__logo}>
            <img alt={'image-logo'} className={s.header__image} src={logo} />
          </div>
          LinkUp
        </Button>
        <button className={'header__login'}>Login</button>
      </header>
    </Page>
  )
}
