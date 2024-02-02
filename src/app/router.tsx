import { Suspense } from 'react'
import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Header } from '@/components/ui/header/Header'
import { MainPage } from '@/components/ui/mainPage'
import { LoginPage } from '@/pages/auth/login/login'
import { Dialogs } from '@/pages/dialogs'
import { Music } from '@/pages/music'
import { News } from '@/pages/news'
import { Profile } from '@/pages/profile/profile'
import { Settings } from '@/pages/settings'
import { Users } from '@/pages/users/users'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Profile />,
    path: '/',
  },
  {
    element: <Dialogs />,
    path: '/message',
  },
  {
    element: <Music />,
    path: '/music',
  },
  {
    element: <News />,
    path: '/news',
  },
  {
    element: <Users />,
    path: '/users',
  },
  {
    element: <Settings />,
    path: '/settings',
  },
]

const router = createBrowserRouter([
  {
    children: [
      ...publicRoutes,
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
    ],
    element: <Layout />,
  },
])

function Layout() {
  return (
    <div className={'wrapper'}>
      <Suspense fallback={''}>
        <Header />
        <MainPage>
          <Outlet />
        </MainPage>
      </Suspense>
    </div>
  )
}

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}