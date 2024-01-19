import { ComponentPropsWithoutRef, ElementType, Ref, forwardRef } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(
    props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
    ref: Ref<HTMLButtonElement> | null
  ) => {
    const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

    return (
      <Component
        className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
        ref={ref}
        {...rest}
      />
    )
  }
)
