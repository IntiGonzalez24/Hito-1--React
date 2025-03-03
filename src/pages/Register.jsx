import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js' 
import React, { useState } from 'react'

const Register = () => {
    const [users,setUsers] = useState({
        email:'',
        password:'',
        confirmPassword:''
    })
    const handleChange = (e)=>{
        setUsers({ ...users, [e.target.name]:e.target.value})

    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

    

    const {email,password,confirmPassword} = users

    //Primera valicacion del formulario

    if(!email.trim() || !password.trim() || !confirmPassword.trim()){
        alert('por favor todos los campos debe estar llenos ')
        return
    }
    if(password != confirmPassword){
        alert("las constraseñas no coinciden")
        return 
    }
    if(password.length<6){
        alert("La contraseña debe tener al menos 6 caracteres");
        return 
    }
    alert('Registro Exitoso')
    setUsers({email:'', password:'', confirmPassword:'' })

}
  return (
    <>
    <div>
        <form className="formularioRegistro" onSubmit={handleSubmit}>
            <h1>Registrar</h1>
            <div className='mb-3'>
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={users.email} onChange={handleChange} />
            </div>
            <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={users.password} onChange={handleChange} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label"> Confirmar contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  name="confirmPassword" value={users.confirmPassword} onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Registrarce</button>
            
        </form>
      
    </div>
    </>
  )
}

export default Register
