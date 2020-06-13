import React from 'react'
import './home.css'

import { Card, CardHeader, CardContent } from 'components/Card'

import CreatePost from './components/CreatePost'

const Home = () => (
  <div className="home">
    <Card>
      <CardHeader title="CodeLeap Network" background="black" />
      <CardContent>
        <CreatePost />
      </CardContent>
    </Card>
  </div>
)

export default Home
