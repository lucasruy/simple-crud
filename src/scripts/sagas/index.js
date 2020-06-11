import { fork } from 'redux-saga/effects'

import postsSagas from './postsSagas'

export default function* root() {
  yield fork(postsSagas)
}
