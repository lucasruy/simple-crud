import { fork } from 'redux-saga/effects'

import userSagas from './userSagas'
import postsSagas from './postsSagas'

export default function* root() {
  yield fork(userSagas)
  yield fork(postsSagas)
}
