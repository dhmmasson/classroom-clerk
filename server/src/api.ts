import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { resolve } from 'path'
import morgan from 'morgan' // Morgan is a middleware for express
dotenv.config()

// Placeholder for the API... should move to its own
const apiServer: Express = express()
const apiPort = '3001'
const clientPort = process.env.PORT ?? '8000'

apiServer.get('/', (req: Request, res: Response) => {
  // if production redirect to student-desk/
  if (process.env.NODE_ENV === 'production') {
    res.redirect(`http://${req.hostname}:${clientPort}/student-desk/`)
  } else {
    // redirect to port 3001
    res.redirect(`http://localhost:${clientPort}`)
  }
})

apiServer.get('/api/helloworld', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the student desk' })
})

apiServer.listen(apiPort, () => {
  console.log(
    `⚡️[server]: Server is running in ${
      process.env.NODE_ENV ?? 'dev'
    } mode at https://localhost:${apiPort}`
  )
})

if (process.env.NODE_ENV === 'production') {
  // serve static assets from clients/student-desk/
  const studentDeskPath = 'clients/student-desk/build/'
  const studentDesk: Express = express()
  studentDesk.use(morgan('dev'))
  console.log(
    '⚡️[server]: Serving static assets from',
    resolve(studentDeskPath)
  )
  studentDesk.use('/student-desk', express.static(resolve(studentDeskPath)))
  studentDesk.get('/student-desk/', (req: Request, res: Response) => {
    res.sendFile(resolve(studentDeskPath, 'index.html'))
  })
  studentDesk.listen(clientPort, () => {
    console.log(
      `⚡️[student-desk]: Server is running at https://localhost:${clientPort}`
    )
  })
}
