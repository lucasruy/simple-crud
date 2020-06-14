import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const FadeTransition = ({ children, duration }) => {
  const fadeAnim = {
    animate: { opacity: 1 },
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    transition: {
      ease: 'easeInOut',
      duration,
    },
  }

  return <motion.div {...fadeAnim}>{children}</motion.div>
}

FadeTransition.defaultProps = {
  duration: 0.3,
}

FadeTransition.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
}

export default FadeTransition
