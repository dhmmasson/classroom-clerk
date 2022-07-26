import exp from 'constants'
import React from 'react'

class HelloWorld extends React.Component {
  state = {
    message: 'Waiting for message...'
  }
  componentDidMount() {
    this.fetchMessage()
  }
  async fetchMessage() {
    const response = await fetch('/api/helloworld')
    const data = await response.json()
    this.setState({ message: data.message })
    return data.message
  }
  render() {
    return <h1>{this.state.message}</h1>
  }
}

export default HelloWorld
