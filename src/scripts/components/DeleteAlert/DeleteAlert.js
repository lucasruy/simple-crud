import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import './delete-alert.css'

import * as postsActions from 'actions/modules/postsActions'
import * as deleteAlertActions from 'actions/ui/deleteAlertActions'

import { Button } from 'components/Button'

const DeleteAlert = () => {
  const dispatch = useDispatch()
  const { alert } = useSelector((state) => state, shallowEqual)

  const closeAlert = () => {
    dispatch(deleteAlertActions.setAlertClose())
  }

  const handleDeletePost = (e) => {
    e.preventDefault()

    dispatch(postsActions.deletePost(alert.id))
    closeAlert()
  }

  if (alert.isOpen) {
    return (
      <div className="alert-delete">
        <span className="alert-delete__overlay" onClick={closeAlert}></span>
        <form className="alert-delete__content" onSubmit={handleDeletePost}>
          <h4 className="alert-delete__content-title">Are you sure you want to delete this item?</h4>
          <div className="alert-delete__content-button">
            <Button type="button" onClick={closeAlert} variant="outline">
              Cancel
            </Button>
            <Button type="submit" variant="outline">
              Ok
            </Button>
          </div>
        </form>
      </div>
    )
  }

  return null
}

export default DeleteAlert
