const express = require('express')
const router = express.Router()
const controller = require('../controller/user.controller')

router.get('/join', controller.getJoin)

router.post('/join', controller.postJoin)

router.get('/welcome', controller.getWelcome)

router.get('/login', controller.getLogin)

router.post('/login', controller.postLogin)

router.get('/logout', controller.getLogout)

router.get('/profile', controller.getProfile)

module.exports = router