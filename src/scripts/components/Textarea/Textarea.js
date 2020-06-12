import React from 'react'
import PropTypes from 'prop-types'
import './textarea.css'

const Textarea = ({ label, placeholder, name }) => {
  const textareaProps = { placeholder, name }

  return (
    <div className="textarea">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea id={name} rows="5" cols="33" {...textareaProps}></textarea>
    </div>
  )
}

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
}

export default Textarea
