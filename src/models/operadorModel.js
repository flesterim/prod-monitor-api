// Insertar datos en la tabla de postgres

const pool = require('../config/db')

const crearOperador = async (nombre, codigo_empleado, turno) => {
    const queryText = `
    INSERT INTO operadores (nombre, codigo_empleado, turno)
    VALUES ($1, $2, $3)
    RETURNING *;`
    const values = [nombre, codigo_empleado, turno]

    const { rows } = await pool.query(queryText, values)
    return rows[0]
}

module.exports = { crearOperador }