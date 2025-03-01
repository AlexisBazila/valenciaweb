import React from "react";
import { useNavigate } from "react-router-dom";

import heroHome from "../../assets/images/heroHome.jpg";

import "./HomeHeroSection.css";

const HomeHeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="SubContainerHero">
        <section className="hero-section">
          <div className="ContainerHero">
            <div className="hero-image up">
              <img src={heroHome} alt="Instituto Valencia" />
            </div>
            <div className="hero-content">
              <h2 className="hero-title">Cuidando tu belleza y bienestar</h2>
              <h1 className="hero-subtitle">INSTITUTO VALENCIA</h1>
              <p className="hero-description">
                Bienvenido al Instituto Valencia, un espacio creado para cuidar
                de ti en cada detalle. Aquí, la belleza y el bienestar se
                combinan para ofrecerte una experiencia que va más allá de lo
                estético. Nos apasiona ayudarte a sentirte bien, relajarte y
                realzar tu belleza natural. Ya sea que busques un momento de
                paz, un cambio de look, o aprender algo nuevo, estamos aquí para
                hacer que te sientas como en casa. ¡Te esperamos con los brazos
                abiertos!
              </p>
              <button
                className="hero-button"
                onClick={() => navigate("/nosotros")}
              >
                CONÓCENOS
              </button>
            </div>
            <div className="hero-image down">
              <img src={heroHome} alt="Instituto Valencia" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeHeroSection;
