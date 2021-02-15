import React from "react";
import { motion } from "framer-motion";

const variantsDeal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1 },
  },
  exit: { opacity: 0 },
};

const variantsDeal2 = {
  hidden: { opacity: 0, height: "0%" },
  visible: {
    opacity: 1,
    height: "fit-content",
    transition: { delay: 1.4 },
  },
  exit: { opacity: 0 },
};

const Deal = ({ infoDeal, i }) => {
  return (
    <motion.div
      variants={variantsDeal}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="deal"
    >
      <div className="specs">
        <div className="spec">32 GB</div>
      </div>
      <motion.div
        variants={variantsDeal2}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="title"
      >
        {infoDeal.title}
      </motion.div>
      <motion.div
        variants={variantsDeal2}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="price"
      >
        <div className="number pesos">
          <span>{infoDeal.price[0]}</span>
          {infoDeal.price[1]}
        </div>
      </motion.div>
      <motion.div variants={variantsDeal} className="image">
        <img src={infoDeal.image} alt="" />
        <img src={infoDeal.image} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Deal;
