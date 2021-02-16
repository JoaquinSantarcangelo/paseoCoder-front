import React from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const FooterMain = () => {
  return (
    <div className="footer-main">
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img
              src="https://www.pasajeenlinea.com/uploads/logo/logo_5ed1e32b71122.png"
              alt=""
            />
          </div>
        </Link>
        <div className="enlaces-rapidos">
          <div className="text header">Enlaces Rapidos</div>
          <Link to="/tiendas">
            <div className="text">Tiendas</div>
          </Link>
          <Link to="/search">
            <div className="text">Buscar</div>
          </Link>
          <Link to="/ofertas">
            <div className="text">Ofertas</div>
          </Link>
        </div>
        <div className="info">
          <div className="text header">Informacion</div>
          <Link to="/terminos-y-condiciones">
            <div className="text">Terminos y Condiciones</div>
          </Link>
          <Link to="/seguridad-y-privacidad">
            <div className="text">Seguridad y Privacidad</div>
          </Link>
          <Link to="/contacto">
            <div className="text">Contacto</div>
          </Link>
        </div>
        <div className="social-links">
          <div className="text header">Seguinos</div>
          <div className="social-icons">
            <div className="icon">
              <AiFillInstagram />
            </div>
            <div className="icon">
              <AiFillFacebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
