import React from 'react'
React // eslint-disable-line @typescript-eslint/no-unused-expressions
declare const pug: any

class HelloWorld extends React.Component {
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
    return pug`
      h1= this.state.message
      `
  }
}

export default HelloWorld
