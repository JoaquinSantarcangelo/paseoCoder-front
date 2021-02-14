import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { AnimatePresence, motion } from "framer-motion";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SigIn from "./SignIn";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2, when: "afterChildren" } },
};

const variantsWrapper = {
  hidden: { opacity: 0, height: "0%" },
  visible: { opacity: 1, height: "fit-content", transition: { delay: 0.2 } },
  exit: {
    opacity: 0,
  },
};

const SignInUp = ({ setSignInUpOpen }) => {
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="sign-in-up"
    >
      <ClickAwayListener onClickAway={() => setSignInUpOpen(false)}>
        <motion.div
          variants={variantsWrapper}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="wrapper"
        >
          <AnimatePresence>
            {registerOpen ? (
              <SignUp setRegisterOpen={setRegisterOpen} />
            ) : (
              <SigIn setRegisterOpen={setRegisterOpen} />
            )}
          </AnimatePresence>
        </motion.div>
      </ClickAwayListener>
    </motion.div>
  );
};

export default SignInUp;
