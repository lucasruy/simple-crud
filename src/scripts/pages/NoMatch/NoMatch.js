import React from 'react'

import { FadeTransition } from 'components/FadeTransition'

const NoMatch = () => (
  <FadeTransition>
    <div>
      <h1>404</h1>
      <p>No match found for your search.</p>
    </div>
  </FadeTransition>
)

export default NoMatch
