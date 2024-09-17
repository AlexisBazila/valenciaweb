import React from "react";
import "./HomeHeroSection.css"; // Importa los estilos CSS para la sección
import heroHome from "../../assets/images/heroHome.jpg";

const HomeHeroSection = () => {
  return (
    <>
      <div className="SubContainerHero">
        <section className="hero-section">
          <div className="ContainerHero">
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
              <button className="hero-button">CONÓCENOS</button>
            </div>
            <div className="hero-image">
              <img src={heroHome} alt="Instituto Valencia" /> 
              {/* <div className="ImgTest"></div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeHeroSection;
