import React from "react";
import "./Certificate.css";

import WitheTittleAndParagraph from "../../components/WitheTittleAndParagraph/WitheTittleAndParagraph";

import Certificado from "../../assets/images/CertificadoTest.png";

function Certificate() {
  return (
    <section className="Certificate">
      <div className="CertificateBackGrond">
        <div className="CertificateBuble">
          <WitheTittleAndParagraph
            tittle="CERTIFICATE CON NOSOTROS"
            text="Impulsa tu futuro con nuestras certificaciones oficiales. En Instituto Valencia, te brindamos formación de calidad y avalada para que alcances tus metas profesionales. ¡Inscríbete hoy y da el próximo paso en tu carrera! "
          />
          <img src={Certificado} alt="" className="CertificadoImg" />
        </div>
      </div>
    </section>
  );
}

export default Certificate;
