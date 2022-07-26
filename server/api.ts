import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = '3001'

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/api/helloworld', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
