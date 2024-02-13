import { ComponentPropsWithoutRef, ElementRef, Suspense, forwardRef } from 'react'

import { Footer } from '@/widgets/footer/footer'
import { Header } from '@/widgets/header/header'

import { MainPage } from '../mainPage'

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
