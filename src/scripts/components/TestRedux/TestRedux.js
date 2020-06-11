import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './test-redux.css'
import * as postsActions from '../../actions/postsActions'

const TestRedux = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)

  const sendToCreatePost = () => {
    dispatch(
      postsActions.createPost({
        username: 'Dean Smith',
        title: 'Aston Villa Football Club',
        content: 'Villa have a fierce local rivalry with Birmingham City and the Second City derby between the teams has been played since 1879.',
      })
    )
  }

  const sendToEditPost = () => {
    dispatch(
      postsActions.editPost(21, {
        title: 'Newcastle United Football Club',
        content: 'Is an English professional football club based in Newcastle, that plays in the Premier League, the top flight of English football.',
      })
    )
  }

  const sendToDeletePost = () => {
    dispatch(postsActions.deletePost(20))
  }

  useEffect(() => {
    dispatch(postsActions.getAllPosts())
  }, [])

  return (
    <div className="test-redux">
      <h4>Get data from store.</h4>
      <button type="button" onClick={sendToCreatePost}>
        Create a post
      </button>
      <button type="button" onClick={sendToEditPost}>
        Edit post
      </button>
      <button type="button" onClick={sendToDeletePost}>
        Delete post
      </button>
      <ul>
        {posts.payload.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TestRedux
