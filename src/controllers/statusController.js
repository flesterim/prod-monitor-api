const pool = require('../config/db')

const getStatus = async (req, res) => {
    try {
        const dbResult = await pool.query('SELECT NOW() as db_time')
    
        res.json({
            status: "Online",
            message: "sistema de monitoreo de Produccion Activo",
            api_timestamp: new Date(),
            database_timestamp: dbResult.rows[0].db_time
        })
    } catch (error){
        console.log("Error al conectar con la base de datos:", error)
        res.sattus(500).json({
            status: "Error",
            message: "El servidor funciona, pero no se pudo conectar a PostgreSQL",
            error: error.message
        })
    }
}

module.exports = { getStatus };