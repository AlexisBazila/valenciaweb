import React from "react";

import WitheTittleAndParagraph from "../../components/WitheTittleAndParagraph/WitheTittleAndParagraph";
import CardTextAndPick from "../../components/CardTextAndPick/CardTextAndPick";

import podologiapick from "../../assets/images/podologiapick.jpg";
import masajes from "../../assets/images/masajes.jpg";
import cosmetologiapick from "../../assets/images/cosmetologiapick.jpg";

import "./Salud.css";

function Salud() {
  return (
    <section className="Salud">
      <div className="SaludBackGrond">
        <div className="SaludBuble">
          <WitheTittleAndParagraph
            tittle="SALUD"
            text="Nuestros servicios de salud están pensados para cuidar de ti y mejorar tu bienestar físico, brindando una atención personalizada y de calidad. ¡Descubre cómo podemos ayudarte a sentirte bien por dentro y por fuera!"
          />
          <div className="SaludCards">
            <CardTextAndPick
              tittle="PODOLOGIA"
              description="Cuidamos la salud de tus pies con tratamientos especializados y técnicas avanzadas, asegurando comodidad y bienestar en cada paso que das."
              pick={podologiapick}
            />
            <CardTextAndPick
              tittle="MASAJES"
              description="Relaja cuerpo y mente con nuestros masajes terapéuticos, diseñados para aliviar tensiones, mejorar la circulación y ofrecerte un momento de paz y renovación."
              pick={masajes}
            />
            <CardTextAndPick
              tittle="COSMETOLOGIA"
              description="Realza tu belleza natural con nuestros tratamientos faciales y corporales, adaptados a tus necesidades para lograr una piel saludable, luminosa y llena de vida."
              pick={cosmetologiapick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Salud;
