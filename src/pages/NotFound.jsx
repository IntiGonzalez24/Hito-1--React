import React from 'react'
import logo from '../assets/img/notfound.jpg'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
   <main className='container text-center mt-5'>
    <img src={logo} alt="" />
    <h2 className='mt-4 text-danger'>
        Error ! La pagina no existe.

    </h2>
    <Link to="/home"  className='btn btn-primary mt-3'>
    Volver al inicio
    </Link>
     

   </main>
  )
}

export default NotFound
