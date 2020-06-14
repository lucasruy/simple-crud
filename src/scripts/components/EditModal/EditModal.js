import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import './edit-modal.css'

import * as postsActions from 'actions/modules/postsActions'
import * as editModalActions from 'actions/ui/editModalActions'

import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Textarea } from 'components/Textarea'
import { FadeTransition } from 'components/FadeTransition'

const EditModal = () => {
  const dispatch = useDispatch()
  const { modal } = useSelector((state) => state, shallowEqual)

  const closeModal = () => {
    dispatch(editModalActions.setModalClose())
  }

  const handleEditPost = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    dispatch(
      postsActions.editPost(modal.id, {
        title: formData.get('title'),
        content: formData.get('content'),
      })
    )
    closeModal()
  }

  if (modal.isOpen) {
    return (
      <FadeTransition>
        <div className="modal-edit">
          <span className="modal-edit__overlay" onClick={closeModal}></span>
          <form className="modal-edit__content" onSubmit={handleEditPost}>
            <h4 className="modal-edit__content-title">Edit item</h4>
            <Input label="Title" type="text" name="title" placeholder="Hello word" />
            <Textarea label="Content" name="content" placeholder="Content here" />
            <div className="modal-edit__content-button">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>
      </FadeTransition>
    )
  }

  return null
}

export default EditModal
