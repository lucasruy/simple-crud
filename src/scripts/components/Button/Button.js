import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './button.css'

const Button = ({ children, variant, withoutMargin, ...props }) => {
  const variantsDictionary = {
    default: 'button--default',
    outline: 'button--outline',
  }

  const buttonClasses = classNames({ button: true, 'button--no-margin': withoutMargin })

  return (
    <button className={`${buttonClasses} ${variantsDictionary[variant]}`} {...props}>
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
  withoutMargin: PropTypes.bool,
}

export default Button
