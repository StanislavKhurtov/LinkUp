import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

import { KeyboardArrowLeft } from '@/assets/icons'
import { Button, TextField } from '@/components/ui'
import { sendMessages } from '@/pages/chat/model/chatSlice'
import { useAppDispatch } from '@/shared/lib/useAppDispatch'

import s from './messageDialogs.module.scss'

export const MessageDialogs = () => {
  const { userId } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [message, setMessage] = useState('')
  const dispatch = useAppDispatch()
  const handleTextareaChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMessage(e.currentTarget.value)
  const sendMessageHandler = () => {
    if (!message) {
      return
    }
    dispatch(sendMessages(message))
    setMessage('')
  }

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className={s.dialogsMessage}>
      <div className={s.message__block}>
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
        <div className={s.message__body}></div>
        <div className={s.message__panel}>
          <TextField onChange={handleTextareaChange} type={'text'} value={message}></TextField>
          <Button onClick={sendMessageHandler} variant={'primary'}>
            {t('Send')}
          </Button>
        </div>
      </div>
      <div className={s.message__navigation}>
        <div className={s.navigation__top}>
          <div className={s.navigation__item} onClick={() => navigate('/message')}>
            {t('All chats')}
          </div>
          <div className={s.navigation__item}>{t('Unread')}</div>
        </div>
        <div className={s.navigation__user}>
          <div className={s.navigation__item}>name {userId} </div>
        </div>
      </div>
    </div>
  )
}
