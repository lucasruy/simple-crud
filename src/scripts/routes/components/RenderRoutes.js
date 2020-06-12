import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { NoMatch } from 'pages/NoMatch'

import RoutesMiddleware from './RoutesMiddleware'

const mapRoutes = (route) => <RoutesMiddleware key={route.key} {...route} />

const RenderRoutes = ({ routes }) => (
  <BrowserRouter basename="/">
    <Switch>
      {routes.map(mapRoutes)}
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
)

RenderRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
}

export default RenderRoutes
