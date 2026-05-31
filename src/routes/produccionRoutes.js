const express = require('express')
const router = express.Router()
const produccionController = require('../controllers/produccionController')

router.post('/', produccionController.registrarProduccion)

module.exports = router