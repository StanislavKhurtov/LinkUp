import { Link, useLocation } from 'react-router-dom'

import { FriendsIcon, HomeIcon, MessageIcon, MusicIcon, NewsIcon } from "@/assets/icons";
import { Button } from '@/components/ui'

import s from './aside.module.scss'

export const Aside = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const activeClassName = `${s.active} ${s.aside__btn}`

  return (
    <div className={s.aside}>
      <nav className={s.aside__nav}>
        <div className={s.aside__items}>
          <div className={s.aside__item}>
            <Button
              as={Link}
              className={isActive('/') ? activeClassName : s.aside__link}
              to={'/'}
              variant={'link'}
            >
              <HomeIcon height={'20px'} width={'20px'} />
              My profile
            </Button>
          </div>
          <div className={s.aside__item}>
            <Button
              as={Link}
              className={isActive('/message') ? activeClassName : s.aside__link}
              to={'/message'}
              variant={'link'}
            >
              <MessageIcon height={'20px'} width={'20px'} />
              Messanger
            </Button>
          </div>
          <div className={s.aside__item}>
            <Button
              as={Link}
              className={isActive('/users') ? activeClassName : s.aside__link}
              to={'/users'}
              variant={'link'}
            >
              <FriendsIcon height={'20px'} width={'20px'} />
              Friends
            </Button>
          </div>
          <div className={s.aside__item}>
            <Button
              as={Link}
              className={isActive('/music') ? activeClassName : s.aside__link}
              to={'/music'}
              variant={'link'}
            >
              <MusicIcon height={'20px'} width={'20px'} />
              Music
            </Button>
          </div>
          <div className={s.aside__item}>
            <Button
              as={Link}
              className={isActive('/news') ? activeClassName : s.aside__link}
              to={'/news'}
              variant={'link'}
            >
              <NewsIcon height={'20px'} width={'20px'} />
              News
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}
