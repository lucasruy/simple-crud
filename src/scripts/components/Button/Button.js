import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

const Button = ({ children, variant, ...props }) => {
  const variantsDictionary = {
    default: 'button--default',
    outline: 'button--outline',
  }

  const buttonClasses = `button ${variantsDictionary[variant]}`

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'default',
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

export default Button
