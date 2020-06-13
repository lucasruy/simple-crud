import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.user)

  const renderComponent = (props) => {
    if (user.payload.isAuthenticated) {
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
