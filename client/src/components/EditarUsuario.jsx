import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Navbar } from './Navbar'
import Swal from 'sweetalert2'

export const EditarUsuario = () => {
  const params = useParams()

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    axios.post('/api/usuario/obtenerDataUsuario', {id: params.id}).then(res =>{
      console.log(res.data[0])
      const dataUsuario = res.data[0]
      setNombre(dataUsuario.nombre)
      setEmail(dataUsuario.email)
      setTelefono(dataUsuario.telefono)
    })
  }, [params.id])

  const editarUsuario = ()=>{
    const actualizarUsuario = {
      id: params.id,
      nombre: nombre,
      email: email,
      telefono: telefono
    }

    //Petición

    axios.put('/api/usuario/actualizarUsuario', actualizarUsuario)
    .then(res => {
      console.log(res.data)
      Swal.fire('Correcto', 'Usuario actualizado!', 'success')
      //alert(res.data)
      navigate('/')
    })
    .then(err =>{console.log(err)})
  } 

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <h2 className='mt-4'>Editar usuario</h2>
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
            <button onClick={editarUsuario} className='btn btn-success'>Editar</button>
          </div>
        </div>
      </div>
    </>
  )
}
