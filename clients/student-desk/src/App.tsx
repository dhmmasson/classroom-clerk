import React from 'react'
import logo from './logo.svg'
import './App.css'
import HelloWorld from './helloworld'
HelloWorld // eslint-disable-line @typescript-eslint/no-unused-expressions
logo // eslint-disable-line @typescript-eslint/no-unused-expressions
React // eslint-disable-line @typescript-eslint/no-unused-expressions
declare const pug: any

function App (): any {
  return pug`
    div.App
    header.App-header
      img.App-logo(src=logo alt="logo2")
      p
        | Edit 
        code src/App.tsx
        |  and save to reload.

      a.App-link(href="https://reactjs.org" target="_blank" rel="noopener noreferrer")
        | Learn React

      HelloWorld
  `
}

export default App
