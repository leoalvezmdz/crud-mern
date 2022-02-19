const express = require('express');

const router = express.Router();

const mongoose = require ('mongoose')

const schema = mongoose.Schema

const schemaUsuario = new schema({
    id: String,
    nombre: String,
    email: String,
    telefono: String,
})

const ModeloUsuario = mongoose.model('usuarios', schemaUsuario)
module.exports = router

//Agregar usuario
router.post('/agregarUsuario', (req, res)=>{
    const nuevoUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        id: req.body.id
    })
    nuevoUsuario.save(function(err){
        if(!err){
            res.send('usuario agregado')
        }else{
            res.send(err)
        }
    })
})

//Obtener todos los usuarios

router.get('/obtenerUsuarios', (req, res) =>{
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Obtener data de usuario


router.post('/obtenerDataUsuario', (req, res) =>{
    ModeloUsuario.find({id: req.body.id}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Editar usuario

router.put('/actualizarUsuario', (req, res)=>{
    ModeloUsuario.findOneAndUpdate({id: req.body.id},{
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) =>{
        if(!err){
            res.send('Usuario actualizado')
        }else{
            res.send(err)
        }
    })
  
})

router.post('/borrarUsuario', (req,res)=>{
    ModeloUsuario.findOneAndDelete({id:req.body.id}, (err)=>{
        if(!err){
            res.send('Usuario borrado')
        }else{
            res.send(err)
        }
    })
})