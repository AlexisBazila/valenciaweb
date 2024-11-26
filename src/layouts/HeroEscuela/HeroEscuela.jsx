import React from "react";
import "./HeroEscuela.css";
import TituloPrincipal from "../../components/TituloPrincipal/TituloPrincipal";
import escuela from "../../assets/images/escuela.jpg"

function HeroEscuela() {
  return (
    <section className="HeroEscuela">
      <img src={escuela} alt="" className="EscuelaHeroPick"/>
      <TituloPrincipal
        titulo="Escuela"
        subTitulo="Transforma tu pasión en profesión con nuestros cursos especializados. ¡Tu futuro comienza aquí!"
      />
    </section>
  );
}

export default HeroEscuela;
