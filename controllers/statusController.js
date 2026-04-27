// src/controllers/statusController.js
const getStatus = (req, res) => {
    res.json({ 
        status: "Online", 
        message: "Sistema de Monitoreo de Producción Activo",
        timestamp: new Date() // Agregamos la hora para que sea más informativo
    });
};

module.exports = { getStatus };