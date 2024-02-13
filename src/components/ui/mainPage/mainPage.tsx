import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Outlet } from 'react-router-dom'

import { Block } from '@/components/ui'
import { Aside } from '@/widgets/aside'

import s from './main.module.scss'

type Props = ComponentPropsWithoutRef<'div'>
export const MainPage = forwardRef<ElementRef<'div'>, Props>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <Block as={'main'} className={s.main}>
      <div ref={ref} {...rest} className={s.main__block}>
        <div className={s.main__leftBlock}>
          <Aside />
        </div>
        <div className={s.main__rigthBlock}>
          <Outlet />
        </div>
      </div>
    </Block>
  )
})
