import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

import Push from '@/assets/icons/push'
import { AddItemForm } from '@/components/ui/addItemForm'
import { useSendMessageFriendMutation } from '@/pages/dialogs/api'
import { MessageDialogBlock } from '@/pages/dialogs/ui/messageDialog/ui/messageDialogBlock/messageDialogBlock'
import { MessageHeader } from '@/pages/dialogs/ui/messageDialog/ui/messageHeader/messageHeader'

import s from './messageDialogs.module.scss'

export const MessageDialogs = () => {
  const { userId } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [sendMessage] = useSendMessageFriendMutation()
  const sendMessageToUser = (message: string) => {
    sendMessage({ body: message, userId: Number(userId) })
  }

  return (
    <div className={s.dialogsMessage}>
      <div className={s.message__block}>
        <MessageHeader />
        <MessageDialogBlock />
        <AddItemForm addItem={sendMessageToUser} trigger={<Push className={'icon'} />} />
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
