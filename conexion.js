const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.r24ok.mongodb.net/crudmern?retryWrites=true&w=majority')

const db = mongoose.connection

db.on('connected', ()=>{console.log('Conexion correcta a Mongo')})
db.on('error', ()=>{console.log('Error en conexion a Mongo')})

module.exports = mongoose