import React from "react";
import { IoCashOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { MdLiveHelp } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const InfoCards = () => {
  return (
    <div className="info-cards">
      <div className="container-alt">
        <div className="card">
          <div className="icon">
            <IoCashOutline />
          </div>
          <div className="text">
            <div className="title">Pagá como quieras</div>
            <div className="subtitle">
              Paga online o en efectivo cuando retiras
            </div>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <FaShippingFast />
          </div>
          <div className="text">
            <div className="title">Envios</div>
            <div className="subtitle">
              Recibilo en tu casa o retiralo en el comercio.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <MdLiveHelp />
          </div>
          <div className="text">
            <div className="title">Contactanos</div>
            <div className="subtitle">
              Te ayudamos con tu compra hasta que llegue a tus manos
            </div>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <RiSecurePaymentLine />
          </div>
          <div className="text">
            <div className="title">Comprá seguro</div>
            <div className="subtitle">
              Protegemos todos tus datos personales.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
