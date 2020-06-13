import React from 'react'
import PropTypes from 'prop-types'
import './post.css'

import { Card, CardHeader, CardContent } from 'components/Card'

import PostInteractions from './PostInteractions'

const Post = ({ id, title, content, author, date }) => {
  return (
    <div className="post">
      <Card>
        <CardHeader title={title} background="black" extra={<PostInteractions id={id} author={author} />} />
        <CardContent>
          <div className="post__infos">
            <p>@{author}</p>
            <p>{date}</p>
          </div>
          <div className="post__content">{content}</div>
        </CardContent>
      </Card>
    </div>
  )
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default Post
