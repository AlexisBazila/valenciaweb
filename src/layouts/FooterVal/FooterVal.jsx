import React from "react";
import "./FooterVal.css";
import logoval from "../../assets/images/logoval.jpg";

function FooterVal() {
  return (
    <section className="SecFooter">
      <div className="Footer">
        <div className="LogoFooter">
          <div className="ImgLogoFooter">
            <img src={logoval} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterVal;
