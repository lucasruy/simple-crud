import * as constants from '../constants/postsConstants'

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
