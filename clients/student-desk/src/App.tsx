import React from 'react'
import logo from './logo.svg'
import './App.css'
import HelloWorld from './components/Helloworld'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

/* Pug-babel fix Force tsc/babel/webpack to include element */
HelloWorld // eslint-disable-line @typescript-eslint/no-unused-expressions
logo // eslint-disable-line @typescript-eslint/no-unused-expressions
React // eslint-disable-line @typescript-eslint/no-unused-expressions
LoginButton // eslint-disable-line @typescript-eslint/no-unused-expressions
LogoutButton // eslint-disable-line @typescript-eslint/no-unused-expressions

declare const pug: any

function App (): any {
  return pug`
    div.App
      header.App-header
        img.App-logo(src=logo alt="logo2")

      HelloWorld

      .row 
        .col.m6
          LoginButton

        .col.m6
          LogoutButton
  `
}

export default App
