const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Database Connection
const uri = "mongodb+srv://thibaultc:EDj2qHX2M2edzJ0X@cluster0.0tmeofe.mongodb.net/";
mongoose.connect(uri)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => console.error('Connexion à MongoDB échouée !', error));

// Routes
const route_api = require('./routes');
app.use('/api/tp_optimisation', route_api);

module.exports = app;
