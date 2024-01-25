import { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

import { Linear, Pagination, TextField } from '@/components/ui'
import { useGetUsersQuery } from '@/services/users/users.service'
import { randomUserPhoto } from '@/utils'

import s from './users.module.scss'

export const Users = () => {
  const [randomPhoto, setRandomPhoto] = useState('')
  const [searchParams, setSearchParams] = useSearchParams({ name: '', page: '1' })
  const page = Number(searchParams.get('page'))
  const name = searchParams.get('name')
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

  return (
    <div className={s.users__wrapper}>
      <div className={s.users__nav}>
        <button>All users {data?.totalCount}</button>
        <button>Friends online {data?.totalCount}</button>
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
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div className={s.users__btns}>
              <button>Send message</button>
              <div className={s.users__follow}>
                {user.followed ? (
                  <button onClick={() => {}}>Unfollow</button>
                ) : (
                  <button onClick={() => {}}>Follow</button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      <Pagination onChange={setPage} page={page} totalCount={data?.totalCount} />
    </div>
  )
}
