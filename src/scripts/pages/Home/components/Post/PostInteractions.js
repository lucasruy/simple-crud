import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import EditSVG from '../../../../../assets/images/svg/icon-edit.svg'
import DeleteSVG from '../../../../../assets/images/svg/icon-delete.svg'

import * as editModalActions from 'actions/ui/editModalActions'
import * as deleteAlertActions from 'actions/ui/deleteAlertActions'

const PostInteractions = ({ id }) => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(editModalActions.setModalOpen(id))
  }

  const openAlert = () => {
    dispatch(deleteAlertActions.setAlertOpen(id))
  }

  return (
    <div className="post__interactions">
      <span className="icon" onClick={openAlert}>
        <img src={DeleteSVG} />
      </span>
      <span className="icon" onClick={openModal}>
        <img src={EditSVG} />
      </span>
    </div>
  )
}

PostInteractions.propTypes = {
  id: PropTypes.number.isRequired,
}

export default PostInteractions
