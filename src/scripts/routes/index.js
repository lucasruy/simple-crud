import React from 'react'
import { Link } from 'react-router-dom'

import { Login } from 'pages/Login'
import { Home } from 'pages/Home'

import RenderRoutes from './components/RenderRoutes'

const ProvisoryComponent = () => (
  <div>
    <h1>Initial Page.</h1>
    <Link to="/login">Login</Link>
  </div>
)

const ROUTES = [
  {
    path: '/',
    key: 'INIT',
    exact: true,
    privateRoute: false,
    component: ProvisoryComponent,
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
