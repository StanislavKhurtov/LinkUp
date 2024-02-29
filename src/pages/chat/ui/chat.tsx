import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/app/store'
import Push from '@/assets/icons/push'
import { AddItemForm } from '@/components/ui/addItemForm'
import {
  sendMessages,
  startMessagesListening,
  stopMessagesListening,
} from '@/pages/chat/model/chatSlice'
import { useAppDispatch } from '@/shared/lib/useAppDispatch'

import s from './chat.module.scss'

export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}
export const ChatPage: React.FC = () => {
  return (
    <div className={s.chat}>
      <Chat />
    </div>
  )
}

export const Chat: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(startMessagesListening())

    return () => {
      dispatch(stopMessagesListening())
    }
  }, [])

  const sendMessage = (message: string) => {
    if (!message) {
      return
    }
    dispatch(sendMessages(message))
  }

  return (
    <div className={s.chat__body}>
      <Messages />
      <AddItemForm addItem={sendMessage} trigger={<Push className={'icon'} />} />
    </div>
  )
}

export const Messages: React.FC = () => {
  const messages = useSelector<RootState, ChatMessageType[]>(state => state.chat.messages)

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
