import * as constants from 'constants/ui/deleteAlertConstants'

const INITIAL_STATE = {
  isOpen: false,
  id: null,
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case constants.UI_DELETE_ALERT_OPEN:
      return {
        ...state,
        isOpen: true,
        id: action.payload,
      }

    case constants.UI_DELETE_ALERT_CLOSE:
      return {
        ...state,
        isOpen: false,
        id: null,
      }

    default:
      return state
  }
}
