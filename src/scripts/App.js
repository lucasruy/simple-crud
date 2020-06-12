import React from 'react'
import { Provider } from 'react-redux'
import './styles/styles.css'

import { configureStore } from './redux/store'

import { EditModal } from 'components/EditModal'
import { TestRedux } from 'components/TestRedux'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <EditModal />
    <div>
      <h1>CodeLeap Network</h1>
      <p>This is initial structure to start mini-project using React & Redux.</p>
    </div>
    <TestRedux />
  </Provider>
)

export default App
