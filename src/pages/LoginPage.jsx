import React, { useState } from 'react'

const LoginPage = () => {

   const [users,setUsers] = useState({
          email:'',
          password:''
         
      })
      const handleChange = (e)=>{
          setUsers({ ...users, [e.target.name]:e.target.value})
  
      }
  
      const handleSubmit = async (e) =>{
          e.preventDefault()
  
      
  
      const {email,password} = users
  
      //Primera valicacion del formulario
  
      if(!email.trim() || !password.trim()){
          alert('por favor todos los campos debe estar llenos ')
          return
      }
      const validateEmail = (email) => {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
        return emailRegex.test(email)
      }
      if(!validateEmail(email)){
        alert("El correo es incorrecto")
      }
      
      if(password.length<6){
          alert("La contraseña debe tener al menos 6 caracteres");
          return 
      }
      alert('autenticación exitosa')
      setUsers({email:'', password:'' })
  
  }
  return (
    <div>
        <form className="formularioRegistro" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='mb-3'>
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={users.email} onChange={handleChange} />
            </div>
            <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={users.password} onChange={handleChange} />
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
            
        </form>
      
    </div>
  )
}

export default LoginPage
