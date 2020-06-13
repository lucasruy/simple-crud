import { call, put, takeLatest } from 'redux-saga/effects'

import * as service from 'service/userService'
import * as actions from 'actions/modules/userActions'
import * as constants from 'constants/modules/userConstants'

function* getUser({ username }) {
  try {
    let isAuthenticated = false
    const { name } = yield call(service.getUserData)

    if (username === name) {
      isAuthenticated = true
    }

    yield put(actions.getUserSuccess({ name: name, isAuthenticated }))
  } catch (err) {
    yield put(actions.getUserFailure(err))
  }
}

export default function* root() {
  yield takeLatest(constants.GET_USER_REQUEST, getUser)
}
