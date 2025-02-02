
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js' 

const Navbar = () => {
    const total = 25000;
    const token = false;
  return (
    <div>
    <nav className="navbar navbar-light bg-dark">
       
       <form className="container-fluid justify-content-start letra_titulo">
        Pizzeria Mamma Mia!
         <button className="btn btn-sm btn-outline-light botonBlanco" type="button">🍕 Home</button>
         <button className="btn btn-sm btn-outline-light botonBlanco" type="button">🔒 Login</button>
         <button className="btn btn-sm btn-outline-light botonBlanco" type="button">🔓 Register</button> 
         <button className="btn btn-sm btn-outline-primary botonNegro" type="button"> 🛒Total:{total}</button> 
       </form>
     </nav>
    </div>
  )
}

export default Navbar
