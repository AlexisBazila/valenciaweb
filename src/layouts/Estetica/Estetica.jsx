import React from "react";

import CenterAlignedParagraph from "../../components/CenterAlignedParagraph/CenterAlignedParagraph";
import CardTextAndPickLeft from "../../components/CardTextAndPickLeft/CardTextAndPickLeft";
import CardTextAndPickRight from "../../components/CardTextAndPickRight/CardTextAndPickRight";

import esteticapick from "../../assets/images/esteticapick.jpg";
import peluqueriapick from "../../assets/images/peluqueriapick.jpg";
import depilacionpick from "../../assets/images/depilacionpick.jpg";
import microbladingpick from "../../assets/images/microbladingpick.jpg";
import maquillajepick from "../../assets/images/maquillajepick.jpg";

import "./Estetica.css";

function Estetica() {
  const paragraphs = [
    "En nuestra sección de Estética, encontrarás servicios dedicados a realzar tu belleza y cuidar tu piel. Desde tratamientos faciales revitalizantes hasta técnicas avanzadas de estética corporal, cada sesión está diseñada para brindarte resultados visibles y una experiencia de bienestar incomparable. ¡Déjanos acompañarte en el camino hacia una versión más radiante de ti!",
  ];
  return (
    <section className="EsteticaSection">
      <div className="TituloEstetica">
        <CenterAlignedParagraph subTtitle="ESTETICA" paragraphs={paragraphs} />
      </div>
      <div className="OpcionesEstetica">
        <CardTextAndPickLeft
          title="Estetica Corporal"
          text="Descubre tratamientos personalizados que revitalizan, hidratan y moldean tu cuerpo, utilizando técnicas avanzadas para mejorar la apariencia de tu piel y promover el bienestar integral. Nuestro objetivo es ayudarte a sentirte renovada y confiada, cuidando cada detalle para brindarte una experiencia relajante y efectiva."
          pick={esteticapick}
        />
        <CardTextAndPickRight
          title="Peluqueria"
          text="Déjate asesorar por nuestros expertos estilistas que trabajan para crear cortes, peinados y coloraciones que resaltan tu belleza natural. Desde un cambio de look moderno hasta un cuidado capilar nutritivo, nuestro equipo se encarga de transformar tu cabello con resultados vibrantes y de larga duración, siempre siguiendo las últimas tendencias."
          pick={peluqueriapick}
        />
        <CardTextAndPickLeft
          title="Depilación"
          text="Ofrecemos una amplia gama de técnicas de depilación, desde cera tradicional hasta opciones más avanzadas, para lograr una piel suave, libre de vello y sin irritaciones. Nuestros tratamientos se adaptan a tus necesidades, asegurando comodidad y resultados duraderos, para que luzcas y sientas una piel impecable."
          pick={depilacionpick}
        />
        <CardTextAndPickRight
          title="Microblanding y dermopigmentación en labios"
          text="Realza la belleza de tus cejas y labios con técnicas precisas que garantizan un acabado natural y duradero. Nuestro servicio de microblading ofrece definición y volumen a tus cejas, mientras que la dermopigmentación en labios mejora su tono y contorno, proporcionando una apariencia fresca y sin necesidad de maquillaje diario."
          pick={microbladingpick}
        />
        <CardTextAndPickLeft
          title="Maquillaje"
          text="Desde eventos especiales hasta maquillaje diario, nuestros profesionales te ofrecen looks personalizados que destacan tu belleza natural. Utilizamos productos de alta calidad y técnicas adaptadas a cada tipo de piel, asegurando un resultado impecable y duradero, ya sea para un día importante o una ocasión única."
          pick={maquillajepick}
        />
      </div>
    </section>
  );
}

export default Estetica;
