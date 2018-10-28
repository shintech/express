const path = require('path')

const environment = 'test'
const port = 8000
const logger = require('shintech-logger')({ environment })

global._logger = logger

global._server = require(path.join(__dirname, 'server'))({ logger, environment, port })
