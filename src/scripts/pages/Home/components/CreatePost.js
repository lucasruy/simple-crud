import React from 'react'

import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Textarea } from 'components/Textarea'
import { Card, CardHeader, CardContent, CardFooter } from 'components/Card'

const CreatePost = () => (
  <Card>
    <CardHeader title="What's on your mind?" />
    <CardContent>
      <Input label="Title" name="title" placeholder="Hello world" withoutMargin />
      <Textarea label="Content" name="content" placeholder="Content here" />
    </CardContent>
    <CardFooter align="right">
      <Button type="button" withoutMargin>
        Create
      </Button>
    </CardFooter>
  </Card>
)

export default CreatePost
