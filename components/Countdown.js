import React, { useEffect } from "react";
import { motion } from "framer-motion";
const dealsDate = new Date("2021-02-17");

const Countdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 2 } }}
      exit={{ opacity: 0, y: 20 }}
      className="countdown"
    >
      🔥 18:44:02
    </motion.div>
  );
};

export default Countdown;
