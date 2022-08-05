import React, { Component } from 'react'
import { withAuth0, WithAuth0Props } from '@auth0/auth0-react'

React // eslint-disable-line @typescript-eslint/no-unused-expressions

declare const pug: any

interface fetchParameter {
  url: string
  method: string
  body: object | undefined
}

class HelloWorld extends Component<WithAuth0Props> {
  state = {
    message: 'Waiting for message...'
  }

  componentDidMount (): void {
    this.fetchMessage().catch((error) => console.error(error))
  }

  async fetchMessage (): Promise<string> {
    const response = await fetch('/api/helloworld')
    const data = await response.json()
    this.setState({ message: data.message })
    return data.message
  }

  async secureFetchCall ({
    url = window.location.origin,
    method = 'get',
    body = {}
  }: fetchParameter): Promise<any> {
    const { getAccessTokenSilently } = this.props.auth0
    const auth0Params = {
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      scope: process.env.REACT_APP_AUTH0_SCOPE
    }

    try {
      const token = await getAccessTokenSilently({
        audience: auth0Params.audience,
        scope: auth0Params.scope
      })

      const res = await fetch(url, {
        method,
        body: method !== 'get' ? JSON.stringify(body) : null,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const data = await res.json()
      return data
    } catch (e) {
      console.log(e)
    }
  }

  render (): any {
    const { user, isAuthenticated } = this.props.auth0

    return pug`
      .row 
        h1.col.m6.offset-m3= this.state.message

      .row.Profile
        if( isAuthenticated )
          img.col.s12(src=user.picture alt=user.name)
      
          h2.col.s12= user.name
      
          p.col.s12= user.email  
      
        else 
          span.col.s12 Loading ....
      `
  }
}

export default withAuth0(HelloWorld)
