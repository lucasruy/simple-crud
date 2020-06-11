import React from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'

const App = () => (
  <Provider store={store}>
    <div>
      <h1>CodeLeap Network</h1>
      <p>
        This is initial structure to start mini-project using React & Redux.
      </p>
    </div>
  </Provider>
)

export default App
