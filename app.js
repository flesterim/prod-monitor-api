const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())

const statusRoutes = require('./src/routes/statusRoutes')
const operadorRoutes = require('./src/routes/operadorRoutes')
const maquinaRoutes = require('./src/routes/maquinaRoutes')

// Definimos un prefijo para todas nuestras rutas de la API
app.use('/api/status', statusRoutes);
app.use('/api/operadores', operadorRoutes)
app.use('/api/maquinas', maquinaRoutes)

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Monitoreo de Producción. Visita /api/status');
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});