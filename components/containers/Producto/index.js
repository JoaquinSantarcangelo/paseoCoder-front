import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const variantsTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const index = () => {
  const { tienda, id } = useParams();

  return (
    <motion.div
      variants={variantsTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="producto-page"
    >
      <div className="container">
        Producto {id} de {tienda}
      </div>
    </motion.div>
  );
};

export default index;
