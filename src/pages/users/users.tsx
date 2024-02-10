import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useSearchParams } from 'react-router-dom'

import { Mess } from '@/assets/icons'
import { Button, Linear, Pagination, TextField } from '@/components/ui'
import { FollowButton } from '@/pages/users/followButton'
import { useGetUsersQuery } from '@/services/users/users.service'
import { randomUserPhoto } from '@/utils'

import s from './users.module.scss'

export const Users = () => {
  const [showFriendsOnly, setShowFriendsOnly] = useState(false)
  const [randomPhoto, setRandomPhoto] = useState('')
  const [searchParams, setSearchParams] = useSearchParams({ name: '', page: '1' })
  const page = Number(searchParams.get('page'))
  const name = searchParams.get('name')

  const { t } = useTranslation()
  const setPage = (page: number) => {
    searchParams.set('page', page.toString())
    setSearchParams(searchParams)
  }
  const setName = (name: string) => {
    if (name === '') {
      searchParams.delete('name')
    } else {
      searchParams.set('name', name)
    }
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }
  const { data, isLoading } = useGetUsersQuery({
    count: 10,
    friend: showFriendsOnly ? true : undefined,
    page: page || 1,
    term: name ?? undefined,
  })

  useEffect(() => {
    const fetchRandomUserPhoto = async () => {
      const photo = await randomUserPhoto()

      setRandomPhoto(photo)
    }

    fetchRandomUserPhoto()
  }, [])

  if (isLoading) {
    return <Linear />
  }
  const handleClearText = () => {
    searchParams.set('name', '')
    setSearchParams(searchParams)
  }
  const handleShowFriendsOnly = () => {
    setShowFriendsOnly(true)
  }

  const handleShowAllUsers = () => {
    setShowFriendsOnly(false)
  }

  return (
    <div className={s.users__block}>
      <div className={s.users__nav}>
        <div className={s.users__allUsers} onClick={handleShowAllUsers}>
          {t('All users')} {data?.totalCount}
        </div>
        <div className={s.users__online} onClick={handleShowFriendsOnly}>
          {t('Friends online')}
        </div>
      </div>
      <div className={s.users__search}>
        <TextField
          clearText={handleClearText}
          onValueChange={setName}
          type={'search'}
          value={name ?? ''}
        />
      </div>
      {data?.items.map(user => (
        <div className={s.users} key={user.id}>
          <div className={s.users__logo}>
            <NavLink to={`/profile/${user.id}`}>
              <img
                alt={'image logo'}
                className={s.users__image}
                src={user.photos.small !== null ? user.photos.small : randomPhoto}
              />
            </NavLink>
          </div>
          <div className={s.users__body}>
            <div className={s.users__info}>
              <div className={s.users__name}>{user.name}</div>
              <div className={s.users__status}>{user.status}</div>
            </div>
            <div className={s.users__btns}>
              <Button className={s.users__button} variant={'primary'}>
                <Mess className={'icon'} />
                {t('Write message')}
              </Button>
              <div className={s.users__follow}>
                <FollowButton userId={user.id} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <Pagination onChange={setPage} page={page} totalCount={data?.totalCount} />
    </div>
  )
}
