import * as constants from 'constants/modules/userConstants'

export const getUser = (username) => ({
  type: constants.GET_USER_REQUEST,
  username,
})

export const getUserSuccess = (payload) => ({
  type: constants.GET_USER_SUCCESS,
  payload,
})

export const getUserFailure = (error) => ({
  type: constants.GET_USER_FAILURE,
  error,
})
