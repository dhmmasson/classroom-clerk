import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
React // eslint-disable-line @typescript-eslint/no-unused-expressions
declare const pug: any

const LoginButton = (): any => {
  const { loginWithRedirect } = useAuth0()

  return pug`
    button.btn(onClick=() => loginWithRedirect()) Log In
    `
}

export default LoginButton
