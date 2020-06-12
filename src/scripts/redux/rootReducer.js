import { combineReducers } from 'redux'

import postsReducer from './modules/postsReducer'
import editModalReducer from './ui/editModalReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  modal: editModalReducer,
})

export default rootReducer
