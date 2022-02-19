import React, { useState } from 'react'
import { Navbar } from './Navbar'
import uniquid from 'uniqid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const AgregarUsuario = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const navigate = useNavigate()

  const agregarUsuario = () => {
    const usuario = {
      id: uniquid(),
      nombre: nombre,
      email: email,
      telefono: telefono
    }
    console.log(usuario)

    axios.post('/api/usuario/agregarUsuario', usuario)
    .then(res => {
      //alert(res.data)
      Swal.fire('Correcto', 'El usuario se creó exitosamente', 'success')
      navigate('/')
    })
    .then(err =>{console.log(err)})
  }


  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <h2 className='mt-4'>Agregar usuario</h2>
        </div>
        <div className='row'>
          <div className='col-sm-6 offset-3'>
            <div className='mb-3'>
              <label htmlFor='nombre' className='form-label'>Nombre</label>
              <input type='text' className='form-control' value={nombre} onChange={(e) => { setNombre(e.target.value) }} id='nombre' />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input type='email' className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }} id='email' />
            </div>
            <div className='mb-3'>
              <label htmlFor='tel' className='form-label'>Tel.</label>
              <input type='tel' className='form-control' value={telefono} onChange={(e) => { setTelefono(e.target.value) }} id='tel' />
            </div>
            <button onClick={agregarUsuario} className='btn btn-success'>Guardar</button>
          </div>
        </div>
      </div>
    </>
  )
}
