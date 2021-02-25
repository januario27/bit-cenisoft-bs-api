const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const { PORT } = require('./config')

// Carga y abre la conexión con la base de datos
require('./db')

// Rutas
const bookRoutes = require('./components/book/routes')
const clientRoutes = require('./components/client/routes')
const saleRoutes = require('./components/client/routes')
const detailRoutes = require('./components/detail/routes')

// Middleware para permitir recibir solicitudes HTTP desde cualquier dominio
app.use(cors())
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// Middleware para leer datos en JSON desde el body de la petición
app.use(bodyParser.json())

// Instalación de rutas en el router principal
app.use('/books', bookRoutes)
app.use('/clients', clientRoutes)
app.use('/sales', saleRoutes)
app.use('/sales/details', detailRoutes)

app.use('/covers', express.static('covers'))

app.listen(PORT, () => {
  console.log(`Server APP listening at localhost:${PORT}`)
})
