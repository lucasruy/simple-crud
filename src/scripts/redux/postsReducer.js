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
        posts: {
          ...state.posts,
        },
      }

    case constants.GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          ...state.posts,
          isRequest: false,
          payload: action.payload,
        },
      }

    case constants.GET_ALL_POSTS_FAILURE:
      return {
        ...state,
        posts: {
          ...state.posts,
          isRequest: false,
          error: action.error,
        },
      }

    default:
      return state
  }
}
