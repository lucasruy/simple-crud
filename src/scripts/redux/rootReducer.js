import { combineReducers } from 'redux'

import userReducer from './modules/userReducer'
import postsReducer from './modules/postsReducer'
import editModalReducer from './ui/editModalReducer'
import deleteAlertReducer from './ui/deleteAlertReducer'

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  modal: editModalReducer,
  alert: deleteAlertReducer,
})

export default rootReducer
