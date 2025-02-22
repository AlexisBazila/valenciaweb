import React from "react";
import { Link } from "react-router-dom";
import "./FooterVal.css";
import logoval from "../../assets/images/logoval.jpg";
import logoAB from "../../assets/images/ab.png";
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/escuela">Escuela</Link>
            </li>
          </ul>
        </div>

        {/* Sección de redes sociales */}
        <div className="FooterVal-Social">
          <h4>REDES SOCIALES</h4>
          <div className="FooterVal-SocialIcons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/instituto.valencia/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/+5493755232012"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="FooterVal-Copyright">
        <p>
          © {new Date().getFullYear()} Instituto Valencia. Todos los derechos
          reservados.
        </p>
      </div>
      {/* Atribución de Freepik */}
      <div className="FooterVal-Freepik">
        <p>
          Algunas imágenes fueron tomadas de{" "}
          <a
            href="https://www.freepik.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>
          .
        </p>
      </div>

      {/* Desarrollador */}
      <a
        href="https://github.com/AlexisBazila"
        target="_blank"
        className="FooterAB-Link"
      >
        <div className="FooterAB-Logo">
          <img src={logoAB} alt="AB Sistems" />
          <p>powered by</p>
        </div>
      </a>
    </footer>
  );
}

export default FooterVal;
