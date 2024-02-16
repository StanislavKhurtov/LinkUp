import Authlogo from '@/assets/image/auth.png'
import { SignIn } from '@/components/auth/login-form/sign-in'

import s from './login.module.scss'

export const LoginPage = () => {
  return (
    <div className={s.auth}>
      <div className={s.auth__bg_ibg}>
        <img alt={'auth-bg'} className={s.auth__image} src={Authlogo} />
      </div>
      <div className={s.auth__form}>
        <SignIn />
      </div>
    </div>
  )
}
