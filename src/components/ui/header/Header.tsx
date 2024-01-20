import h from './Header.module.scss'

export const Header = () => {
  return (
    <header className={h.header}>
      <div className={h.header__container}>
        <div className={'header__logo'}>Logo</div>
        <button className={'header__login'}>Login</button>
      </div>
    </header>
  )
}
