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
    tiendas.find((t) => (t.id = id))
  );

  useEffect(() => {
    setInfoTienda(tiendas.find((t) => (t.id = id)));
    console.log(id, infoTienda)
  }, [id]);

  return (
    <motion.div
      variants={variantsTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="tienda-page"
    >
      <div className="container">
        <div className="title">{infoTienda.name}</div>
      </div>
    </motion.div>
  );
};

export default index;
