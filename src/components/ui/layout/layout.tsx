import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Footer } from '@/components/ui/footer/footer'
import { Header } from '@/components/ui/header/Header'


type Props = ComponentPropsWithoutRef<'div'>
export const Layout = forwardRef<ElementRef<'div'>, Props>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <div ref={ref} {...rest}>
      <Header />
      <div className={'main'}>{children}</div>
      <Footer />
    </div>
  )
})
