const express = require('express')
const router = express.Router()
const indexPage = require('./index.route')
const user = require('./user.route')
const board = require('./board.route')
const admin = require('./admin.route')

router.use('/', indexPage)
router.use('/user', user)
router.use('/board', board)
router.use('/admin', admin)

module.exports = router