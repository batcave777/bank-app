const path = require('path')
const express = require('express')
const jsonServer = require('json-server')
const clone = require('clone')
const data = require('./api/db.json')

const app = express()
const router = jsonServer.router(clone(data))

app.use((req, res, next) => {
  router.db.setState(clone(data))
  next()
})

app.use(jsonServer.defaults({
  logger: process.env.NODE_ENV !== 'production'
}))

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.use('/api', router)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})