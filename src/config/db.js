const { Pool } = require('pg');
require('dotenv').config();

// Creamos una instancia del Pool con las variables del .env
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Probamos la conexión al iniciar
pool.on('connect', () => {
    console.log('✅ Conexión establecida con PostgreSQL');
});

pool.on('error', (err) => {
    console.error('Error inesperado en el cliente de Postgres', err);
    process.exit(-1);
});

module.exports = pool;