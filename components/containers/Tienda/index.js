import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { motion } from "framer-motion";

const variantsTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const index = ({ tiendas }) => {
  const { id } = useParams();
  const [infoTienda, setInfoTienda] = useState(
    tiendas.find((t) => t.id === id)
  );

  useEffect(() => {
    console.log(id);
    console.log(tiendas);
    const aux = tiendas.find((t) => t.id === id);
    setInfoTienda(aux);
  }, [id]);

  return (
    <motion.div
      variants={variantsTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="tienda-page"
    >
      <div
        style={{ backgroundImage: `url(${infoTienda.coverImage})` }}
        className="tienda-hero"
      ></div>
      <div className="container-alt">
        <div className="config"></div>
      </div>
    </motion.div>
  );
};

export default index;
