import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

//Components
import InfoCards from "./InfoCards";
import TopHero from "./TopHero";
import Hero from "./Hero";
import Brands from "./Brands";

const variantsTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = ({ tiendas, deals }) => {
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
      className="home"
    >
      <TopHero variantsTransition={variantsTransition} />
      <InfoCards />
      <Hero
        deals={deals}
        tiendas={tiendas}
        variantsTransition={variantsTransition}
      />
      <Brands />
    </motion.div>
  );
};

export default Home;
