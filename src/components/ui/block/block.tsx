import { ComponentPropsWithoutRef, ElementType, ReactNode, Ref, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './block.module.scss'

export type Props<T extends ElementType = 'div'> = {
  as?: T
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<T>

export const Block = forwardRef(
  <T extends ElementType = 'div'>(
    props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>,
    ref: Ref<HTMLDivElement> | null
  ) => {
    const { as: Component = 'div', children, className, ...rest } = props

    return (
      <Component className={clsx(s.page, className)} ref={ref} {...rest}>
        <div className={s.page__container}>{children}</div>
      </Component>
    )
  }
)
