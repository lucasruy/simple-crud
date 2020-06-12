import * as constants from 'constants/postsConstants'

const INITIAL_STATE = {
  get: {
    isRequest: true,
    payload: [],
    error: {},
  },
  create: {
    isRequest: true,
    payload: [],
    error: {},
  },
  edit: {
    isRequest: true,
    payload: [],
    error: {},
  },
  delete: {
    isRequest: true,
    payload: [],
    error: {},
  },
}

export default function posts(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case constants.GET_ALL_POSTS_REQUEST:
      return {
        ...state,
        get: {
          ...state.get,
          isRequest: true,
        },
      }

    case constants.GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        get: {
          ...state.get,
          isRequest: false,
          payload: action.payload,
        },
      }

    case constants.GET_ALL_POSTS_FAILURE:
      return {
        ...state,
        get: {
          ...state.get,
          isRequest: false,
          error: action.error,
        },
      }

    case constants.CREATE_POST_REQUEST:
      return {
        ...state,
        create: {
          ...state.create,
          isRequest: true,
        },
      }

    case constants.CREATE_POST_SUCCESS:
      return {
        ...state,
        create: {
          ...state.create,
          isRequest: false,
          payload: [...state.create.payload, { ...action.payload }],
        },
      }

    case constants.CREATE_POST_FAILURE:
      return {
        ...state,
        create: {
          ...state.create,
          isRequest: false,
          error: action.error,
        },
      }

    case constants.EDIT_POST_REQUEST:
      return {
        ...state,
        edit: {
          ...state.edit,
          isRequest: true,
        },
      }

    case constants.EDIT_POST_SUCCESS:
      return {
        ...state,
        edit: {
          ...state.edit,
          isRequest: false,
          payload: state.get.payload.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, ...action.payload }
            }
            return item
          }),
        },
      }

    case constants.EDIT_POST_FAILURE:
      return {
        ...state,
        edit: {
          ...state.edit,
          isRequest: false,
          error: action.error,
        },
      }

    case constants.DELETE_POST_REQUEST:
      return {
        ...state,
        delete: {
          ...state.delete,
          isRequest: true,
        },
      }

    case constants.DELETE_POST_SUCCESS:
      return {
        ...state,
        delete: {
          ...state.delete,
          isRequest: false,
          payload: action.payload,
        },
      }

    case constants.DELETE_POST_FAILURE:
      return {
        ...state,
        delete: {
          ...state.delete,
          isRequest: false,
          error: action.error,
        },
      }

    default:
      return state
  }
}
