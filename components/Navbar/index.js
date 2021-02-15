import React from "react";
import NavbarTop from "./NavbarTop";
import NavbarMain from "./NavbarMain";

const index = ({ cartOpen, setCartOpen }) => {
  return (
    <div className="navbar">
      <NavbarTop cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <NavbarMain />
    </div>
  );
};

export default index;
