import React from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { NoMatch } from 'pages/NoMatch'

import RoutesMiddleware from './RoutesMiddleware'

const mapRoutes = (route) => <RoutesMiddleware key={route.key} {...route} />

const RenderRoutes = ({ routes }) => (
  <AnimatePresence>
    <BrowserRouter basename="/">
      <Switch>
        {routes.map(mapRoutes)}
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  </AnimatePresence>
)

RenderRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
}

export default RenderRoutes
