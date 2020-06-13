import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './input.css'

const Input = ({ label, placeholder, name, type, withoutMargin }) => {
  const inputProps = { placeholder, name, type }

  const inputClasses = classNames({ input: true, 'input--no-margin': withoutMargin })

  return (
    <div className={inputClasses}>
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} autoComplete="off" {...inputProps} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  withoutMargin: PropTypes.bool,
}

export default Input
