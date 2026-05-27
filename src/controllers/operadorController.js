const operadorModel = require('../models/operadorModel')

const registrarOperador = async (req, res) => {
    const { nombre, codigo_empleado, turno } = req.body

    if(!nombre || !codigo_empleado) {
        return res.status(400).json({
            status: "Error",
            message: "El nombre y el codigo de empleados son obligatorios."
        })
    }

    try {
        const nuevoOperador = await operadorModel.crearOperador(nombre, codigo_empleado, turno)
        res.status(201).json({
            status: "Exito",
            message: "Operador registrado en el sistema",
            data: nuevoOperador
        })
    } catch (error) {
        console.error("Error en registrar operador:",  error)

        if(error.code === '23505') {
            return res.status(400).json({
                status: "Error",
                message: "Ya existe un operador registrado con ese codigo de empleado."
            })
        }
        res.status(500).json({
            status: "Error",
            message: "Error interno al registrar el operador."
        })
    }
}

module.exports = { registrarOperador }