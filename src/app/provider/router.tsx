import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { LoginPage } from '@/pages/auth/ui/login/login'
import { ChatPage } from '@/pages/chat/ui'
import { Dialogs } from '@/pages/dialogs/ui'
import { Music } from '@/pages/music/ui'
import { News } from '@/pages/news/ui'
import { Profile } from '@/pages/profile/ui'
import { Settings } from '@/pages/settings/ui'
import { Users } from '@/pages/users/ui'
import { Layout } from '@/widgets/layout/layout'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Profile />,
    path: '/profile/:userId',
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
    path: '/',
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
