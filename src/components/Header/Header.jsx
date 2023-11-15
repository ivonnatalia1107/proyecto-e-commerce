import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
            <Nav.Link >Inicio</Nav.Link>
            <Nav.Link  >Frutas</Nav.Link>
            <Nav.Link >Verduras</Nav.Link>
            <NavDropdown title="Mi Perfil" id="navbarScrollingDropdown">
              <NavDropdown.Item as ={Link} to="/login"  >Inicio de sesion</NavDropdown.Item>
              <NavDropdown.Item >Registrate</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>Mi carrito de Compras</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</>
)

}






