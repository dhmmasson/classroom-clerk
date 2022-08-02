import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { resolve } from 'path'
import morgan from 'morgan' // Morgan is a middleware for express
dotenv.config()

// Placeholder for the API... should move to its own
const apiServer: Express = express()
const port = '3001'

apiServer.get('/', (req: Request, res: Response) => {
  // if production redirect to student-desk/
  if (process.env.NODE_ENV === 'production') {
    res.redirect(
      `http://${req.hostname}:${process.env.PORT ?? 8000}/student-desk/`
    )
  } else {
    // redirect to port 3001
    res.redirect(`http://localhost:${process.env.PORT ?? 8000}`)
  }
})

apiServer.get('/api/helloworld', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the student desk' })
})

apiServer.listen(port, () => {
  console.log(
    `⚡️[server]: Server is running in ${
      process.env.NODE_ENV ?? 'dev'
    } mode at https://localhost:${port}`
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
  studentDesk.listen(8000, () => {
    console.log(
      `⚡️[student-desk]: Server is running at https://localhost:${
        process.env.PORT ?? 8800
      }`
    )
  })
}
