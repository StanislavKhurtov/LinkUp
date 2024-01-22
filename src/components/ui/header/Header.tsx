import { Page } from '@/components/ui'

import h from './Header.module.scss'

export const Header = () => {
  return (
    <Page>
      <header className={h.header}>
        <div className={'header__logo'}>Logo</div>
        <button className={'header__login'}>Login</button>
      </header>
    </Page>
  )
}
