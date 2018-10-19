const winston = require('winston')

module.exports = function ({ environment }) {
  let logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),

    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  })

  if (environment !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }))
  }

  return logger
}

// https://github.com/winstonjs/winston/commit/391aa2bcf40991777d828637bea59ea6571df823
