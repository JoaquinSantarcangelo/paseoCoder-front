import React from "react";
import { motion } from "framer-motion";
import ClickAwayListener from "react-click-away-listener";
import { CloseButton, Divider } from "@chakra-ui/react";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const variantsWrapper = {
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    transition: { duration: 0.66, ease: "easeInOut" },
  },
  exit: {
    x: "100vw",
    transition: { duration: 0.66, ease: "easeInOut" },
  },
};
const CartModal = ({ cartItems, setCartOpen }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="cart-modal"
    >
      <ClickAwayListener onClickAway={() => setCartOpen(false)}>
        <motion.div variants={variantsWrapper} className="wrapper">
          <div onClick={() => setCartOpen(false)} className="close-icon">
            <CloseButton />
          </div>
          <div className="title">Carrito</div>
          <Divider />
          {!cartItems && <div className="empty">No hay items todavia</div>}
        </motion.div>
      </ClickAwayListener>
    </motion.div>
  );
};

export default CartModal;
