import React from "react";
import { motion } from "framer-motion";
import Tienda from "../Home/Tienda";

const variantsTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const index = ({ tiendas }) => {
  return (
    <motion.div
      variants={variantsTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="tiendas-page"
    >
      <div className="container-alt">
        <div className="title">Tiendas</div>
        <div className="wrapper-alt">
          <div className="tiendas">
            {tiendas.map((t, i) => {
              if (i < 4) return <Tienda infoTienda={t} />;
            })}
          </div>
          <div className="tiendas">
            {tiendas.map((t, i) => {
              if (i > 3) return <Tienda infoTienda={t} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
