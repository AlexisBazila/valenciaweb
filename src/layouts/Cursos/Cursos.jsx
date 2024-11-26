import React from "react";
import "./Cursos.css";
import CenterAlignedParagraph from "../../components/CenterAlignedParagraph/CenterAlignedParagraph";

function Cursos() {
  let paragraph = [
    "En el Instituto Valencia, ofrecemos una amplia variedad de cursos diseñados para ayudarte a desarrollar habilidades prácticas y especializadas en el mundo de la salud, la estética y la belleza. Cada programa está estructurado para brindar una formación integral, combinando teoría y práctica, y guiado por expertos en cada área.",
  ];
  return (
    <section className="CursoSection">
      <div className="CursoTitleDiv">
        <CenterAlignedParagraph
          subTtitle="NUESTRO EQUIPO"
          paragraphs={paragraph}
        />
      </div>
    </section>
  );
}

export default Cursos;
