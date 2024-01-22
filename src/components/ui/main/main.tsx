import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Page } from '@/components/ui'
import { Aside } from '@/components/ui/aside'

import s from './main.module.scss'

type Props = ComponentPropsWithoutRef<'div'>
export const Main = forwardRef<ElementRef<'div'>, Props>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <main>
      <Page>
        <div ref={ref} {...rest} className={s.main__block}>
          <Aside />
          {children}
        </div>
      </Page>
    </main>
  )
})
