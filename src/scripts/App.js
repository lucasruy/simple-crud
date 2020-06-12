import React from 'react'
import { Provider } from 'react-redux'

import { configureStore } from './redux/store'

import { TestRedux } from 'components/TestRedux'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <div>
      <h1>CodeLeap Network</h1>
      <p>This is initial structure to start mini-project using React & Redux.</p>
    </div>
    <TestRedux />
  </Provider>
)

export default App
