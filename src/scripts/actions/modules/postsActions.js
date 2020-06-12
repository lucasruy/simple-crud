import * as constants from 'constants/modules/postsConstants'

export const getAllPosts = () => ({
  type: constants.GET_ALL_POSTS_REQUEST,
})

export const getSuccess = (payload) => ({
  type: constants.GET_ALL_POSTS_SUCCESS,
  payload,
})

export const getFailure = (error) => ({
  type: constants.GET_ALL_POSTS_FAILURE,
  error,
})

export const createPost = (data) => ({
  type: constants.CREATE_POST_REQUEST,
  data,
})

export const createPostSuccess = (payload) => ({
  type: constants.CREATE_POST_SUCCESS,
  payload,
})

export const createPostFailure = (error) => ({
  type: constants.CREATE_POST_FAILURE,
  error,
})

export const editPost = (id, data) => ({
  type: constants.EDIT_POST_REQUEST,
  id,
  data,
})

export const editPostSuccess = (payload) => ({
  type: constants.EDIT_POST_SUCCESS,
  payload,
})

export const editPostFailure = (error) => ({
  type: constants.EDIT_POST_FAILURE,
  error,
})

export const deletePost = (id) => ({
  type: constants.DELETE_POST_REQUEST,
  id,
})

export const deletePostSuccess = (payload) => ({
  type: constants.DELETE_POST_SUCCESS,
  payload,
})

export const deletePostFailure = (error) => ({
  type: constants.DELETE_POST_FAILURE,
  error,
})
