import React from "react";
import CenterAlignedParagraph from "../../components/CenterAlignedParagraph/CenterAlignedParagraph.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaWhatsapp } from "react-icons/fa";

import PeluqueriaCurso from "../../assets/images/PeluqueriaCurso.jpg";
import Peinados from "../../assets/images/Peinados.jpg";
import Colorimetria from "../../assets/images/Colorimetria.jpg";
import PodologiaCurso from "../../assets/images/PodologiaCurso.jpg";
import Podoestetica from "../../assets/images/Podoestetica.jpg";
import Quiropodia from "../../assets/images/Quiropodia.jpg";
import Miradas from "../../assets/images/Miradas.jpg";
import CosmetologiaCurso from "../../assets/images/CosmetologiaCurso.jpg";
import MaquillajeSocial from "../../assets/images/MaquillajeSocial.jpg";
import MaquillajeProfesional from "../../assets/images/MaquillajeProfesional.jpg";
import Masoterapia from "../../assets/images/Masoterapia.jpg";
import DepilacionCurso from "../../assets/images/DepilacionCurso.jpg";
import AsesoriaImagen from "../../assets/images/AsesoriaImagen.jpg";
import TecnicoUñas from "../../assets/images/TecnicoUñas.jpg";

import "./Cursos.css";

/* ===============================
   DATA
   =============================== */

const cursos = [
  // PELUQUERIA
  {
    titulo: "Peluquería",
    descripcion:
      "Formación integral en cortes, coloración, peinados y técnicas profesionales para desarrollarte en el mundo del estilismo capilar.",
    duracion: "6 Meses",
    imagen: PeluqueriaCurso,
  },
  {
    titulo: "Peinados",
    descripcion:
      "Aprendé técnicas de peinados sociales y profesionales para eventos, fiestas y ocasiones especiales.",
    duracion: "3 Meses",
    imagen: Peinados,
  },
  {
    titulo: "Colorimetría",
    descripcion:
      "Comprendé la teoría del color aplicada al cabello y aprendé a realizar mezclas y correcciones profesionales.",
    duracion: "3 Meses",
    imagen: Colorimetria,
  },
  //MAQUILLAJE
  {
    titulo: "Maquillaje Profesional",
    descripcion:
      "Capacitación completa en técnicas de maquillaje para eventos, fotografía y trabajos profesionales.",
    duracion: "3 Meses",
    imagen: MaquillajeProfesional,
  },
  {
    titulo: "Maquillaje Social",
    descripcion:
      "Curso orientado a maquillajes sociales y de día, ideal para eventos, celebraciones y clientes particulares.",
    duracion: "3 Meses",
    imagen: MaquillajeSocial,
  },
  //PODOLOGIA
  {
    titulo: "Podoestética",
    descripcion:
      "Formación enfocada en el cuidado estético del pie, combinando técnicas de salud, higiene y belleza.",
    duracion: "3 Meses",
    imagen: Podoestetica,
  },
  {
    titulo: "Pedicuría Sanitaria",
    descripcion:
      "Aprendé técnicas de pedicuría con enfoque sanitario, prevención y cuidado responsable del pie.",
    duracion: "3 Meses",
    imagen: PodologiaCurso,
  },
  {
    titulo: "Quiropodía",
    descripcion:
      "Capacitación en tratamientos específicos del pie para el alivio de afecciones comunes y cuidado integral.",
    duracion: "3 Meses",
    imagen: Quiropodia,
  },
  // MIRADAS
  {
    titulo: "Técnico en Miradas",
    descripcion:
      "Especialización en extensiones de pestañas, diseño de cejas y técnicas para realzar la mirada.",
    duracion: "2 Meses prácticos",
    imagen: Miradas,
  },
  //COSMETOLOGIA
  {
    titulo: "Cosmetología",
    descripcion:
      "Formación profesional en cuidado de la piel, tratamientos faciales y uso de productos especializados.",
    duracion: "6 Meses",
    imagen: CosmetologiaCurso,
  },
  // MASAJES Y BIENESTAR
  {
    titulo: "Masoterapeuta",
    descripcion:
      "Curso orientado a técnicas de masajes terapéuticos y de relajación para el bienestar físico y emocional.",
    duracion: "5 Meses",
    imagen: Masoterapia,
  },
  // DEPILACION
  {
    titulo: "Depilación Tradicional",
    descripcion:
      "Capacitación en técnicas clásicas de depilación corporal, enfocada en la práctica y el cuidado de la piel.",
    duracion: "2 Meses prácticos",
    imagen: DepilacionCurso,
  },
  // UÑAS Y ASESORAMIENTO
  {
    titulo: "Técnico Superior en Uñas",
    descripcion:
      "Formación completa en técnicas de manicura, esculpidas, nail art y cuidado profesional de uñas.",
    duracion: "6 Meses",
    imagen: TecnicoUñas,
  },
  {
    titulo: "Asesor de Imagen",
    descripcion:
      "Curso orientado a la construcción de imagen personal, estilo y asesoramiento estético integral.",
    duracion: "4 Meses",
    imagen: AsesoriaImagen,
  },
];

/* ===============================
   HELPERS
   =============================== */

const openWhatsapp = (curso) => {
  const message = `Estoy interesado en el curso de ${curso}. ¿Podrías brindarme más información por favor?`;
  const url = `https://wa.me/+5493755232012?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

/* ===============================
   COMPONENT
   =============================== */

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
        {cursos.map((curso, index) => (
          <Card key={index} style={{ width: "18rem" }} className="CursoCard">
            <Card.Img variant="top" src={curso.imagen} />
            <Card.Body>
              <Card.Title>{curso.titulo}</Card.Title>
              <Card.Text>{curso.descripcion}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                {curso.duracion}
              </Card.Subtitle>

              <Button
                variant="primary"
                className="whatsapp-button"
                onClick={() => openWhatsapp(curso.titulo)}
              >
                <FaWhatsapp className="icon" />
                Solicitar info.
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Cursos;
