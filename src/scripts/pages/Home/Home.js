import React from 'react'
import './home.css'

import { EditModal } from 'components/EditModal'
import { DeleteAlert } from 'components/DeleteAlert'
import { FadeTransition } from 'components/FadeTransition'
import { Card, CardHeader, CardContent } from 'components/Card'

import PostList from './components/PostList'
import CreatePost from './components/CreatePost'

const Home = () => (
  <FadeTransition>
    <div className="home">
      <EditModal />
      <DeleteAlert />
      <Card>
        <CardHeader title="CodeLeap Network" background="black" />
        <CardContent>
          <CreatePost />
          <PostList />
        </CardContent>
      </Card>
    </div>
  </FadeTransition>
)

export default Home
