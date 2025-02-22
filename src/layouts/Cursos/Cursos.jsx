import React from "react";
import "./Cursos.css";

import CenterAlignedParagraph from "../../components/CenterAlignedParagraph/CenterAlignedParagraph.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaWhatsapp } from "react-icons/fa";

import Barberia from "../../assets/images/Barberia.jpg";
import PeluqueriaCurso from "../../assets/images/PeluqueriaCurso.jpg";
import Colorimetria from "../../assets/images/Colorimetria.jpg";
import Maquilladora from "../../assets/images/Maquilladora.jpg";
import PodologiaCurso from "../../assets/images/PodologiaCurso.jpg";
import Miradas from "../../assets/images/Miradas.jpg";
import CosmetologiaCurso from "../../assets/images/CosmetologiaCurso.jpg";
import Cosmiatria from "../../assets/images/Cosmiatria.jpg";
import DermatocosmiatriaCurso from "../../assets/images/DermatocosmiatriaCurso.jpg";
import Masoterapia from "../../assets/images/Masoterapia.jpg";
import Estetisista from "../../assets/images/Estetisista.jpg";
import DepilacionCurso from "../../assets/images/DepilacionCurso.jpg";
import Dermopigmentacion from "../../assets/images/Dermopigmentacion.jpg";
import AparatologiaCurso from "../../assets/images/AparatologiaCurso.jpg";
import { TbBackground } from "react-icons/tb";

function Cursos() {
  const paragraphs = [
    "¡Formación Profesional para tu Futuro!",
    "Descubre nuestra variedad de cursos diseñados para brindarte habilidades prácticas y certificadas en estética, belleza y bienestar. ¡Elige el tuyo y comienza a transformar tu pasión en una carrera!",
  ];
  return (
    <section className="CursosSection">
      <div className="TituloCursos">
        <CenterAlignedParagraph
          subTtitle="NUESTROS CURSOS"
          paragraphs={paragraphs}
        />
      </div>
      <div className="ContenedorCursos">
        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={Barberia} />
          <Card.Body>
            <Card.Title>Barbería</Card.Title>
            <Card.Text>
              Aprende las técnicas esenciales de corte, afeitado y cuidado de la
              barba para destacar en el mundo de la barbería.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">4 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Barberia.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={PeluqueriaCurso} />
          <Card.Body>
            <Card.Title>Peluquería</Card.Title>
            <Card.Text>
              Domina los secretos del estilismo capilar y conviértete en un
              experto en cortes, coloración y peinados.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">6 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Peluquería.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={Colorimetria} />
          <Card.Body>
            <Card.Title>Colorimetría y matemática del color</Card.Title>
            <Card.Text>
              Conoce la ciencia detrás de la coloración y aprende a crear
              combinaciones perfectas para cada cliente.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">6 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Colorimetría%20y%20matemática%20del%20color.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={Maquilladora} />
          <Card.Body>
            <Card.Title>Maquillaje</Card.Title>
            <Card.Text>
              Desarrolla tu creatividad y perfecciona tus técnicas de maquillaje
              para eventos, moda y belleza profesional.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">4 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Maquillaje.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={PodologiaCurso} />
          <Card.Body>
            <Card.Title>Podología</Card.Title>
            <Card.Text>
              Especialízate en el cuidado y tratamiento de los pies, combinando
              salud y estética con conocimientos actualizados.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">9 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Podología.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={Miradas} />
          <Card.Body>
            <Card.Title>Técnico en miradas</Card.Title>
            <Card.Text>
              Aprende a realzar la belleza de la mirada con técnicas de
              extensiones de pestañas, diseño de cejas y más.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">2 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Técnico%20en%20miradas.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={CosmetologiaCurso} />
          <Card.Body>
            <Card.Title>Cosmetología</Card.Title>
            <Card.Text>
              Conviértete en un experto en el cuidado de la piel con
              tratamientos innovadores y productos especializados.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">6 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Técnico%20Cosmetología.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={Cosmiatria} />
          <Card.Body>
            <Card.Title>Cosmiatría</Card.Title>
            <Card.Text>
              Aprende a combinar conocimientos estéticos y dermatológicos para
              mejorar la salud y belleza de la piel.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">6 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Técnico%20Cosmiatría.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={DermatocosmiatriaCurso} />
          <Card.Body>
            <Card.Title>Dermatocosmiatría</Card.Title>
            <Card.Text>
              Especialízate en tratamientos faciales y corporales avanzados para
              el bienestar y rejuvenecimiento de la piel.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">6-9 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Técnico%20Dermatocosmiatría.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={Masoterapia} />
          <Card.Body>
            <Card.Title>Masoterapia</Card.Title>
            <Card.Text>
              Domina diversas técnicas de masaje terapéutico para mejorar el
              bienestar físico y emocional de tus clientes.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">6 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Técnico%20Masoterapia.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={Estetisista} />
          <Card.Body>
            <Card.Title>Estética integral</Card.Title>
            <Card.Text>
              Adquiere habilidades en diversas áreas de la estética para brindar
              un servicio completo y profesional.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">3 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Técnico%20Estética%20integral.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={DepilacionCurso} />
          <Card.Body>
            <Card.Title>Depilación descartable</Card.Title>
            <Card.Text>
              Aprende métodos de depilación efectivos y seguros para ofrecer un
              servicio de alta calidad.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">2 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Técnico%20Depilación%20descartable.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={Dermopigmentacion} />
          <Card.Body>
            <Card.Title>Dermo-pigmentación</Card.Title>
            <Card.Text>
              Especialízate en micropigmentación y técnicas de maquillaje
              semipermanente para realzar la belleza natural.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">6 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Técnico%20Dermo-pigmentación.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="CursoCard">
          <Card.Img variant="top" src={AparatologiaCurso} />
          <Card.Body>
            <Card.Title>Aparatología</Card.Title>
            <Card.Text>
              Conviértete en un experto en tecnología estética y el uso de
              aparatología avanzada para tratamientos de belleza.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">3 Meses</Card.Subtitle>
            <Button
              variant="primary"
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  "https://wa.me/+5493755232012?text=Estoy%20interesado%20en%20el%20curso%20de%20Técnico%20Aparatología.%20Puedes%20brindarme%20mas%20información%20por%20favor?",
                  "_blank"
                )
              }
            >
              {" "}
              <FaWhatsapp className="icon" />
              Solicitar info.
            </Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default Cursos;
