import { useTranslation } from 'react-i18next'

import { PushIcon } from '@/assets/icons'
import { Button, TextField } from '@/components/ui'
import {
  useGetProfileByIdQuery,
  useGetProfileStatusByIdQuery,
} from '@/services/profile/profile.service'
import { useGetUsersQuery } from '@/services/users'

import s from './profile.module.scss'

import bg from '../../assets/image/bg.jpg'
import bg2 from '../../assets/image/bg2.jpg'
import noImage from '../../assets/image/noImage.jpg'

export const Profile = () => {
  const { data: profileData } = useGetProfileByIdQuery({ userId: 29506 })
  const { data: statusData } = useGetProfileStatusByIdQuery({ userId: 29506 })
  const { data: usersData } = useGetUsersQuery({ friend: true })
  const { t } = useTranslation()

  return (
    <div className={s.profile}>
      <div className={`${s.profile__top} ${s.top}`}>
        <div className={s.top__bg}>
          <img alt={'image-bg'} className={s.top__image} src={bg} />
        </div>
        <div className={s.top__body}>
          <div className={s.top__left}>
            <div className={s.top__logo}>
              <img
                alt={'image-profile'}
                className={s.top__foto}
                src={profileData?.photos.small !== null ? profileData?.photos.small : noImage}
              />
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
                  <img alt={'image-post-logo-users'} className={s.newPost__foto} src={noImage} />
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
                        src={noImage}
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
                        src={noImage}
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
                <div className={s.friend__item} key={user.id}>
                  <div className={s.friend__logo}>
                    <img
                      alt={'image-profile-friend'}
                      className={s.friend__foto}
                      src={user?.photos?.small !== null ? user?.photos?.small : noImage}
                    />
                  </div>
                  <div className={s.friend__name}>{user?.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
