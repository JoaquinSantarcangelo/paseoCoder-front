import React from "react";
import { motion } from "framer-motion";

const Tienda = () => {
  return (
    <div className="tienda">
      <div className="image">
        <div className="logo">
          <img
            src="https://www.pasajeenlinea.com/uploads/profile/avatar_5f3fe8d651a874-32039006-74348944.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="info">
        <div className="name">Phone Store</div>
        <div className="desc">
          VENTA DE TECNOLOGÍA, ACCESORIOS Y SERVICIO TÉCNICO APPLE
        </div>
        <div className="ver-tienda button">Ver tienda</div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="indicators"></div>
        <div className="carousel">
          <div className="container-alt">
            <motion.div
              drag="y"
              dragConstraints={{ top: -500, bottom: 0 }}
              className="tiendas"
            >
              <Tienda />
              <Tienda />
              <Tienda />
              <Tienda />
              <Tienda />
            </motion.div>
            <div className="deals">
              <div className="deal">
                <div className="specs">
                  <div className="spec">32 GB</div>
                </div>
                <div className="title">IPhone 12</div>
                <div className="price">
                  <div className="number pesos">
                    <span>$</span>899
                  </div>
                </div>
                <div className="image">
                  <img
                    src="https://personal.vteximg.com.br/arquivos/ids/405529-600-600/iPhone-SE-White-ATu-plan-Factura-1-1428615.jpg?v=637424406205730000"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
