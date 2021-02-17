import React from "react";

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
      <div className="container">
        {brands.map((b) => (
          <div className="brand">
            <img src={b.link}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
