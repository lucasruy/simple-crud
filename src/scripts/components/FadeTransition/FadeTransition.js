import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const FadeTransition = ({ children }) => {
  const fadeAnim = {
    animate: { opacity: 1 },
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  }

  return <motion.div {...fadeAnim}>{children}</motion.div>
}

FadeTransition.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FadeTransition
