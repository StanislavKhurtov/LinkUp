import React, { ChangeEvent, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui'

import s from './chat.module.scss'

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}
export const ChatPage = () => {
  return (
    <div>
      <Chat />
    </div>
  )
}

export const Chat = () => {
  return (
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  )
}

export const Messages = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([])

  useEffect(() => {
    ws.addEventListener('message', e => {
      const newMessages = JSON.parse(e.data)

      setMessages(prevMessages => [...prevMessages, ...newMessages])
    })
  }, [])

  return (
    <div>
      {messages.map(m => (
        <Message key={m.userId} message={m} />
      ))}
    </div>
  )
}

export const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  return (
    <div className={s.message}>
      <img alt={'image-users'} className={s.message__image} src={message.photo} />
      <div className={s.message__body}>
        <div className={s.message__author}>{message.userName}</div>
        <div className={s.message__text}>{message.message}</div>
      </div>
      <hr />
    </div>
  )
}

export const AddMessageForm: React.FC = () => {
  const { t } = useTranslation()
  const [message, setMessage] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value)
  const sendMessage = () => {
    if (!message) {
      return
    }
    ws.send(message)
    setMessage('')
  }

  return (
    <div className={s.panel}>
      <textarea onChange={onChangeHandler} value={message}></textarea>
      <Button onClick={sendMessage} variant={'primary'}>
        {t('Send')}
      </Button>
    </div>
  )
}
