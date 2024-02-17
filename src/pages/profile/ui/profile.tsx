import { useTranslation } from 'react-i18next'
import { NavLink, useParams } from 'react-router-dom'

import { Pencil, PushIcon } from '@/assets/icons'
import bg from '@/assets/image/bg.jpg'
import bg2 from '@/assets/image/bg2.jpg'
import noImage from '@/assets/image/noImage.jpg'
import { Button, TextField } from '@/components/ui'
import {
  useGetProfileByIdQuery,
  useGetProfileStatusByIdQuery,
} from '@/pages/profile/api/profile.service'

import s from './profile.module.scss'

import { useGetUsersQuery } from '../../users/api/users'

export const Profile = () => {
  const { userId } = useParams()

  const { data: profileData } = useGetProfileByIdQuery({ userId: Number(userId) })
  const { data: statusData } = useGetProfileStatusByIdQuery({ userId: Number(userId) })
  const { data: usersData } = useGetUsersQuery({ friend: true })
  const { t } = useTranslation()
  const foto = profileData?.photos.small !== null ? profileData?.photos.small : noImage

  return (
    <div className={s.profile}>
      <div className={`${s.profile__top} ${s.top}`}>
        <div className={s.top__bg}>
          <img
            alt={'image-bg'}
            className={s.top__image}
            src={profileData?.photos.large !== null ? profileData?.photos.large : bg}
          />
          <Button className={s.top__edit} to={'#'} variant={'Link'}>
            <Pencil className={'icon'} />
            {t('Change cover')}
          </Button>
        </div>
        <div className={s.top__body}>
          <div className={s.top__left}>
            <div className={s.top__logo}>
              <img alt={'image-profile'} className={s.top__foto} src={foto} />
            </div>
            <div className={s.top__info}>
              <div className={s.top__title}>{profileData?.fullName}</div>
              <div className={s.top__status}>{statusData}</div>
            </div>
          </div>
          <div className={s.top__rigth}>
            <Button variant={'primary'}>{t('Edit profile')}</Button>
          </div>
        </div>
      </div>
      <div className={s.profile__blog}>
        <div className={s.profile__left}>
          <div className={`${s.profile__post} ${s.post}`}>
            <div className={`${s.post__newPost} ${s.newPost}`}>
              <div className={s.newPost__body}>
                <div className={s.newPost__logo}>
                  <img alt={'image-post-logo-users'} className={s.newPost__foto} src={foto} />
                </div>
                <TextField placeholder={t('What news?')} type={'text'} />
              </div>
              <Button className={s.newPost__btn} variant={'primary'}>
                <PushIcon />
              </Button>
            </div>
            <div className={s.post__block}>
              <div className={`${s.post__content} ${s.contentPost}`}>
                <div className={s.contentPost__top}>
                  <div className={s.contentPost__block}>
                    <div className={s.contentPost__logo}>
                      <img
                        alt={'image-post-logo-users'}
                        className={s.contentPost__foto}
                        src={foto}
                      />
                    </div>
                    <div className={s.contentPost__info}>
                      <div className={s.contentPost__userName}>{profileData?.fullName}</div>
                      <div className={s.contentPost__data}>10 May 2018</div>
                    </div>
                  </div>
                  <div className={s.contentPost__icon}>...</div>
                </div>
                <div className={s.contentPost__picture}>
                  <img alt={'image-post'} className={s.contentPost__image} src={bg} />
                </div>
                <div className={s.contentPost__bottom}>
                  <div className={s.contentPost__sprite}>1231321231</div>
                </div>
              </div>
              <div className={`${s.post__content} ${s.contentPost}`}>
                <div className={s.contentPost__top}>
                  <div className={s.contentPost__block}>
                    <div className={s.contentPost__logo}>
                      <img
                        alt={'image-post-logo-users'}
                        className={s.contentPost__foto}
                        src={foto}
                      />
                    </div>
                    <div className={s.contentPost__info}>
                      <div className={s.contentPost__userName}>{profileData?.fullName}</div>
                      <div className={s.contentPost__data}>7 May 2018</div>
                    </div>
                  </div>
                  <div className={s.contentPost__icon}>...</div>
                </div>
                <div className={s.contentPost__picture}>
                  <img alt={'image-post'} className={s.contentPost__image} src={bg2} />
                </div>
                <div className={s.contentPost__bottom}>
                  <div className={s.contentPost__sprite}>1231321231</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.profile__rigth}>
          <div className={`${s.profile__friend} ${s.friend}`}>
            <div className={s.friend__info}>
              <div className={s.friend__title}>{t('Friends online')}</div>
              <div className={s.friend__count}>{usersData?.items.length}</div>
            </div>
            <div className={s.friend__body}>
              {usersData?.items.map(user => (
                <NavLink className={s.users__name} key={user.id} to={`/profile/${user.id}`}>
                  <div className={s.friend__item}>
                    <div className={s.friend__logo}>
                      <img
                        alt={'image-profile-friend'}
                        className={s.friend__foto}
                        src={user?.photos?.small !== null ? user?.photos?.small : noImage}
                      />
                    </div>
                    <div className={s.friend__name}>{user?.name}</div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
