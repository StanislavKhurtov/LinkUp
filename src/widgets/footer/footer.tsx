import { Block } from '@/components/ui'
import { useMeQuery } from '@/pages/auth/api'

import s from './footer.module.scss'

export const Footer = () => {
  const { data } = useMeQuery()
  const isAuthenticated = data?.resultCode === 1

  return (
    <>
      {isAuthenticated && (
        <Block as={'footer'} className={s.footer}>
          <div className={s.footer__text}>©2024 Stanislav Khurtoff</div>
        </Block>
      )}
    </>
  )
}
