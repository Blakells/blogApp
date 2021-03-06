const config = require('./utils/config')
const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const path = require('path')



//connect to databse
mongoose.connect(config.MONGODB_URI, ({useNewUrlParser: true, useUnifiedTopology: true}))
.then(() => {
    logger.info('connected to MongoDB')
})
.catch((err) => {
    logger.error('error connection to MongoDB', err.message)
})

app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

if (process.env.NODE_ENV === 'test') {
    const testingRouter = require('./controllers/testing')
    app.use('/api/testing', testingRouter)
  }

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app