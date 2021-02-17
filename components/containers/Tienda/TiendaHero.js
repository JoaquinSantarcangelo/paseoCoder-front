import React from "react";

const TiendaHero = ({ infoTienda }) => {
  return (
    <div
      style={{ backgroundImage: `url(${infoTienda.coverImage})` }}
      className="tienda-hero"
    >
      <div className="container">
        <div className="logo">
          <div
            className="placeholder"
            style={{ backgroundImage: `url(${infoTienda.profileImage})` }}
          ></div>
        </div>
        <div className="name">{infoTienda.name}</div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default TiendaHero;
