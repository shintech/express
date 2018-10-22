const router = require('express').Router()
const { trees } = require('./routes')

router.route('/trees')
  .get(trees.getTrees)

module.exports = router
