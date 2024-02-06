import { ComponentPropsWithoutRef, ElementRef, Suspense, forwardRef } from 'react'

import { Footer } from '@/components/ui/footer/footer'
import { Header } from '@/components/ui/header/Header'
import { MainPage } from '@/components/ui/mainPage'

type Props = ComponentPropsWithoutRef<'div'>
export const Layout = forwardRef<ElementRef<'div'>, Props>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <div ref={ref} {...rest} className={'wrapper'}>
      <Suspense fallback={''}>
        <Header />
        <MainPage>{children}</MainPage>
        <Footer />
      </Suspense>
    </div>
  )
})
