const express = require('express');
const app = express();

//importar conexión mongo
const DB = require('./conexion')

//importar ruta y modelo usuario
const rutaUsuario = require('./routes/usuario')

//importar body-parser
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutaUsuario)

app.get('/', (req, res)=>{
    res.end('Bienvenido al server')
})

//Configuración server
app.listen(5000, function(){
    console.log('El servidor esta corriendo correctamente')
})