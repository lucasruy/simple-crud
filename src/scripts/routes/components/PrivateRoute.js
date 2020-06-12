import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, withRouter } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const renderComponent = (props) => {
    const authenticated = false

    if (authenticated) {
      return <Component {...props} />
    }

    return <Redirect to="/login" />
  }

  return <Route {...rest} render={renderComponent} />
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

export default withRouter(PrivateRoute)
