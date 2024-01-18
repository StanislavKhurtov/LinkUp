import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './Typography.module.scss'

export type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  children?: ReactNode
  className?: string
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType = 'span'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { as: Component = 'span', className, text, variant = 'body1', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
