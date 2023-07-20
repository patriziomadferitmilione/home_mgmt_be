const express = require('express')
const app = express()

// Import route files
const listaSpesaRoute = require('./listaSpesa.js')

// Register route files
app.use('/listaSpesa', listaSpesaRoute)

module.exports = app
