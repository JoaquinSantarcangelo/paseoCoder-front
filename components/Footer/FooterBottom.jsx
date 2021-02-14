import React from "react";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="copyright">
          <div className="line">
            Desarrollado por <span>Joaquin Santarcangelo</span>
          </div>
          <div className="line">
            COPYRIGHT © 2020 PASEOCODER - ALL RIGHTS RESERVED
          </div>
        </div>
        <div className="payment-icons">
          <div className="icon">
            <img src="/assets/img/payment-icons/amex.svg" alt="" />
          </div>
          <div className="icon">
            <img src="/assets/img/payment-icons/maestro.svg" alt="" />
          </div>
          <div className="icon">
            <img src="/assets/img/payment-icons/mastercard.svg" alt="" />
          </div>
          <div className="icon">
            <img src="/assets/img/payment-icons/visa.svg" alt="" />
          </div>
          <div className="icon">
            <img src="/assets/img/payment-icons/mercadopago.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
