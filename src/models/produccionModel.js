const pool = require('../config/db')

const crearRegistro = async (id_operador, id_maquina, cantidad_buena, cantidad_mala) => {
    const queryText = `
    INSERT INTO registros_produccion (id_operador, id_maquina, cantidad_buena, cantidad_mala)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    ` 
    const values = [id_operador, id_maquina, cantidad_buena, cantidad_mala]

    const { rows } = await pool.query(queryText, values)
    return rows[0]
}

module.exports = { crearRegistro }