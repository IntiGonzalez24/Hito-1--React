/*import React, { useState } from 'react'
import { useContext } from 'react'
import { userContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const {login} = useContext(userContext)
  const navigate = useNavigate();

   const [users,setUsers] = useState({
          email:'',
          password:''
         
      })
      const handleChange = (e)=>{
          setUsers({ ...users, [e.target.name]:e.target.value})
  
      }
  
      const handleSubmit = async (e) =>{
          e.preventDefault()
          try {
            await login(users);
            navigate("/profile");
          } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
          }

  
      
  
      /*const {email,password} = users
  
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
      */
     /*
  
  }
  return (
    <div>
        <form className="formularioRegistro" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='mb-3'>
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={users.email} onChange={(e) => setUsers({ ...users, email: e.target.value })} />
            </div>
            <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={users.password} onChange={(e) => setUsers({ ...users, password: e.target.value })} />
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
            
        </form>
      
    </div>
  )
}

export default LoginPage

*/
import React, { useState, useContext } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(userContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      navigate("/profile");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Ingrese su correo"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Ingrese su contraseña"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
