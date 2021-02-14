import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { Input, InputGroup, InputRightElement, Select } from "@chakra-ui/react";

const NavbarTop = () => {
  return (
    <div className="navbar-top">
      <div className="container">
        <div className="left-wrapper">
          <div className="logo">
            <img
              src="https://www.pasajeenlinea.com/uploads/logo/logo_5ed1e32b71122.png"
              alt=""
            />
          </div>
          <div className="search-bar">
            <InputGroup>
              <Select
                focusBorderColor="brand.100"
                variant="outline"
                placeholder="Productos"
              >
                <option>Tiendas</option>
              </Select>
              <InputRightElement pointerEvents="none" children={<MdSearch />} />
              <Input
                focusBorderColor="brand.100"
                type="text"
                placeholder="Buscar productos o tiendas"
              />
            </InputGroup>
          </div>
        </div>
        <div className="right-wrapper">
          <div className="icon">
            <MdShoppingCart />
          </div>
          <div className="icon">
            <MdFavorite />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
