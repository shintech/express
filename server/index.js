const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const router = require('./router')

module.exports = ({ logger, port, environment }) => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(compression())

    .use('/api', (req, res, next) => {
      res.on('finish', () => {
        logger.info(`${res.statusCode} - ${req.method} - ${req.url}`)
      })

      let headers = {
        'Content-Type': 'application/json'
      }

      res.set(headers)

      req.logger = logger
      next()
    })

    .use('/api', router)

    .use((req, res) => {
      let response = {
        status: 'not found'
      }

      res.status(404)
      res.write(JSON.stringify(response))
      res.end()
    })

  return server
}
