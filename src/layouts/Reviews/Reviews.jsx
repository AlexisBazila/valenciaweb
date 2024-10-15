import React from "react";

import "./Reviews.css";
import WitheTittleAndParagraph from "../../components/WitheTittleAndParagraph/WitheTittleAndParagraph";
import Carousel from "react-bootstrap/Carousel";
import review1 from "../../assets/images/review1.jpg";
import review2 from "../../assets/images/review2.jpg";
import review3 from "../../assets/images/review3.jpg";
import review4 from "../../assets/images/review4.jpg";

function Reviews() {
  return (
    <section className="Reviews">
      <div className="ReviewsBackGrond">
        <div className="ReviewsBuble">
          <WitheTittleAndParagraph
            tittle="REVIEWS"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimos iure. A porro obcaecati necessitatibus excepturi, laboriosam mollitia beatae culpa est commodi perspiciatis illum molestias? Beatae, laboriosam? Eveniet, sint error."
          />
          {/* El div Carrousel debe de ser reemplazado por un carrousel de boostrap con imagenes de las reseñas de Google */}
          <div className="CarrouselReviews">
            {/* <div className="ImgReviews"></div>
            <p>←    →</p> */}
            <Carousel data-bs-theme="dark" controls={false} indicators={false}>
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
        </div>
      </div>
    </section>
  );
}

export default Reviews;
