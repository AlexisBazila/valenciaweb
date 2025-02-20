import React from "react";
import "./FooterVal.css";
import logoval from "../../assets/images/logoval.jpg";
import logoAB from "../../assets/images/ABSistems.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function FooterVal() {
  return (
    <footer className="FooterVal">
      {/* Diseño con curva superior */}
      <div className="FooterVal-Curve"></div>

      <div className="FooterVal-Content">


        {/* Sección de información */}
        <div className="FooterVal-Info">
                  {/* Sección del logo */}
        <div className="FooterVal-Logo">
          <img src={logoval} alt="Instituto Valencia" />
        </div>
          <h3>Instituto Valencia</h3>
          <p>Formación con excelencia y compromiso.</p>
        </div>

        {/* Sección de enlaces */}
        <div className="FooterVal-Links">
          <h4>MAPA DEL SITIO</h4>
          <ul>
            <li><a href="#cursos">Home</a></li>
            <li><a href="#cursos">Nosotros</a></li>
            <li><a href="#nosotros">Servicios</a></li>
            <li><a href="#contacto">Escuela</a></li>
          </ul>
        </div>

        {/* Sección de redes sociales */}
        <div className="FooterVal-Social">
          <h4>REDES SOCIALES</h4>
          <div className="FooterVal-SocialIcons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/instituto.valencia/?hl=es" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/+5493755232012" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="FooterVal-Copyright">
        <p>© {new Date().getFullYear()} Instituto Valencia. Todos los derechos reservados.</p>
      </div>
      <a href="https://github.com/AlexisBazila" target="_blank">
      <div className="FooterAB-Logo">
        <p>Desarrollado por</p>
          <img src={logoAB} alt="AB Sistems" />
        </div>
        </a>
    </footer>
  );
}

export default FooterVal;

