import * as constants from 'constants/ui/editModalConstants'

const INITIAL_STATE = {
  isOpen: false,
  id: null,
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case constants.UI_EDIT_MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
        id: action.payload,
      }

    case constants.UI_EDIT_MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
        id: null,
      }

    default:
      return state
  }
}
