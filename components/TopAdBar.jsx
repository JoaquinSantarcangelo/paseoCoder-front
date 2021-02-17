import React from "react";
import { CloseButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Countdown from "../components/Countdown";

const TopAdBar = ({ setTopAdBarOpen }) => {
  return (
    <motion.div
      initial={{ y: "-10vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-10vh" }}
      className="top-ad-bar"
    >
      {/* <div onClick={() => setTopAdBarOpen(false)} className="close-icon">
        <CloseButton />
      </div> */}
      <div className="container">
        {/* <div className="countdown">
          <Countdown />
        </div> */}
        <div className="text">
          <span>10% OFF</span> EN TODOS LOS PRODUCTOS XIAOMI
        </div>
        <div className="ver-oferta">Ver Oferta</div>
      </div>
    </motion.div>
  );
};

export default TopAdBar;
