import React from "react";
import "./HeroEscuela.css";
import TituloPrincipal from "../../components/TituloPrincipal/TituloPrincipal";

function HeroEscuela() {
  return (
    <section className="HeroEscuela">
      <div className="EscuelaHeroPick"></div>
      <TituloPrincipal
        titulo="Escuela"
        subTitulo="Transforma tu pasión en profesión con nuestros cursos especializados. ¡Tu futuro comienza aquí!"
      />
    </section>
  );
}

export default HeroEscuela;
