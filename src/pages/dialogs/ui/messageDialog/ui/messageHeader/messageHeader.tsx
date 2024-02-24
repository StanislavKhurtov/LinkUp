import { useNavigate, useParams } from 'react-router-dom'

import { KeyboardArrowLeft } from '@/assets/icons'

import s from './messageHeader.module.scss'

export const MessageHeader = () => {
  const { userId } = useParams()
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className={s.message__top}>
      <div className={s.top__back} onClick={goBack}>
        <KeyboardArrowLeft className={'icon'} />
        Назад
      </div>
      <div className={s.top__name}>Имя {userId}</div>
      <div className={s.top__logoUser}>
        <img alt={'logo-image-user'} src={''} />
      </div>
    </div>
  )
}
