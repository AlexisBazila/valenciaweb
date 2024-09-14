import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoVal from "../../assets/images/logoval.jpg";
import "./NavVal.css";

const NavVal = () => {
  return (
    <div className="NavBarVal">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="CointainerNav">
          <Navbar.Brand href="#home">
            <img src={LogoVal} className="LogoImg" alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="NavBarLink" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="NavBarLink" href="#features">
              Nosotros
            </Nav.Link>
            <Nav.Link className="NavBarLink" href="#pricing">
              Servicios
            </Nav.Link>
            <Nav.Link className="NavBarLink" href="#pricing">
              Escuela
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavVal;
