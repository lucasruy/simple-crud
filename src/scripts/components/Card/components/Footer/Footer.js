import React from 'react'
import PropTypes from 'prop-types'
import './footer.css'

const CardFooter = ({ children, align }) => {
  const alignDictionary = {
    default: 'card-footer--default',
    left: 'card-footer--left',
    right: 'card-footer--right',
    center: 'card-footer--center',
  }

  const footerClasses = `card-footer ${alignDictionary[align]}`

  return <footer className={footerClasses}>{children}</footer>
}

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
}

CardFooter.defaultProps = {
  align: 'default',
}

export default CardFooter
