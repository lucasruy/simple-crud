import React from 'react'
import './home.css'

import { EditModal } from 'components/EditModal'
import { DeleteAlert } from 'components/DeleteAlert'
import { Card, CardHeader, CardContent } from 'components/Card'

import { Post } from './components/Post'
import CreatePost from './components/CreatePost'

const Home = () => (
  <div className="home">
    <EditModal />
    <DeleteAlert />
    <Card>
      <CardHeader title="CodeLeap Network" background="black" />
      <CardContent>
        <CreatePost />
        <ul>
          <li>
            <Post
              id={52}
              title="My first post at CodeLeap NetWork"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              author="Lucas"
              date="1 minute ago"
            />
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
)

export default Home
