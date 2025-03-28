import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Cart from "../../pages/Cart";
import "./Navbar.css";
import { useContext } from "react";
import { userContext } from "../../context/UserContext";

const Navbar2 = () => {
  const setActiveClass =({isActive}) =>(isActive ? "active" : "noActive");
  const {logout} =useContext(userContext);

  
  return (
    <Navbar
      bg="dark"
      variant="dark"
    >
      <Container className="justify-content-start">
        <Navbar.Brand>Pizzeria Mamma Mía</Navbar.Brand>
        <NavLink to="/" className="text-white ms-3 text-decoration-none"  >
        <button className="btn btn-dark">
        Home
          </button>
        </NavLink>
        {/*<NavLink to="/register" className={validarUbicacion} >
        Registro
        </NavLink> */}
        <button className="btn btn-dark" onClick={logout}>
          Logout
        </button>
        <NavLink to="/login" className="text-white ms-3 text-decoration-none" >
        <button className="btn btn-dark">
        Login
          </button>
        </NavLink>
        <NavLink to="/register" className="text-white ms-3 text-decoration-none" >
        <button className="btn btn-dark">
        Register
          </button>
        </NavLink>
        <div className="profile">
        <NavLink to="/profile" className="text-white ms-3 text-decoration-none" >
        Usuario 😀
        </NavLink>

        </div>
        
       
        <div className="d-flex">
          <div className="carrito">
          <NavLink to="/cart" className="text-white text-decoration-none " >
        Carrito 🛒
        </NavLink>

          </div>

        </div>
      

       
      </Container>
    </Navbar>
  );
};
export default Navbar2;