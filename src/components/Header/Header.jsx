import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
<>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='navBarContainer' fluid>
        <img className="logo" src="https://res.cloudinary.com/duybxe2k2/image/upload/v1696184559/Proyecto%205%20UDD%20Verduleria%20e-commerce/logo_m7vor7.png"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='navBarCollapseItems' id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as ={Link} to="/" >Inicio</Nav.Link>
            <Nav.Link as ={Link} to="/login">Inicio de sesion</Nav.Link>
            <Nav.Link href="#" disabled>Mi carrito de Compras</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</>
)

}






