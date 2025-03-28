/*import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js' 
import { useContext ,useState} from "react"
import { userContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"



const Register = () => {
    const {registerPage} = useContext(userContext)
    const [users,setUsers] = useState({
        email:'',
        password:''
       
    })
    const navigate = useNavigate();
   
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            await registerPage(users);
            alert("Usurio registrado con exito")
            navigate("/login")
            
        } catch (error) {
            console.error("Error al registrar al usuario")
            
        }

    

    /*const {email,password,confirmPassword} = users

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
    */
/*
}
  return (
    <>
    <div>
        <form className="formularioRegistro" onSubmit={handleSubmit}>
            <h1>Registrar</h1>
            <div className='mb-3'>
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={users.email} onChange={(e)=>setUsers({...users,email:e.target.value})} />
            </div>
            <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={users.password} onChange={(e)=>setUsers({...users,password:e.target.value})} />
  </div>
  
  <button type="submit" className="btn btn-primary">Registrarce</button>
            
        </form>
      
    </div>
    </>
  )
}
  */

import React, { useState, useContext } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(userContext);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(userData);
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      navigate("/login");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Hubo un problema al registrarse. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Registrarse</h2>
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
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
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
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};



export default Register
