const produccionModel = require('../models/produccionModel')

const registrarProduccion = async (req, res) => {
    const { id_operador, id_maquina, cantidad_buena, cantidad_mala } = req.body

    if (id_operador === undefined || id_maquina === undefined || cantidad_buena === undefined || cantidad_mala === undefined) {
        return res.status(400).json({
            status: "Error",
            message: "Todos los campos son obligatorios."
        })
    }

    try {
        const nuevoRegistro = await produccionModel.crearRegistro(id_operador, id_maquina, cantidad_buena, cantidad_mala)
        res.status(201).json({
            status: "Éxito",
            mesagge: "Reporte de producción guardado correctamente",
            data: nuevoRegistro
        })
    }
    catch (error) {
        console.error("Error en registrarProducción: ", error)

        if(error.code === '23503'){
            return res.status(400).json({
                status: "Error",
                message: "Operación invalida. el id_operador o id_maquina no existe en el sistema."
            })
        }

        res.status(500).json({
            status: "Error",
            message: "Error interno al procesar el registro de producción."
        })
    }
}

module.exports = { registrarProduccion }