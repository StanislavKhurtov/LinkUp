import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

import { Button, TextField } from '@/components/ui'
import { useSendMessageFriendMutation } from '@/pages/dialogs/api'
import { MessageDialogBlock } from '@/pages/dialogs/ui/messageDialog/ui/messageDialogBlock/messageDialogBlock'
import { MessageHeader } from '@/pages/dialogs/ui/messageDialog/ui/messageHeader/messageHeader'

import s from './messageDialogs.module.scss'

export const MessageDialogs = () => {
  const { userId } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [newMessage, setNewMessage] = useState('')

  const [sendMessage] = useSendMessageFriendMutation()

  const handleTextareaChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewMessage(e.currentTarget.value)
  const sendMessageHandler = () => {
    if (!newMessage) {
      return
    }
    sendMessage({ body: newMessage, userId: Number(userId) })
    setNewMessage('')
  }

  return (
    <div className={s.dialogsMessage}>
      <div className={s.message__block}>
        <MessageHeader />
        <MessageDialogBlock />
        <div className={s.message__panel}>
          <TextField onChange={handleTextareaChange} type={'text'} value={newMessage}></TextField>
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
