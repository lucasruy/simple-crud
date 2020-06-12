import React from 'react'
import PropTypes from 'prop-types'

import GuestRoute from './GuestRoute'
import PrivateRoute from './PrivateRoute'

const RoutesMiddleware = ({ component, exact, path, privateRoute }) => {
  const componentProps = { path, exact, component }

  if (privateRoute) {
    return <PrivateRoute {...componentProps} />
  }

  return <GuestRoute {...componentProps} />
}

RoutesMiddleware.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  privateRoute: PropTypes.bool.isRequired,
}

export default RoutesMiddleware
