import React from "react";
import { Link } from "react-router-dom"; // Importa el componente Link de React Router
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoVal from "../../assets/images/logoval.jpg";
import "./NavVal.css";

const NavVal = () => {
  return (
    <div className="NavBarVal">
      <Navbar expand="lg">
  <Container className="CointainerNav">
    <Navbar.Brand>
      <img src={LogoVal} className="LogoImg" alt="Logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} className="NavBarLink" to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} className="NavBarLink" to="/nosotros">
          Nosotros
        </Nav.Link>
        <Nav.Link as={Link} className="NavBarLink" to="/servicios">
          Servicios
        </Nav.Link>
        <Nav.Link as={Link} className="NavBarLink" to="/escuela">
          Escuela
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default NavVal;
