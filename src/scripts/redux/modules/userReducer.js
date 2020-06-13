import * as constants from 'constants/modules/userConstants'

const INITIAL_STATE = {
  user: {
    isRequest: true,
    payload: {
      name: null,
      isAuthenticated: false,
    },
    error: {},
  },
}

export default function posts(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case constants.GET_USER_REQUEST:
      return {
        ...state,
        user: {
          ...state.user,
          isRequest: true,
        },
      }

    case constants.GET_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          isRequest: false,
          payload: {
            ...state.user.payload,
            ...action.payload,
          },
        },
      }

    case constants.GET_USER_FAILURE:
      return {
        ...state,
        user: {
          ...state.user,
          isRequest: false,
          error: action.error,
        },
      }

    default:
      return state
  }
}
