import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Redirect } from 'react-router-dom'
import './initial.css'

import LogoSVG from 'assets/images/svg/codeleap-logo.svg'

const Initial = () => {
  const [isReadyToRedirect, setIsReadyToRedirect] = useState(false)

  const setRedirectState = () => {
    setTimeout(() => {
      setIsReadyToRedirect(true)
    }, 1000)
  }

  const animation = {
    animate: { opacity: 1, scale: 1 },
    initial: { opacity: 0, scale: 3 },
    exit: { opacity: 0 },
    transition: {
      ease: 'easeInOut',
      duration: 1.5,
    },
  }

  if (isReadyToRedirect) {
    return <Redirect to="/home" />
  }

  return (
    <div className="initial">
      <motion.div {...animation} onAnimationComplete={setRedirectState}>
        <div className="initial-logo">
          <img src={LogoSVG} />
        </div>
      </motion.div>
    </div>
  )
}

export default Initial
