import { call, put, takeLatest } from 'redux-saga/effects'

import * as service from '../service/postsService'
import * as actions from '../actions/postsActions'
import * as constants from '../constants/postsConstants'

function* getAllPosts() {
  try {
    const { results } = yield call(service.getAllPosts)

    yield put(actions.getSuccess(results))
  } catch (err) {
    yield put(actions.getFailure(err))
  }
}

export default function* root() {
  yield takeLatest(constants.GET_ALL_POSTS_REQUEST, getAllPosts)
}
