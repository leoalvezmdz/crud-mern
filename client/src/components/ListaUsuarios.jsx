import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { Usuario } from './Usuario'

export const ListaUsuarios = () => {
  const [dataUsuarios, setDataUsuarios] = useState([])

  useEffect(() => {
    axios.get(`api/usuario/obtenerUsuarios`).then(res => {
      console.log(res.data)
      setDataUsuarios(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  //Mapeo de listaUsuario en objeto Usuario

  const listadoUsuarios = dataUsuarios.map(usuario => {
    return (
      <div key={usuario.id}>
        <Usuario usuario={usuario} />
      </div>
    )
  })

  return (
    <>
      <Navbar />
      <h2 className='mt-2'>Lista de usuarios</h2>
      {listadoUsuarios }
    </>
  )
}
