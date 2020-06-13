import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './login.css'

import * as userActions from 'actions/modules/userActions'

import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { FadeTransition } from 'components/FadeTransition'
import { Card, CardHeader, CardContent, CardFooter } from 'components/Card'

const Login = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const getUserInfos = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    dispatch(userActions.getUser(formData.get('username')))
  }

  if (user.payload.isAuthenticated) {
    return <Redirect to="/home" />
  }

  return (
    <FadeTransition>
      <form className="login" onSubmit={getUserInfos}>
        <Card>
          <CardHeader title="Welcome to CodeLeap network!" />
          <CardContent>
            <Input type="text" name="username" label="Please enter your username" placeholder="John Doe" />
          </CardContent>
          <CardFooter align="right">
            <Button type="submit">Enter</Button>
          </CardFooter>
        </Card>
      </form>
    </FadeTransition>
  )
}

export default Login
