import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { MdLock } from "react-icons/md";
import { HiOutlineAtSymbol } from "react-icons/hi";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, transition: { delay: 0.2 } },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const SignUp = ({ setRegisterOpen }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="content"
    >
      <div className="title">Registrate</div>
      <div className="form">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<HiOutlineAtSymbol />}
          />
          <Input
            focusBorderColor="brand.100"
            type="email"
            placeholder="Correo Electronico"
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<MdLock />} />
          <Input
            focusBorderColor="brand.100"
            type="tel"
            placeholder="Contraseña"
          />
        </InputGroup>
      </div>
      <div className="button">Registrarme</div>
      <div className="register" onClick={() => setRegisterOpen(false)}>
        ¿Ya tienes cuenta? <span>Inicia Sesión</span>
      </div>
    </motion.div>
  );
};

export default SignUp;
