import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import { Edit } from '@/assets/icons'
import { Linear } from '@/components/ui'
import { useLogOutMutation } from '@/pages/auth/api'

import s from './logoutLink.module.scss'

export const LogoutLink = () => {
  const [logout, { isLoading }] = useLogOutMutation()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  if (isLoading) {
    return <Linear />
  }

  return (
    <Link className={s.header__login} onClick={handleLogout} to={'/login'}>
      {t('LogOut')}
      <Edit className={'icon'} />
    </Link>
  )
}
