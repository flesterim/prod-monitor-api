const express = require('express');
const app = express();
const statusRoutes = require('./src/routes/statusRoutes'); // Importamos las rutas

app.use(express.json());

// Definimos un prefijo para todas nuestras rutas de la API
app.use('/api', statusRoutes);

// Ruta raíz opcional para que no salga el error de antes
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Monitoreo de Producción. Visita /api/status');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});