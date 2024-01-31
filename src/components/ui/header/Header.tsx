import { Page } from '@/components/ui'
import { useLogOutMutation } from '@/services/auth/auth.service'

import s from './Header.module.scss'

import logo from '../../../assets/image/logoSoc.png'

export const Header = () => {
  const [logout, {}] = useLogOutMutation()

  return (
    <Page background={'#1f1d1d'}>
      <header className={s.header}>
        <a className={s.header__btn} href={'/'}>
          <div className={s.header__logo}>
            <img alt={'image-logo'} className={s.header__image} src={logo} />
          </div>
          UpLink
        </a>
        <button
          onClick={() => {
            const body = document.body
            const currentTheme = body.getAttribute('data-theme')

            if (currentTheme === 'light') {
              body.setAttribute('data-theme', 'dark')
            } else {
              body.setAttribute('data-theme', 'light')
            }
          }}
        >
          Сменить тему
        </button>
        <button className={'header__login'} onClick={() => logout()}>
          LogOut
        </button>
      </header>
    </Page>
  )
}
