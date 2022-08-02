import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

React // eslint-disable-line @typescript-eslint/no-unused-expressions
declare const pug: any

const Profile = (): any => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    isAuthenticated &&
    pug`
      div.Profile
        img(src=user.picture alt=user.name)
        
        h2= user.name
        
        p= user.email
    `
  )
}

export default Profile
