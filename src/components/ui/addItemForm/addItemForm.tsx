import React, { ChangeEvent, InputHTMLAttributes, KeyboardEvent, ReactNode, useState } from 'react'

import clsx from 'clsx'

type Props = {
  addItem: (title: string) => void
  disabled?: boolean
  label?: string
  trigger?: ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const AddItemForm = React.memo((props: Props) => {
  const [newTitle, setNewTitle] = useState<string>('')
  const [error, setError] = useState<null | string>(null)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value)
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
    } else {
      setError('Title is required')
    }
  }

  return (
    <div className={'AddItemForm'}>
      <div className={'AddItemForm__label'}>{props.label}</div>
      <input
        {...props}
        className={clsx('AddItemForm__input', { error: error })}
        disabled={props.disabled}
        onChange={onChangeHandler}
        onKeyPress={onKeypressHandler}
        value={newTitle}
      />
      <button className={'AddItemForm__btn'} disabled={props.disabled} onClick={addItemHandler}>
        {props.trigger}
      </button>
      {error && <div className={'error-message'}>{error}</div>}
    </div>
  )
})
