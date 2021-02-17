import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

var settings = {
  dots: false,
  lazyLoad: true,
  infinite: true,
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const newArrivals = [
  {
    image: "/assets/img/top-hero/promo1-bg.jpg",
  },
];

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
          <div className="slide">
            <div className="container">
              <div className="info">APPLE WATCH SE</div>
              <div className="image"></div>
            </div>
          </div>
          <div className="slide">
            <div className="container">
              <div className="info">Lanzamiento</div>
              <div className="image"></div>
            </div>
          </div>
        </Slider>
      </div>
    </motion.div>
  );
};

export default TopHero;
