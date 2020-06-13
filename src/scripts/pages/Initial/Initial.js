import React from 'react'
import './initial.css'

import LogoSVG from 'assets/images/svg/codeleap-logo.svg'

import { FadeTransition } from 'components/FadeTransition'

const Initial = () => (
  <FadeTransition>
    <div className="initial">
      <div className="initial-logo">
        <img src={LogoSVG} />
      </div>
    </div>
  </FadeTransition>
)

export default Initial
