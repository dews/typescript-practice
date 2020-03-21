import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import morgan from 'morgan'
import { AppRouter } from './AppRouter'
import './controllers/LoginController'
import './controllers/RootController'

const app = express()
app.use(morgan('dev'))
app.use(cookieSession({ name: 'yyy', keys: ['sdfsglek'], maxAge: 60 * 1000 }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req, res, next) {
  req.session.nowInMinutes = Math.floor(Date.now() / 60e3)
  next()
})
app.use(AppRouter.getInstance())

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
