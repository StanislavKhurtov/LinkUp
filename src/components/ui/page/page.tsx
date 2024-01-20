import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './page.module.scss'

export type Props = ComponentPropsWithoutRef<'div'> & {
  background?: CSSProperties['background']
}

export const Page = forwardRef<ElementRef<'div'>, Props>(
  ({ background = 'transparent', children, className, style, ...restProps }, ref) => {
    const styles = { background: background, ...style }

    return (
      <div
        className={clsx(s.page, className)}
        // className={`${s.wrapperCard} ${className ? className : ''}`}
        {...restProps}
        ref={ref}
        style={styles}
      >
        <div className={s.page__container}>{children}</div>
      </div>
    )
  }
)
//
