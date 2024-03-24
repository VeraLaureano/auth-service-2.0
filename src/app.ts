import express, { Request, Response } from 'express'
import cors from 'cors'

// Create an express application
const app = express()

// Set up middleware functions
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

// Set up routing
app.use('/', (_req: Request, res: Response) => {
  res.send('Hello World')
})
