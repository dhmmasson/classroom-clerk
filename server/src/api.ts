import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { resolve } from 'path'
import morgan from 'morgan' // Morgan is a middleware for express
dotenv.config()

// Placeholder for the API... should move to its own
const apiServer: Express = express()
const port = process.env.PORT ?? '3001'
const studentDeskPath = 'clients/student-desk/build/'

// Redirect to student desk if access to root
apiServer.get('/', (req: Request, res: Response) => {
  res.redirect(`http://${req.hostname}:${port}/student-desk/`)
})

// API
apiServer.get('/api/helloworld', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the student desk' })
})

// Client
apiServer.use('/student-desk', express.static(resolve(studentDeskPath)))
apiServer.get(
  '/.well-known/microsoft-identity-association.json',
  (req: Request, res: Response) => {
    res.sendFile(
      resolve(
        studentDeskPath,
        'static',
        '.well-known',
        'microsoft-identity-association.json'
      )
    )
  }
)
apiServer.get('/student-desk/', (req: Request, res: Response) => {
  res.sendFile(resolve(studentDeskPath, 'index.html'))
})

apiServer.use(morgan('dev'))

apiServer.listen(port, () => {
  console.log(
    `⚡️[server]: Server is running in ${
      process.env.NODE_ENV ?? 'dev'
    } mode at https://localhost:${port}`
  )
})
