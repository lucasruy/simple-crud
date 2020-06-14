import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import * as postsActions from 'actions/modules/postsActions'

import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Textarea } from 'components/Textarea'
import { Card, CardHeader, CardContent, CardFooter } from 'components/Card'

const CreatePost = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user, shallowEqual)

  const createPost = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    dispatch(
      postsActions.createPost({
        username: user.payload.name,
        title: formData.get('title'),
        content: formData.get('content'),
      })
    )
  }

  return (
    <form onSubmit={createPost}>
      <Card>
        <CardHeader title="What's on your mind?" />
        <CardContent>
          <Input label="Title" name="title" placeholder="Hello world" withoutMargin />
          <Textarea label="Content" name="content" placeholder="Content here" />
        </CardContent>
        <CardFooter align="right">
          <Button withoutMargin>Create</Button>
        </CardFooter>
      </Card>
    </form>
  )
}

export default CreatePost
