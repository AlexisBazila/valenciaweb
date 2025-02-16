import React from "react";

import "./Reviews.css";
import WitheTittleAndParagraph from "../../components/WitheTittleAndParagraph/WitheTittleAndParagraph";
import Carousel from "react-bootstrap/Carousel";
import review1 from "../../assets/images/review1.jpg";
import review2 from "../../assets/images/review2.jpg";
import review3 from "../../assets/images/review3.jpg";
import review4 from "../../assets/images/review4.jpg";
import review12 from "../../assets/images/review1-2.jpg";
import review22 from "../../assets/images/review2-2.jpg";
import review32 from "../../assets/images/review3-2.jpg";
import review42 from "../../assets/images/review4-2.jpg";

function Reviews() {
  return (
    <section className="Reviews">
      <div className="ReviewsBackGrond">
        <div className="ReviewsBuble">
          <WitheTittleAndParagraph
            tittle="TESTIMONIOS"
            text="Nos enorgullece la satisfacción de nuestros clientes y su experiencia con nosotros. Aquí compartimos algunos de sus comentarios que reflejan nuestro compromiso con la calidad y el servicio. ¡Tu opinión también es importante para nosotros!"
          />
          {/* El div Carrousel debe de ser reemplazado por un carrousel de boostrap con imagenes de las reseñas de Google */}
          {/* Revisar posibilidad de traer los datos de forma directa */}
          <div className="CarrouselReviews carrousel1">
            {/* <div className="ImgReviews"></div>
            <p>←    →</p> */}
            <Carousel
              data-bs-theme="dark"
              controls={false}
              indicators={false}
              slide={false}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={review1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={review2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={review3}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={review4}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="CarrouselReviews carrousel2">
            {/* <div className="ImgReviews"></div>
            <p>←    →</p> */}
            <Carousel
              data-bs-theme="dark"
              controls={false}
              indicators={false}
              slide={false}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={review12}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={review22}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={review32}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={review42}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
