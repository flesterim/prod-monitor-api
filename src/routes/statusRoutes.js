// src/routes/statusRoutes.js
const express = require('express');
const router = express.Router();
const statusController = require('../../controllers/statusController');

// Aquí definimos que esta ruta usará la lógica del controlador
router.get('/status', statusController.getStatus);

module.exports = router;