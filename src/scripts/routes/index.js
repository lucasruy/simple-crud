import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { Initial } from 'pages/Initial'

import RenderRoutes from './components/RenderRoutes'

const ROUTES = [
  {
    path: '/',
    key: 'INIT',
    exact: true,
    privateRoute: false,
    component: Initial,
  },
  {
    path: '/login',
    key: 'LOGIN',
    exact: true,
    privateRoute: false,
    component: Login,
  },
  {
    path: '/home',
    key: 'HOME',
    exact: true,
    privateRoute: true,
    component: Home,
  },
]

export { ROUTES, RenderRoutes }
