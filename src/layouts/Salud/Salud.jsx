import React from "react";
import "./Salud.css";
import WitheTittleAndParagraph from "../../components/WitheTittleAndParagraph/WitheTittleAndParagraph";
import CardTextAndPick from "../../components/CardTextAndPick/CardTextAndPick";

function Salud() {
  return (
    <section className="Salud">
      <div className="SaludBackGrond">
        <div className="SaludBuble">
          <WitheTittleAndParagraph
            tittle="SALUD"
            text="Nos enorgullece la satisfacción de nuestros clientes y su experiencia con nosotros. Aquí compartimos algunos de sus comentarios que reflejan nuestro compromiso con la calidad y el servicio. ¡Tu opinión también es importante para nosotros!"
          />
          <div className="SaludCards">
            <CardTextAndPick />
            <CardTextAndPick />
            <CardTextAndPick />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Salud;
