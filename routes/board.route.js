const express = require('express')
const router = express.Router()
const controller = require('../controller/board.controller')

// list
router.get('/list', controller.getList)

// view
router.get('/view', controller.getView)

// write
router.get('/write', controller.getWrite)
router.post('/write', controller.postWrite)

// modify
router.get('/modify', controller.getModify)
router.post('/modify', controller.postModify)

// delete
router.post('/view', controller.postDelete)

module.exports = router
