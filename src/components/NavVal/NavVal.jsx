import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import LogoVal from "../../assets/images/logoval.jpg";

import "./NavVal.css";

const NavVal = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="NavBarVal">
      <Navbar expand="lg" expanded={expanded}>
        <Container className="CointainerNav">
          <Navbar.Brand>
            <img src={LogoVal} className="LogoImg" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                className="NavBarLink"
                to="/"
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="NavBarLink"
                to="/nosotros"
                onClick={() => setExpanded(false)}
              >
                Nosotros
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="NavBarLink"
                to="/servicios"
                onClick={() => setExpanded(false)}
              >
                Servicios
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="NavBarLink"
                to="/escuela"
                onClick={() => setExpanded(false)}
              >
                Escuela
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="NavBarLink"
                to="/contactanos"
                onClick={() => setExpanded(false)}
              >
                Contactanos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavVal;
