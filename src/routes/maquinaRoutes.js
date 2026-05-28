const express = require('express')
const router = express.Router()
const maquinaController = require('../controllers/maquinaController')

router.post('/', maquinaController.registrarMaquina)

module.exports = router