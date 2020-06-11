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

function* createPost({ data }) {
  try {
    const response = yield call(service.createPost, data)

    yield put(actions.createPostSuccess(response.data))
  } catch (err) {
    yield put(actions.createPostFailure(err))
  }
}

function* editPost({ id, data }) {
  try {
    const response = yield call(service.editPost, id, data)

    yield put(actions.editPostSuccess(response.data))
  } catch (err) {
    yield put(actions.editPostFailure(err))
  }
}

export default function* root() {
  yield takeLatest(constants.GET_ALL_POSTS_REQUEST, getAllPosts)
  yield takeLatest(constants.CREATE_POST_REQUEST, createPost)
  yield takeLatest(constants.EDIT_POST_REQUEST, editPost)
}
