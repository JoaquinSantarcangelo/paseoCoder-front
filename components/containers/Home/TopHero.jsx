import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  adaptiveHeight: true,
  autoplaySpeed: 7000,
  speed: 750,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const newArrivals = [
  {
    title: "Apple Watch Se",
    subtitle: "El futuro de la salud en tu muñeca",
    image:
      "https://www.macstoreonline.com.mx/img/LP/WatchSE/watch_Cabecera.png",
    background: "/assets/img/top-hero/promo1-bg.jpg",
  },
  {
    title: "Macbook Air M1",
    subtitle: "Un nuevo poder toma vuelo.",
    image:
      "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP825/macbookair.png",
    background: "/assets/img/top-hero/promo1-bg.jpg",
  },
  {
    toptitle: "Xiaomi",
    title: "Mi Band 5",
    subtitle: "LA NUEVA GENERACION DE XIAOMI",
    image:
      "https://i01.appmifile.com/webfile/globalimg/79/A523DF93-D4C3-593A-9B5E-E6CC6CDE6B61.png",
    background: "/assets/img/top-hero/promo1-bg.jpg",
  },
];

const variantsRotate = {
  hidden: { opacity: 0, rotateZ: 45, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    rotateZ: 0,
    filter: "blur(0px)",
    transition: { delay: 0.6, duration: 1.4 },
  },
  exit: { opacity: 0, rotateZ: -45, transition: { duration: 1.4 } },
};

const variants1 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 1.4 } },
  exit: { opacity: 0, y: -20 },
};

const variantsBlur = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)", scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { delay: 1, duration: 1.4 },
  },
  exit: { opacity: 0, y: -20 },
};

const Slide = ({ id, slideInfo, variants, shadow, overlay, className }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      // setTimeout(() => controls.start("visible"), 100);
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      id={id}
      className={`slide ${className} ${overlay && "overlay"}`}
    >
      <div className="container">
        <motion.div
          variants={variants1}
          initial="hidden"
          animate={controls}
          exit="exit"
          className={shadow ? "image shadow" : "image"}
          className="info"
        >
          <motion.div variants={variants1} className="toptitle">
            {slideInfo.toptitle}
          </motion.div>
          <motion.div variants={variants1} className="title">
            {slideInfo.title}
          </motion.div>
          <motion.div variants={variants1} className="subtitle">
            {slideInfo.subtitle}
          </motion.div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={controls}
          exit="exit"
          className="image"
          ref={ref}
        >
          <img src={slideInfo.image} alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const TopHero = ({ variantsTransition }) => {
  return (
    <motion.div variants={variantsTransition} className="top-hero">
      <div className="controls container-alt">
        <div className="control left">
          <IoIosArrowDropleftCircle />
        </div>
        <div className="control right">
          <IoIosArrowDroprightCircle />
        </div>
      </div>
      <div className="slider">
        <Slider {...settings}>
          <Slide
            id="first"
            className="squares"
            variants={variantsRotate}
            slideInfo={newArrivals[0]}
          />
          <Slide
            id="second"
            className="wood-2"
            slideInfo={newArrivals[1]}
            variants={variantsBlur}
            shadow
            overlay
          />
          <Slide
            id="third"
            variants={variantsBlur}
            className="diagmonds"
            slideInfo={newArrivals[2]}
          />
        </Slider>
      </div>
    </motion.div>
  );
};

export default TopHero;
