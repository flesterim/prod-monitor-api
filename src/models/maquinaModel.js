const pool = require('../config/db')

const crearMaquina = async (nombre, tipo) => {
    const queryText = `
    INSERT INTO maquinas (nombre, tipo)
    VALUES ($1, $2)
    RETURNING *;
    `
    const values = [nombre, tipo]

    const { rows } = await pool.query(queryText, values)
    return rows[0]
}

module.exports = { crearMaquina }