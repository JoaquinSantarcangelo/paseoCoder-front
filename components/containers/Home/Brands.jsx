import React from "react";
import { motion } from "framer-motion";

const brands = [
  {
    link: "/assets/img/brands/apple.svg",
  },
  {
    link: "/assets/img/brands/xiaomi.svg",
  },
  {
    link: "/assets/img/brands/samsung.svg",
  },
  {
    link: "/assets/img/brands/asus.svg",
  },
  {
    link: "/assets/img/brands/asus-rog-1.svg",
  },
  {
    link: "/assets/img/brands/nvidia.svg",
  },
];

const Brands = () => {
  return (
    <div className="brands">
      <motion.div
        drag="x"
        dragConstraints={{ left: -200, right: 0 }}
        className="container"
      >
        {brands.map((b) => (
          <div className="brand">
            <img src={b.link}></img>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Brands;
