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

    case constants.CREATE_POST_REQUEST:
      return {
        ...state,
      }

    case constants.CREATE_POST_SUCCESS:
      return {
        ...state,
        isRequest: false,
        payload: [...state.payload, ...action.payload],
      }

    case constants.CREATE_POST_FAILURE:
      return {
        ...state,
        isRequest: false,
        error: action.error,
      }

    case constants.EDIT_POST_REQUEST:
      return {
        ...state,
      }

    case constants.EDIT_POST_SUCCESS:
      return {
        ...state,
        isRequest: false,
        payload: state.payload.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload }
          }
          return item
        }),
      }

    case constants.EDIT_POST_FAILURE:
      return {
        ...state,
        isRequest: false,
        error: action.error,
      }

    case constants.DELETE_POST_REQUEST:
      return {
        ...state,
      }

    case constants.DELETE_POST_SUCCESS:
      return {
        ...state,
        isRequest: false,
        payload: state.payload,
      }

    case constants.DELETE_POST_FAILURE:
      return {
        ...state,
        isRequest: false,
        error: action.error,
      }

    default:
      return state
  }
}
