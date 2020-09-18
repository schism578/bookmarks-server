require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const validateBearerToken = require('./validate-bearer-token')
const errorHandler = require('./error-handler')
const bookmarksRouter = require('./bookmark/bookmark-router')
const BookmarksService = require('./bookmarks-service')

const app = express()

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => NODE_ENV === 'test'
}))
app.use(cors())
app.use(helmet())
app.use(validateBearerToken)

app.use(bookmarksRouter)

app.get('/bookmarks', (req, res, next) => {
  const knexInstance = req.app.get('db')
  BookmarksService.getAllBookmarks(knexInstance)
    .then(bookmarks => {
      if (!bookmark) {
        return res.status(404).json({
          error: { message: `Bookmark doesn't exist` }
        })
      }        
      res.json(bookmarks)
    })
    .catch(next)
})

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.use(errorHandler)


module.exports = app