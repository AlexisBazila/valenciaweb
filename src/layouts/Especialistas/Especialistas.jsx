import React from "react";

import teambig from "../../assets/images/teambig.jpg";
import teamsmall from "../../assets/images/teamsmall.jpg";

import "./Especialistas.css";

function Especialistas() {
  return (
    <>
      <section className="EspecialistasSection top">
        <img src={teambig} alt="" className="Especialistas-BigImg" />
        <div className="EspecialistasText">
          <div className="EspecialistasTextTitle">
            <h3>NUESTRO EQUIPO DE ESPECIALISTAS</h3>
          </div>
          <div className="Especialistas-SmallImg">
            <img src={teamsmall} alt="" className="SmallImg" />

            <div className="parrafos">
              {" "}
              <p>
                En nuestro centro, cada miembro de nuestro equipo es un
                profesional dedicado a realzar tu belleza y cuidar de tu
                bienestar. Con amplia experiencia en sus respectivas áreas,
                trabajan con pasión y compromiso para ofrecerte servicios de la
                más alta calidad, adaptados a tus necesidades.
              </p>
              <p>
                Nos enorgullece contar con especialistas que no solo dominan las
                últimas tendencias y técnicas, sino que también están
                comprometidos con brindar un trato cálido y personalizado.
                ¡Descubre quiénes están detrás de cada detalle y transformación
                que hacemos realidad!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="EspecialistasSection bottom">
        <div className="EspecialistasText">
          <div className="EspecialistasTextTitle">
            <h3>NUESTRO EQUIPO DE ESPECIALISTAS</h3>
          </div>
          <div className="Especialistas-SmallImg">
            <img src={teambig} alt="" className="Especialistas-BigImg" />
            <img src={teamsmall} alt="" className="SmallImg" />
          </div>
          <div className="parrafos">
            {" "}
            <p>
              En nuestro centro, cada miembro de nuestro equipo es un
              profesional dedicado a realzar tu belleza y cuidar de tu
              bienestar. Con amplia experiencia en sus respectivas áreas,
              trabajan con pasión y compromiso para ofrecerte servicios de la
              más alta calidad, adaptados a tus necesidades.
            </p>
            <p>
              Nos enorgullece contar con especialistas que no solo dominan las
              últimas tendencias y técnicas, sino que también están
              comprometidos con brindar un trato cálido y personalizado.
              ¡Descubre quiénes están detrás de cada detalle y transformación
              que hacemos realidad!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Especialistas;
