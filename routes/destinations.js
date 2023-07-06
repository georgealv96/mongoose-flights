var express = require('express')
var router = express.Router()

// Create a controller module
const destinationsCtrl = require('../controllers/destinations')

// POST /flights/:id/
router.post('/flights/:id', destinationsCtrl.create)

module.exports = router
