import { Block } from '@/components/ui'

import s from './footer.module.scss'

export const Footer = () => {
  return (
    <Block as={'footer'} className={s.footer}>
      <div className={s.footer__text}>©2023 Stanislav khurtov</div>
    </Block>
  )
}
