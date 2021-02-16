import React from "react";
import { motion } from "framer-motion";
import { Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, height: "100vh" }}
      exit={{
        height: "0",
        transition: { duration: 0.6, when: "afterChildren" },
      }}
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
    </motion.div>
  );
};

export default Loading;
