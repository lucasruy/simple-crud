import { combineReducers } from 'redux'

import postsReducer from './modules/postsReducer'
import editModalReducer from './ui/editModalReducer'
import deleteAlertReducer from './ui/deleteAlertReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  modal: editModalReducer,
  alert: deleteAlertReducer,
})

export default rootReducer
