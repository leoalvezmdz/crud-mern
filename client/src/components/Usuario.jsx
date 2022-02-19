import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'


export const Usuario = ({ usuario }) => {

  const navigate = useNavigate()
  
  //Animación

  useEffect(()=>{
    AOS.init()
  },[])

  //Funcion borrar usuario

  const borrarUsuario = (id) => {
    axios.post(`api/usuario/borrarUsuario`,{id: id}).then(res => {
      console.log(res.data)
      // alert(res.data)
      // Swal.fire('Correcto', 'Usuario eliminado', '')
      navigate(0)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 offset-3' data-aos='flip-right'>
            <ul className='list-group'>
              <li className='list-group-item'><b>ID:</b> {usuario.id}</li>
              <li className='list-group-item'><b>Nombre:</b> {usuario.nombre}</li>
              <li className='list-group-item'><b>Email:</b> {usuario.email}</li>
              <li className='list-group-item'><b>Tel:</b> {usuario.telefono}</li>
            </ul>
            <div className='mt-4'>
              <Link to={`/editarUsuario/${usuario.id}`}><li className='btn btn-success m-1'>Editar</li></Link> 
              <button className='btn btn-danger' onClick={()=>{borrarUsuario(usuario.id)}}>Borrar</button>
            </div>
            <hr className='mt-4' />
          </div>
        </div>
      </div>
    </>
  )
}
