import { NavLink } from 'react-router-dom'

import s from './aside.module.scss'

export const Aside = () => {
  return (
    <div>
      <nav>
        <ul className={s.aside__items}>
          <li>
            <NavLink className={({ isActive }) => (isActive ? s.active : s.aside__link)} to={'/'}>
              My profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.aside__link)}
              to={'/message'}
            >
              Messanger
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.aside__link)}
              to={'/users'}
            >
              Friends
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.aside__link)}
              to={'/music'}
            >
              Music
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.aside__link)}
              to={'/news'}
            >
              News
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
