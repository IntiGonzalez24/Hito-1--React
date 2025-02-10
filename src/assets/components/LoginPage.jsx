import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <form className="formularioRegistro">
            <h1>Login</h1>
            <div className='mb-3'>
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
            
        </form>
      
    </div>
  )
}

export default LoginPage
