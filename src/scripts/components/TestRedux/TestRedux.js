import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './test-redux.css'

import * as postsActions from 'actions/modules/postsActions'
import * as editModalActions from 'actions/ui/editModalActions'

const TestRedux = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)

  const openModal = (id) => {
    dispatch(editModalActions.setModalOpen(id))
  }

  const sendToCreatePost = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    dispatch(
      postsActions.createPost({
        username: formData.get('username'),
        title: formData.get('title'),
        content: formData.get('content'),
      })
    )
  }

  const sendToDeletePost = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    dispatch(postsActions.deletePost(formData.get('id')))
  }

  useEffect(() => {
    dispatch(postsActions.getAllPosts())
  }, [])

  return (
    <div className="test-redux">
      <h4>Get data from store.</h4>

      <form onSubmit={sendToCreatePost}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="content">Content:</label>
        <input type="text" id="content" name="content" />
        <button>Create a post</button>
      </form>

      <form onSubmit={sendToDeletePost}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" />
        <button>Delete post</button>
      </form>

      <ul>
        {posts.get.payload.map((post) => (
          <li key={post.id} onClick={() => openModal(post.id)}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TestRedux
