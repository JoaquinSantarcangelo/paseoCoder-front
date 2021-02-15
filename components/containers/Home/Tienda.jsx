import React from "react";
import { motion } from "framer-motion";
import { Divider } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";

const variants = {
  hidden: { opacity: 0, y: "-5vh" },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0 },
};

const Tienda = ({ infoTienda, i }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.6 + i / 5,
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.2,
      }}
      className="tienda"
    >
      <div
        style={{ backgroundImage: `url(${infoTienda.coverImage})` }}
        className="image"
      >
        <div className={infoTienda.invert ? "social invert" : "social"}>
          {infoTienda.social && infoTienda.social.instagram && (
            <a
              target="_blank"
              rel="noreferrer"
              href={infoTienda.social.instagram}
            >
              <div id="instagram">
                <AiFillInstagram />
              </div>
            </a>
          )}
        </div>
        <div className="logo">
          <img src={infoTienda.profileImage} alt="" />
        </div>
      </div>
      <div className="info">
        <div className="wrapper">
          <div className="name">{infoTienda.name}</div>
          <Divider />
          <div className="desc">{infoTienda.desc}</div>
        </div>
        <div className="ver-tienda button">Ver tienda</div>
      </div>
    </motion.div>
  );
};

export default Tienda;
