import React from "react";
import "./Cursos.jsx";

import CenterAlignedParagraph from "../../components/CenterAlignedParagraph/CenterAlignedParagraph.jsx";

function Cursos() {
  const paragraphs = [
    "¡Formación Profesional para tu Futuro!",
    "Descubre nuestra variedad de cursos diseñados para brindarte habilidades prácticas y certificadas en estética, belleza y bienestar. ¡Elige el tuyo y comienza a transformar tu pasión en una carrera!",
  ];
  return (
    <section>
      <div className="TituloCursos">
        <CenterAlignedParagraph
          subTtitle="NUESTROS CURSOS"
          paragraphs={paragraphs}
        />
      </div>
      <div className="ContenedorCursos"></div>
    </section>
  );
}

export default Cursos;
