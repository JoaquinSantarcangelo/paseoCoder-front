import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

//Components
import TiendaHero from "./TiendaHero";

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

  //autoScroll To Top
  useEffect(() => {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    scrollToTop();
  }, []);

  //Fetch Params with info
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
      <TiendaHero infoTienda={infoTienda} />
      <div className="container-alt">
        <div className="config"></div>
      </div>
    </motion.div>
  );
};

export default index;
