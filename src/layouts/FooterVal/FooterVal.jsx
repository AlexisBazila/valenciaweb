import React from "react";
import "./FooterVal.css";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import logoval from "../../assets/images/logoval.jpg";
import socialmedia from "../../assets/images/socialmedia.svg";

function FooterVal() {
  return (
    <section className="SecFooter">
      <div className="Footer">
        <div className="LogoFooter">
          <div className="ImgLogoFooter">
            <img src={logoval} alt="" />
          </div>
        </div>
        <div className="RedesFooter">
          <div className="IconoRedesFooter">
            <img src={socialmedia} alt="" />
            <p>SIGUENOS</p>
          </div>
          <div className="LinkRedesFooter">
          <i><CiFacebook /></i><a href="">Facebook</a>
            <i><CiInstagram /></i><a href="">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterVal;
