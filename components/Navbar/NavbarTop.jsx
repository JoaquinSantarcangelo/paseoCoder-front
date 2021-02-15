import React from "react";
import { MdShoppingCart, MdSearch, MdFavorite } from "react-icons/md";
import { ImMenu } from "react-icons/im";

import { Input, InputGroup, InputRightElement, Select } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  hidden: { opacity: 0, y: "-20vh" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.2 },
  },
};

const NavbarTop = ({ cartOpen, setCartOpen }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="navbar-top"
    >
      <motion.div variants={variants} className="container">
        <motion.div variants={variants} className="left-wrapper">
          <div className="menu-icon">
            <ImMenu />
          </div>
          <Link to="/">
            <div className="logo">
              <img
                src="https://www.pasajeenlinea.com/uploads/logo/logo_5ed1e32b71122.png"
                alt=""
              />
            </div>
          </Link>
          <div className="search-bar">
            <InputGroup>
              <Select
                focusBorderColor="#00d3a5"
                variant="outline"
                placeholder="Productos"
              >
                <option>Tiendas</option>
              </Select>
              <InputRightElement pointerEvents="none" children={<MdSearch />} />
              <Input
                focusBorderColor="#00d3a5"
                type="text"
                placeholder="Buscar productos o tiendas"
              />
            </InputGroup>
          </div>
        </motion.div>
        <motion.div variants={variants} className="right-wrapper">
          <div onClick={() => setCartOpen(!cartOpen)} className="icon">
            <MdShoppingCart />
          </div>
          <div className="icon">
            <MdFavorite />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NavbarTop;
