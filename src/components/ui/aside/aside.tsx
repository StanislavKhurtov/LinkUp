import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

import {
  Chat,
  FriendsIcon,
  HomeIcon,
  MessageIcon,
  MusicIcon,
  NewsIcon,
  Setting,
} from '@/assets/icons'
import { Button } from '@/components/ui'

import s from './aside.module.scss'

export const Aside = () => {
  const location = useLocation()
  const { t } = useTranslation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const activeClassName = `${s.active} ${s.aside__btn}`

  return (
    <div className={s.aside}>
      <nav className={s.aside__nav}>
        <ul className={s.aside__items}>
          <li className={s.aside__item}>
            <Button
              as={Link}
              className={isActive('/') ? activeClassName : s.aside__link}
              to={'/'}
              variant={'link'}
            >
              <HomeIcon height={'20px'} width={'20px'} />
              {t('My profile')}
            </Button>
          </li>
          <li className={s.aside__item}>
            <Button
              as={Link}
              className={isActive('/message') ? activeClassName : s.aside__link}
              to={'/message'}
              variant={'link'}
            >
              <MessageIcon height={'20px'} width={'20px'} />
              {t('Messenger')}
            </Button>
          </li>
          <li className={s.aside__item}>
            <Button
              as={Link}
              className={isActive('/users') ? activeClassName : s.aside__link}
              to={'/users'}
              variant={'link'}
            >
              <FriendsIcon height={'20px'} width={'20px'} />
              {t('Friends')}
            </Button>
          </li>
          <li className={s.aside__item}>
            <Button
              as={Link}
              className={isActive('/music') ? activeClassName : s.aside__link}
              to={'/music'}
              variant={'link'}
            >
              <MusicIcon height={'20px'} width={'20px'} />
              {t('Music')}
            </Button>
          </li>
          <li className={s.aside__item}>
            <Button
              as={Link}
              className={isActive('/news') ? activeClassName : s.aside__link}
              to={'/news'}
              variant={'link'}
            >
              <NewsIcon height={'20px'} width={'20px'} />
              {t('News')}
            </Button>
          </li>
          <li className={s.aside__item}>
            <Button
              as={Link}
              className={isActive('/chat') ? activeClassName : s.aside__link}
              to={'/chat'}
              variant={'link'}
            >
              <Chat height={'20px'} width={'20px'} />
              {t('Chat')}
            </Button>
          </li>
          <li className={s.aside__item}>
            <Button
              as={Link}
              className={isActive('/settings') ? activeClassName : s.aside__link}
              to={'/settings'}
              variant={'link'}
            >
              <Setting height={'20px'} width={'20px'} />
              {t('Settings')}
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
