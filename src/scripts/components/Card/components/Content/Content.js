import React from 'react'
import PropTypes from 'prop-types'
import './content.css'

const CardContent = ({ children }) => <div className="card-content">{children}</div>

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardContent
