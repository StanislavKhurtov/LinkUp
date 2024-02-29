import React, { ChangeEvent, InputHTMLAttributes, KeyboardEvent, ReactNode, useState } from 'react'

import s from './addItemForm.module.scss'

type Props = {
  addItem: (title: string) => void
  disabled?: boolean
  label?: string
  trigger?: ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const AddItemForm = React.memo((props: Props) => {
  const [newTitle, setNewTitle] = useState<string>('')
  const [error, setError] = useState<null | string>(null)
  const [showButton, setShowButton] = useState<boolean>(false)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value)
    setShowButton(e.currentTarget.value !== '')
  }
  const onKeypressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (error !== null) {
      setError(null)
    }
    if (e.key === 'Enter') {
      addItemHandler()
    }
  }

  const addItemHandler = () => {
    if (newTitle.trim() !== '') {
      props.addItem(newTitle.trim())
      setNewTitle('')
      setShowButton(false)
    } else {
      setError('Title is required')
    }
  }

  return (
    <div className={s.AddItemForm}>
      <div className={'AddItemForm__label'}>{props.label}</div>
      <input
        {...props}
        className={s.input}
        disabled={props.disabled}
        onChange={onChangeHandler}
        onKeyPress={onKeypressHandler}
        value={newTitle}
      />
      <button className={s.btn} disabled={props.disabled} onClick={addItemHandler}>
        {showButton && props.trigger}
      </button>
    </div>
  )
})
