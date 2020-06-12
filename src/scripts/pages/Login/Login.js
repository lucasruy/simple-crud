import React from 'react'
import './login.css'

import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Card, CardHeader, CardContent, CardFooter } from 'components/Card'

const Login = () => (
  <div className="login">
    <Card>
      <CardHeader title="Welcome to CodeLeap network!" />
      <CardContent>
        <Input type="text" label="Please enter your username" placeholder="John Doe" />
      </CardContent>
      <CardFooter align="right">
        <Button>Enter</Button>
      </CardFooter>
    </Card>
  </div>
)

export default Login
