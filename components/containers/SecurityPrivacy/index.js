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
      className="security-privacy"
    >
      <div className="container">
        <div className="title">Seguridad y Privacidad</div>
      </div>
    </motion.div>
  );
};

export default index;
