import React from 'react'
import PropTypes from 'prop-types'
import './header.css'

const CardHeader = ({ title, background, extra }) => {
  const backgroundDictionary = {
    default: 'card-header--default',
    black: 'card-header--black',
  }

  const headerClasses = `card-header ${backgroundDictionary[background]}`

  return (
    <header className={headerClasses}>
      <h2 className="card-header__title">{title}</h2>
      {extra && <div className="card-header__extra">{extra}</div>}
    </header>
  )
}

CardHeader.propTypes = {
  title: PropTypes.node.isRequired,
  background: PropTypes.string,
  extra: PropTypes.node,
}

CardHeader.defaultProps = {
  background: 'default',
}

export default CardHeader
