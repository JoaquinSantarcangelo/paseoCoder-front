import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    text: "Tiendas",
    link: "#",
  },
  {
    text: "New Arrivals",
    link: "#",
  },
  {
    text: "Verano 2021",
    link: "#",
  },
  {
    text: "Sale",
    link: "#",
  },
  {
    text: "Ayuda",
    link: "#",
  },
  {
    text: "Iniciar Sesión / Registro",
    link: "#",
  },
];

const Topbar = ({ signInUpOpen, setSignInUpOpen }) => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="items">
          {items.map((item, i) => {
            if (i === 5) {
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
                  {item.text}
                </motion.div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
