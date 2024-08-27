import React from "react";
import "./HomeHeroSection.css"; // Importa los estilos CSS para la sección

const HomeHeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Cuidando tu belleza y bienestar</h1>
          <h2 className="hero-subtitle">INSTITUTO VALENCIA</h2>
          <p className="hero-description">
            Descubre un oasis de belleza, salud y bienestar. Ofrecemos servicios
            de estética, cosmética, podología, gimnasio, y consultorio
            nutricional. Además, contamos con cursos y productos exclusivos para
            tu cuidado personal.
          </p>
          <button className="hero-button">CONÓCENOS</button>
        </div>
        <div className="hero-image">
          <img src="ruta-a-tu-imagen.svg" alt="Instituto Valencia" />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
