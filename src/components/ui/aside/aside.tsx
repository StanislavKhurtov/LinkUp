import { NavLink } from 'react-router-dom'

import s from './aside.module.scss'

export const Aside = () => {
  return (
    <div className={s.aside}>
      <nav className={s.aside__nav}>
        <div className={s.aside__items}>
          <div className={s.aside__item}>
            <NavLink className={({ isActive }) => (isActive ? s.active : s.aside__link)} to={'/'}>
              My profile
            </NavLink>
          </div>
          <div className={s.aside__item}>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.aside__link)}
              to={'/message'}
            >
              Messanger
            </NavLink>
          </div>
          <div className={s.aside__item}>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.aside__link)}
              to={'/users'}
            >
              Friends
            </NavLink>
          </div>
          <div className={s.aside__item}>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.aside__link)}
              to={'/music'}
            >
              Music
            </NavLink>
          </div>
          <div className={s.aside__item}>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.aside__link)}
              to={'/news'}
            >
              News
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}
