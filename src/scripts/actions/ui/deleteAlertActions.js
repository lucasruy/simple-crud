import * as constants from 'constants/ui/deleteAlertConstants'

export const setAlertOpen = (payload) => ({
  type: constants.UI_DELETE_ALERT_OPEN,
  payload,
})

export const setAlertClose = () => ({
  type: constants.UI_DELETE_ALERT_CLOSE,
})
