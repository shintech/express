const router = require('express').Router()
const { trees } = require('./routes')

module.exports = function (config) {
  router.route('/trees')
    .get(trees.getTrees)

  return router
}
