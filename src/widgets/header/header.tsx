import { Block } from '@/components/ui'
import { useMeQuery } from '@/pages/auth/api/auth.service'
import { Logo } from '@/widgets/header/Logo/logo'
import { LogoutLink } from '@/widgets/header/logOutLink/logoutLink'

import s from './header.module.scss'

export const Header = () => {
  const { data } = useMeQuery()
  const isAuthenticated = data?.resultCode === 0

  return (
    <Block as={'header'} className={s.header}>
      <div className={s.header__block}>
        <Logo />
        {isAuthenticated && <LogoutLink />}
      </div>
    </Block>
  )
}
