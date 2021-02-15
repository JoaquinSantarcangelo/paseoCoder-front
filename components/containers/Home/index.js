import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

//Components
import Tienda from "./Tienda";
import Deal from "./Deal";

const variants = {
  hidden: { opacity: 0, y: "-20vh" },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0 },
};

const tiendas = [
  {
    name: "PhoneStore",
    profileImage:
      "https://www.pasajeenlinea.com/uploads/profile/avatar_5f3fe8d651a874-32039006-74348944.jpg",
    coverImage:
      "https://www.pasajeenlinea.com/uploads/portadas/portada_5f3fe91d63fc43-36693126-88838571.jpg",
    desc: "Venta de tecnología, accesorios y servicio técnico Apple",
    social: { instagram: "http://www.intagram.com/phonestorelp" },
  },
  {
    name: "Silicon Informatica",
    profileImage:
      "https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-19/s150x150/145739863_692926148046697_8231536998551052_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_ohc=3y0RA7YpFsYAX8Yjgkv&tp=1&oh=f5fe5e1eac8f06b4a0011aede8b19ecc&oe=6054312F",
    coverImage:
      "https://storage-asset.msi.com/event/trueGaminglanding/images/msi_pd.png",
    desc: "Venta de tecnología, accesorios y servicio técnico Apple",
    invert: true,
  },
  {
    name: "Grand Central Store",
    profileImage:
      "https://www.pasajeenlinea.com/uploads/profile/avatar_5f3fe8d651a874-32039006-74348944.jpg",
    coverImage:
      "https://www.pasajeenlinea.com/uploads/portadas/portada_5f3fe91d63fc43-36693126-88838571.jpg",
    desc: "Venta de tecnología, accesorios y servicio técnico Apple",
  },
  {
    name: "PhoneStore",
    profileImage:
      "https://www.pasajeenlinea.com/uploads/profile/avatar_5f3fe8d651a874-32039006-74348944.jpg",
    coverImage:
      "https://www.pasajeenlinea.com/uploads/portadas/portada_5f3fe91d63fc43-36693126-88838571.jpg",
    desc: "Venta de tecnología, accesorios y servicio técnico Apple",
  },
  {
    name: "PhoneStore",
    profileImage:
      "https://www.pasajeenlinea.com/uploads/profile/avatar_5f3fe8d651a874-32039006-74348944.jpg",
    coverImage:
      "https://www.pasajeenlinea.com/uploads/portadas/portada_5f3fe91d63fc43-36693126-88838571.jpg",
    desc: "Venta de tecnología, accesorios y servicio técnico Apple",
  },
];

const deals = [
  {
    title: "Iphone 12",
    price: ["USD", "899"],
    image:
      "https://personal.vteximg.com.br/arquivos/ids/405529-600-600/iPhone-SE-White-ATu-plan-Factura-1-1428615.jpg?v=637424406205730000",
  },
  {
    title: "Redmi Note 9",
    price: ["USD", "399"],
    image:
      "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-9-pro/specs1block.png",
  },
  {
    title: "Airpods Max",
    price: ["USD", "699"],
    image:
      "https://www.apple.com/v/airpods-max/c/images/overview/hero__gnfk5g59t0qe_xlarge.png",
  },
];

const variantsTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  const [activeDeal, setActiveDeal] = useState(0);
  const [blockDeal, setBlockDeal] = useState(false);

  return (
    <motion.div
      variants={variantsTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home"
    >
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{
          when: "beforeChildren",
          duration: 1,
          ease: "easeInOut",
        }}
        exit={{ y: "100vh" }}
        className="hero"
      >
        <div className="carousel">
          <div className="container-alt">
            <motion.div
              drag="y"
              dragConstraints={{ top: -800, bottom: 0 }}
              className="tiendas"
            >
              <div className="title">Tiendas</div>
              {tiendas.map((t, i) => {
                return <Tienda key={i} infoTienda={t} i={i} />;
              })}
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1, staggerChildren: 1 }}
              className="deals"
            >
              <div className="indicators">
                {deals.map((d, i) => (
                  <div
                    onClick={() => {
                      setBlockDeal(true);
                      setActiveDeal(i);
                      setBlockDeal(false);
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
            </motion.div>
          </div>
          <motion.div
            drag="x"
            dragConstraints={{ left: -800, right: 0 }}
            className="tiendas-mobile"
          >
            {tiendas.map((t, i) => {
              return <Tienda key={i} infoTienda={t} i={i} />;
            })}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
