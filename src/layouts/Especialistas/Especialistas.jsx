import React from "react";
import "./Especialistas.css";
function Especialistas() {
  return (
    <section className="EspecialistasSection">
      <div className="Especialistas-BigImg"></div>
      <div className="EspecialistasText">
        <div className="EspecialistasTextTitle">
          <h3>NUESTRO EQUIPO DE ESPECIALISTAS</h3>
        </div>
        <div className="Especialistas-SmallImg">
          <div className="SmallImg"></div>

          <div className="parrafos">
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis optio aperiam ipsa illo atque vitae accusamus
              temporibus recusandae minus rerum veritatis voluptatum
              repellendus, labore magnam quia quaerat inventore velit tempora.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              molestiae repudiandae nemo distinctio nostrum voluptatem sed,
              reiciendis enim quas. Eum provident laudantium voluptate nesciunt
              nemo molestiae veniam, ut asperiores consectetur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              beatae officia, distinctio inventore reiciendis iure sequi cum aut
              aliquam, voluptatibus repellendus numquam mollitia suscipit
              nostrum fuga odit vitae soluta quo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Especialistas;
