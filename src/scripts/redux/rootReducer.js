import { combineReducers } from 'redux'

import postsReducer from './modules/postsReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
})

export default rootReducer
