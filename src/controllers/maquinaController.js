const maquinaModel = require('../models/maquinaModel')

const registrarMaquina = async (req, res) => {
    const { nombre, tipo } = req.body

    if(!nombre) {
        return res.status(400).json({
            status: "Error",
            message: "El nombre de la maquina es obligatorio."
        })
    }

    try {
        const nuevaMaquina = await maquinaModel.crearMaquina(nombre, tipo)
        res.status(201).json({
            status: "Éxito",
            message: "Maquina registrada correctamente en el sistema",
            data: nuevaMaquina
        })
    } catch (error) {
        console.error("Error en registrar maquina", error)
        res.status(500).json({
            status: "Error",
            message: "Error interno del servidor al registrar la maquina."
        })
    }
}

module.exports = { registrarMaquina }