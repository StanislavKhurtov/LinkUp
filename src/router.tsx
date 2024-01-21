import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { LoginPage } from '@/pages/auth/login/login'
import { Dialogs } from '@/pages/dialogs'
import { Music } from '@/pages/music'
import { News } from '@/pages/news'
import { Profile } from '@/pages/profile/profile'

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
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
