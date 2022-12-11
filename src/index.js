const express = require('express')

const hello = require('./hello/routes')
const todos = require('./todos/routes')
const users = require('./users/routes')

const logger = require('./middlewares/logger')
const errorHandler = require('./middlewares/error')

const app = express()
const router = express.Router()

app.use(errorHandler())

app.use('/api',router)

app.listen(3000,'0.0.0.0',() =>{
  console.log('server started')
}).once('error', () => {
  console.error(error);
  process.exit(1);
})
