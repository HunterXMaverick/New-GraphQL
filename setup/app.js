;
'use strict'

const express = require('express')

let app = express(),
    schemaRutas = require("../rutas/schema.routes")

//Rutas
app.use('/gql', schemaRutas);

module.exports = app;