const express = require('express')
const router = express.Router()
const controller = require('../controller/admin.controller')

router.get('/', controller.getLogin)
router.post('/', controller.postLogin)

router.get('/userList', controller.getAdmin)
router.post('/userList', controller.postUpdate)

router.get('/userEdit', controller.getProfile)



module.exports = router