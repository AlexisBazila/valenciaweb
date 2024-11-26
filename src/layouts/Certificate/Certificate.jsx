import React from "react";
import "./Certificate.css";
import WitheTittleAndParagraph from "../../components/WitheTittleAndParagraph/WitheTittleAndParagraph";
import CardTextAndPick from "../../components/CardTextAndPick/CardTextAndPick";
import podologiapick from "../../assets/images/podologiapick.jpg";
import masajes from "../../assets/images/masajes.jpg";
import cosmetologiapick from "../../assets/images/cosmetologiapick.jpg";
import certificate from "../../assets/images/certificate.jpg";

function Certificate() {
  return (
    <section className="Certificate">
      <div className="CertificateBackGrond">
        <div className="CertificateBuble">
          <WitheTittleAndParagraph
            tittle="CERTIFICATE CON NOSOTROS"
            text="Impulsa tu futuro profesional con nuestras certificaciones reconocidas. Adquiere habilidades prácticas y un respaldo oficial que abrirá nuevas oportunidades en tu carrera. ¡Tu éxito comienza aquí!"
          />
          <img src={certificate} alt="" className="CertificatePick"/>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
