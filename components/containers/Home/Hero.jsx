import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

//Components
import Tienda from "./Tienda";
import Deal from "./Deal";
import CountdownC from "../../Countdown";

const variants = {
  hidden: { opacity: 0, y: "-20vh" },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0 },
};

const Hero = ({ variantsTransition, tiendas, deals }) => {
  const [activeDeal, setActiveDeal] = useState(2);
  const [blockDeal, setBlockDeal] = useState(false);

  return (
    <motion.div variants={variantsTransition} className="hero">
      <div className="carousel">
        <div className="container-alt">
          <div className="wrapper">
            <div className="subwrapper">
              <div className="title">Tiendas</div>
              <Link to="/tiendas" className="ver-todas">
                Ver todas
              </Link>
            </div>
            <div className="drag-wrapper">
              <motion.div
                drag="y"
                dragConstraints={{ top: -600, bottom: 0 }}
                className="tiendas"
              >
                {tiendas.map((t, i) => {
                  return <Tienda key={i} infoTienda={t} i={i} />;
                })}
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1, staggerChildren: 1 }}
            className="deals"
          >
            <CountdownC />
            <div className="indicators">
              {deals.map((d, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setActiveDeal(i);
                  }}
                  className={
                    i === activeDeal ? "indicator active" : "indicator"
                  }
                ></div>
              ))}
            </div>
            <AnimatePresence>
              {activeDeal === 0 && <Deal infoDeal={deals[0]} />}
            </AnimatePresence>
            <AnimatePresence>
              {activeDeal === 1 && <Deal infoDeal={deals[1]} />}
            </AnimatePresence>
            <AnimatePresence>
              {activeDeal === 2 && <Deal infoDeal={deals[2]} />}
            </AnimatePresence>
            <AnimatePresence>
              {activeDeal === 3 && <Deal infoDeal={deals[3]} />}
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="mobile-wrapper">
          <motion.div
            drag="x"
            dragConstraints={{ left: -800, right: 200 }}
            className="tiendas-mobile"
          >
            {tiendas.map((t, i) => {
              return <Tienda key={i} infoTienda={t} i={i} />;
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
