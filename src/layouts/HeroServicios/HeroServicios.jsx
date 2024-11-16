import React from "react";
import "./HeroServicios.css";
import CircularBorderImage from "../../components/CircularBorderImage/CircularBorderImage";
import TituloPrincipal from "../../components/TituloPrincipal/TituloPrincipal";

import servicios from "../../assets/images/servicios.jpg";

function HeroServicios() {
  return (
    <section className="SectionServicios">
      <div className="DivServicios">
        <CircularBorderImage image={servicios} />
        <TituloPrincipal
          titulo="Nuestros servicios"
          subTitulo="Cada uno de nuestros servicios está diseñado para realzar tu belleza y bienestar, ofreciendo una experiencia de calidad personalizada. ¡Descubre cómo podemos ayudarte a lograr el equilibrio perfecto entre salud y estética!"
        />
      </div>
    </section>
  );
}

export default HeroServicios;
