import React from "react";
import { motion } from "framer-motion";
import { Spinner } from "@chakra-ui/react";

const variants = {
  hidden: { opacity: 1 },
  animate: {
    opacity: 1,
    height: "100vh",
    transition: { when: "beforeChildren" },
  },
  exit: { height: "0", transition: { duration: 0.6, when: "beforeChildren" } },
};

const Loading = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="loading"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="wrapper"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="dark.200"
          color="#f3f3f3"
          size="xl"
        />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        exit={{ y: [0, 0] }}
        className="layer"
      ></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        exit={{ y: [0, -400] }}
        className="layer"
      ></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        exit={{ y: [0, -600, -1200] }}
        className="layer"
      ></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        exit={{ y: [0, -800, -1400] }}
        className="layer"
      ></motion.div>
    </motion.div>
  );
};

export default Loading;
