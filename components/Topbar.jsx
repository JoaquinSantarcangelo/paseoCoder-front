import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const items = [
  {
    text: "Tiendas",
    link: "/tiendas",
  },
  {
    text: "New Arrivals",
    link: "/new-arrivals",
  },
  {
    text: "Sale",
    link: "/sale",
  },
  {
    text: "Ayuda",
    link: "/ayuda",
  },
  {
    text: "Iniciar Sesión / Registro",
  },
];

const variants = {
  hidden: { opacity: 0, y: "-20vh" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const Topbar = ({ signInUpOpen, setSignInUpOpen }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="topbar"
    >
      <div className="container">
        <div className="items">
          {items.map((item, i) => {
            if (i === 4) {
              return (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i / 20 }}
                  key={i}
                  className="item"
                  onClick={() => setSignInUpOpen(!signInUpOpen)}
                >
                  {item.text}
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i / 20 }}
                  key={i}
                  className="item"
                >
                  <Link to={item.link}>{item.text} </Link>
                </motion.div>
              );
            }
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Topbar;
