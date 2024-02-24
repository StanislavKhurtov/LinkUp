import { NavLink, useParams } from 'react-router-dom'

import NoImage from '@/assets/image/noImage.jpg'
import { useGetMessagesFriendQuery } from '@/pages/dialogs/api'

import s from './messageDialogBlock.module.scss'

export const MessageDialogBlock = () => {
  const { userId } = useParams()
  const { data: dataMessages } = useGetMessagesFriendQuery({ userId: Number(userId) })
  let previousDate = ''

  return (
    <div className={s.message__body}>
      {dataMessages?.items.map((message, index) => {
        // Добавлен параметр index
        const currentDate = new Date(message.addedAt).toLocaleDateString()
        let dateComponent = null

        if (currentDate !== previousDate) {
          dateComponent = <div className={s.message__date}>{currentDate}</div>
          previousDate = currentDate
        }

        const hours = new Date(message.addedAt).getHours().toString().padStart(2, '0')
        const minutes = new Date(message.addedAt).getMinutes().toString().padStart(2, '0')

        return (
          <>
            <div className={s.message__dateMessage}>
              {index === 0 ||
              currentDate !== new Date(dataMessages.items[index - 1].addedAt).toLocaleDateString()
                ? dateComponent
                : null}
            </div>
            <div className={s.message__items} key={message.id}>
              <div className={s.message__userPhoto_ibg}>
                <img alt={'image logo'} className={s.message__image} src={NoImage} />
              </div>
              <div className={s.message__block}>
                <div className={s.message__info}>
                  <NavLink to={`/profile/${message.senderId}`}>
                    <div className={s.message__name}>{message.senderName}</div>
                  </NavLink>
                  <div className={s.message__date}>
                    {hours}:{minutes}
                  </div>
                </div>
                <div className={s.message__message}>{message.body}</div>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}
