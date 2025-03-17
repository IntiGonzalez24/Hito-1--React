import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='container text-center mt-3 border border-dark'>
        <h3>hola : test@test.com</h3>
        <button className='btn btn-primary mb-3'><Link to="/cerrar" className='text-decoration-none text-dark' >Cerrar Sesion</Link></button>

    </div>
  )
}

export default Profile
