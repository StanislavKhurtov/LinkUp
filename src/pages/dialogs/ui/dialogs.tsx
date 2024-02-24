import { useNavigate } from 'react-router-dom'

import NoImage from '@/assets/image/noImage.jpg'
import { Linear } from '@/components/ui'
import { useGetDialogsQuery } from '@/pages/dialogs/api'

import s from './dialogs.module.scss'

export const Dialogs = () => {
  const navigate = useNavigate()
  const { data, isLoading } = useGetDialogsQuery()

  if (isLoading) {
    return <Linear />
  }

  return (
    <div className={s.dialog__block}>
      {data?.map(dialog => {
        return (
          <div
            className={s.dialog__item}
            key={dialog.id}
            onClick={() => navigate(`/message/dialog/${dialog.id}`)}
          >
            <div className={s.dialog__logo}>
              <img
                alt={'image logo'}
                className={s.dialog__image}
                src={dialog.photos.small !== null ? dialog.photos.small : NoImage}
              />
            </div>
            <div className={s.dialog__body}>
              <div className={s.dialog__info}>
                {dialog.userName}
                <div className={s.dialog__date}>
                  {new Date(dialog.lastUserActivityDate).toLocaleString()}
                </div>
              </div>
              <div className={s.dialog__message}>Message</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
