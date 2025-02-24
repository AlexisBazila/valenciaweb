import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Contact.css";

function Contacto() {
  const whatsappNumber = "+5493755232012";
  const googleMapsSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.06132112047!2d-55.12053622544557!3d-27.498468317930936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f8f54f3702b837%3A0x1be24917bf3999db!2sInstituto%20Valencia!5e0!3m2!1ses!2sar!4v1740098274207!5m2!1ses!2sar";

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contáctanos</h1>
        <p>
          Estamos aquí para ayudarte. Escríbenos o visítanos en nuestras redes.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-whatsapp">
          <h2>¡Escríbenos por WhatsApp!</h2>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon" /> Chatea con nosotros
          </a>
        </div>

        <div className="contact-social">
          <h2>Síguenos en redes sociales</h2>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/instituto.Valencia1"
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
          </div>
        </div>

        <div className="contact-map">
          <h2>Visítanos</h2>
          <p>
            <FaMapMarkerAlt /> Av. Italia 1130, N3360 Oberá, Misiones
          </p>
          <iframe
            title="Ubicación Instituto Valencia"
            src={googleMapsSrc}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
