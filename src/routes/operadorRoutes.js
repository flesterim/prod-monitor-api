const express = require('express')
const router = express.Router()
const operadorcontroller = require('../controllers/operadorController')

router.post('/', operadorcontroller.registrarOperador)

module.exports = router