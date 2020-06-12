import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, withRouter } from 'react-router-dom'

const GuestRoute = ({ component: Component, ...rest }) => {
  const renderComponent = (props) => {
    const authenticated = false

    if (!authenticated) {
      return <Component {...props} />
    }

    return <Redirect to="/" />
  }

  return <Route {...rest} render={renderComponent} />
}

GuestRoute.propTypes = {
  component: PropTypes.component,
}

export default withRouter(GuestRoute)
