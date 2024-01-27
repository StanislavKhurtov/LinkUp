import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Footer } from '@/components/ui'
import { Header } from '@/components/ui/header/Header'
import { Main } from '@/components/ui/main'
import { LoginPage } from '@/pages/auth/login/login'
import { Dialogs } from '@/pages/dialogs'
import { Music } from '@/pages/music'
import { News } from '@/pages/news'
import { Profile } from '@/pages/profile/profile'
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
      <Header />
      <Main>
        <Outlet />
      </Main>
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
