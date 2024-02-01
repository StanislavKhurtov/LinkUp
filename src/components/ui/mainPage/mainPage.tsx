import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Page } from '@/components/ui'
import { Aside } from '@/components/ui/aside'

import s from './main.module.scss'

type Props = ComponentPropsWithoutRef<'div'>
export const MainPage = forwardRef<ElementRef<'div'>, Props>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <main className={s.main}>
      <Page>
        <div ref={ref} {...rest} className={s.main__block}>
          <div className={s.main__leftBlock}>
            <Aside />
          </div>
          <div className={s.main__rigthBlock}>{children}</div>
        </div>
      </Page>
    </main>
  )
})
