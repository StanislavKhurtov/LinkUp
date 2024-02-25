import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { Button, TextField } from '@/components/ui'
import { useSendMessageFriendMutation } from '@/pages/dialogs/api'

import s from '@/pages/dialogs/ui/messageDialog/ui/messageDialogs.module.scss'

export const AddMessage = () => {
  const { userId } = useParams()
  const { t } = useTranslation()
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

  const onKeypressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setNewMessage(e.currentTarget.value)
    }
  }

  return (
    <div className={s.message__panel}>
      <TextField
        onChange={handleTextareaChange}
        onKeyPress={onKeypressHandler}
        type={'text'}
        value={newMessage}
      ></TextField>
      <Button onClick={sendMessageHandler} variant={'primary'}>
        {t('Send')}
      </Button>
    </div>
  )
}
