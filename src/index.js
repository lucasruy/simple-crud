import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './scripts/App'

const root = document.createElement('main')
document.body.appendChild(root)

ReactDOM.render(<App />, root)
