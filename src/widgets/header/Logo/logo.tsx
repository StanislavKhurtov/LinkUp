import { Link } from 'react-router-dom'

import logo from '@/assets/image/logoSoc.png'
import { useMeQuery } from '@/pages/auth/api'

import s from './logo.module.scss'

export const Logo = () => {
  const { data } = useMeQuery()
  const isAuthenticated = data?.resultCode === 0

  return (
    <Link className={s.header__btn} to={isAuthenticated ? '/' : '/login'}>
      <div className={s.header__logo}>
        <img alt={'image-logo'} className={s.header__image} src={logo} />
      </div>
      UpLink
    </Link>
  )
}
