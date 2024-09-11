import React from "react";
import "./HomeHeroSection.css"; // Importa los estilos CSS para la sección
import NonImage from "../../assets/images/nonimage.jpg";

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
              Descubre un oasis de belleza, salud y bienestar. Ofrecemos
              servicios de estética, cosmética, podología, gimnasio, y
              consultorio nutricional. Además, contamos con cursos y productos
              exclusivos para tu cuidado personal.
            </p>
            <button className="hero-button">CONÓCENOS</button>
          </div>
          <div className="hero-image">
            {/* <img src={NonImage} alt="Instituto Valencia" /> */}
            <div className="ImgTest"></div>
          </div>
        </div>
        </section>
        </div>
     
    </>
  );
};

export default HomeHeroSection;
