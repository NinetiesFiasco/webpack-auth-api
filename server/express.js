import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

import devBundle from './devBundle'

import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

const CURRENT_WORKING_DIR = process.cwd()

const app = express()
devBundle.compile(app)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.get('/favicon.ico', (req, res) => {
  res.status(200).sendFile(path.join(CURRENT_WORKING_DIR, 'assets/favicon.ico'))
})

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.use('/', userRoutes)
app.use('/', authRoutes)

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ "error": err.name + ": " + err.message })
  } else if (err) {
    res.status(400).json({ "error": err.name + ": " + err.message })
    console.log(err)
  }
})

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(CURRENT_WORKING_DIR, 'template.html'))
})

export default app

