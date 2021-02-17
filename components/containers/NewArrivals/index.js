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
      className="new-arrivals"
    >
      <div className="container-alt">
        <motion.div className="title" layoutId="title">
          New Arrivals
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
