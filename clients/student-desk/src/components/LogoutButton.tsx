import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
React // eslint-disable-line @typescript-eslint/no-unused-expressions
declare const pug: any

const LogoutButton = (): any => {
  const { logout } = useAuth0()

  return pug`
    button.btn(onClick=() => logout({ returnTo: window.location.origin })) Log Out
    `
}

export default LogoutButton
