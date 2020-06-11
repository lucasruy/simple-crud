import * as constants from '../constants/postsConstants'

const INITIAL_STATE = {
  isRequest: true,
  payload: [],
  error: {},
}

export default function posts(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case constants.GET_ALL_POSTS_REQUEST:
      return {
        ...state,
      }

    case constants.GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        isRequest: false,
        payload: action.payload,
      }

    case constants.GET_ALL_POSTS_FAILURE:
      return {
        ...state,
        isRequest: false,
        error: action.error,
      }

    default:
      return state
  }
}
