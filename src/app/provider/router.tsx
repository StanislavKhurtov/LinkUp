import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Layout } from '@/components/ui/layout/layout'
import { LoginPage } from '@/pages/auth/login/login'
import { ChatPage } from '@/pages/chat/ui'
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
  {
    element: <ChatPage />,
    path: '/chat',
  },
  {
    element: <div>404 NOT FOUND</div>,
    path: '*',
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

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
