import React from 'react'
import PropTypes from 'prop-types'
import './shell.css'

const Shell = ({ children }) => <div className="shell">{children}</div>

Shell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

export default Shell
