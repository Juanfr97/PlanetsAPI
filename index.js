const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const universe = require('./routes/universe');
const planets = require('./routes/planets');
app.use(cors());
app.use(bodyParser.json());
app.use('/api/universe',universe)
app.use('/api/planets',planets)
dotenv.config();
const dbConnectionString = process.env.DB_CONNECTION_STRING;
mongoose.connect(
    dbConnectionString
    , {useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=> console.log('Conexion a MongoDB exitosa'))
    .catch(err => console.error('No de pudo conectar con MongoDB', err))

app.listen(3000, () =>{
    console.log("Servidor corriendo en el puerto 3000")
})