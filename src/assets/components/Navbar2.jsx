import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../../pages/Cart";

const Navbar2 = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
    >
      <Container className="justify-content-start">
        <Navbar.Brand>Pizzeria Mamma Mía</Navbar.Brand>
        <Link to="/" className="text-white ms-3 text-decoration-none" >
        Home
        </Link>
        <Link to="/register" className="text-white ms-3 text-decoration-none" >
        Registro
        </Link>
        <Link to="/login" className="text-white ms-3 text-decoration-none" >
        Login
        </Link>
        <div className="profile">
        <Link to="/profile" className="text-white ms-3 text-decoration-none" >
        Usuario 😀
        </Link>

        </div>
       
        <div className="d-flex">
          <div className="carrito">
          <Link to="/cart" className="text-white text-decoration-none " >
        Carrito 🛒
        </Link>

          </div>

        </div>
      

       
      </Container>
    </Navbar>
  );
};
export default Navbar2;