import React from "react";
import "./TituloPrincipal.css";
function TituloPrincipal({ titulo, subTitulo }) {
  return (
    <div>
      <h1 className="Title">{titulo}</h1>
      <h2 className="SubTitle">{subTitulo}</h2>
    </div>
  );
}

export default TituloPrincipal;
