import React from 'react'
import { Provider } from 'react-redux'
import './styles/styles.css'

import { configureStore } from './redux/store'
import { ROUTES, RenderRoutes } from './routes'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <RenderRoutes routes={ROUTES} />
  </Provider>
)

export default App
