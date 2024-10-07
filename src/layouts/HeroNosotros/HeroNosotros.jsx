import React from "react";
import "./HeroNosotros.css";
import TituloPrincipal from "../../components/TituloPrincipal/TituloPrincipal";
import ImageCouple from "../../components/ImageCouple/ImageCouple";
function HeroNosotros() {
  return (
    <div className="HeroNosotros">
      <TituloPrincipal
        titulo="Sobre Nosotros"
        subTitulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      <ImageCouple />
    </div>
  );
}

export default HeroNosotros;
