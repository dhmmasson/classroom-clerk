import React, { Component } from 'react'
import { withAuth0, WithAuth0Props } from '@auth0/auth0-react'

React // eslint-disable-line @typescript-eslint/no-unused-expressions

declare const pug: any

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
