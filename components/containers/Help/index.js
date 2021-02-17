import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const variantsTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const index = () => {
  //autoScroll To Top
  useEffect(() => {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    scrollToTop();
  }, []);

  return (
    <motion.div
      variants={variantsTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="help"
    >
      <div className="container-alt">
        <div className="title">Ayuda</div>
      </div>
    </motion.div>
  );
};

export default index;
