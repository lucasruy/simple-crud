import React from 'react'
import { Link } from 'react-router-dom'
import './no-match.css'

import { Button } from 'components/Button'
import { FadeTransition } from 'components/FadeTransition'
import { Card, CardHeader, CardContent } from 'components/Card'

const NoMatch = () => (
  <FadeTransition>
    <div className="no-match">
      <Card>
        <CardHeader title="404" background="black" />
        <CardContent>
          <h3>Page not found</h3>
          <p>It looks like you&apos;re lost</p>
          <Button type="button">
            <Link to="/home">Take me out of here</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  </FadeTransition>
)

export default NoMatch
