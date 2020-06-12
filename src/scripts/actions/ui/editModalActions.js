import * as constants from 'constants/ui/editModalConstants'

export const setModalOpen = (payload) => ({
  type: constants.UI_EDIT_MODAL_OPEN,
  payload,
})

export const setModalClose = () => ({
  type: constants.UI_EDIT_MODAL_CLOSE,
})
