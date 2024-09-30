import React from "react";
import "./FooterVal.css";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import logoval from "../../assets/images/logoval.jpg";
import socialmedia from "../../assets/images/socialmedia.svg";
import contacto from "../../assets/images/contacto.svg";

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
            <a href="" className="LinkRedes">
              <i>
                <CiFacebook />
              </i>
              FACEBOOK
            </a>
            <a href="" className="LinkRedes">
              {" "}
              <i>
                <CiInstagram />
              </i>
              INSTAGRAM
            </a>
          </div>
        </div>
        <div className="RedesFooter">
          <div className="IconoContactoFooter">
            <img src={contacto} alt="" />
            <p>CONTACTANOS</p>
          </div>
          <div className="LinkRedesFooter">
            <a href="" className="LinkContacto">
              <i>
                <FaWhatsapp />
              </i>
              +54 3755 1500000
            </a>
            <a href="" className="LinkContacto">
              {" "}
              <i>
                <MdAlternateEmail />
              </i>
              miemail@valencia.com.ar
            </a>
            <a href="" className="LinkContacto">
              {" "}
              <i>
                <SiGooglemaps />
              </i>
              Av. Italia ####
            </a>
          </div>
        </div>
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
