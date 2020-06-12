import React from 'react'
import PropTypes from 'prop-types'
import './input.css'

const Input = ({ label, placeholder, name, type }) => {
  const inputProps = { placeholder, name, type }

  return (
    <div className="input">
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
}

export default Input
