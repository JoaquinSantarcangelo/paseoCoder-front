import React from "react";

const items = [
  {
    text: "Notebooks",
    subItems: ["MacBook", "Notebooks"],
  },
  {
    text: "Tablets",
    subItems: ["IPads"],
  },
  {
    text: "Componentes PC",
    subItems: ["Procesadores", "Gabinetes", "Memoria Ram"],
  },
  {
    text: "Servicios",
    subItems: ["Reparacion Apple", "Armado de PC"],
  },
];

const NavbarMain = () => {
  return (
    <div className="navbar-main">
      <div className="container">
        <div className="items">
          {items.map((i) => (
            <div className="item">{i.text}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;
