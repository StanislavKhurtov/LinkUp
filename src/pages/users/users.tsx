import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Linear, Pagination, TextField } from '@/components/ui'
import { useGetUsersQuery } from '@/services/users/users.service'

import s from './users.module.scss'

import noImage from '../../assets/image/noImage.jpg'

export const Users = () => {
  const [page, setPage] = useState<number>(1)
  const [search, setSearch] = useState('')
  const { data, isLoading } = useGetUsersQuery({
    count: 10,
    page: page,
    term: search,
  })

  if (isLoading) {
    return <Linear />
  }

  return (
    <div className={s.users__wrapper}>
      <div className={s.users__nav}>
        <button>All users {data?.totalCount}</button>
        <button>Friends online {data?.totalCount}</button>
      </div>
      <div className={s.users__search}>
        <TextField onValueChange={setSearch} type={'search'} value={search} />
      </div>
      {data?.items.map(user => (
        <div className={s.users} key={user.id}>
          <div className={s.users__logo}>
            <NavLink to={`/profile/${user.id}`}>
              <img
                alt={'image logo'}
                className={s.users__image}
                src={user.photos.small !== null ? user.photos.small : noImage}
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
