import Head from "next/head";
import { useState } from "react";

//Components
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//--- Modals
import SignInUp from "../components/SignInUp";
import OnBoardModal from "../components/OnBoardModal";
import CartModal from "../components/CartModal";

//Containers
import Home from "../components/containers/Home";
import { AnimatePresence } from "framer-motion";

const variants1 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Index() {
  const [signInUpOpen, setSignInUpOpen] = useState(false);
  const [onBoardOpen, setOnBoardOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="app">
      <Head>
        <title>Paseo Coder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modals | Starts*/}
      <AnimatePresence>
        {signInUpOpen && <SignInUp setSignInUpOpen={setSignInUpOpen} />}
      </AnimatePresence>
      <AnimatePresence>{onBoardOpen && <OnBoardModal />}</AnimatePresence>
      <AnimatePresence>
        {cartOpen && <CartModal setCartOpen={setCartOpen} />}
      </AnimatePresence>

      {/* Bars | Starts*/}
      <Topbar signInUpOpen={signInUpOpen} setSignInUpOpen={setSignInUpOpen} />
      <Navbar setCartOpen={setCartOpen} cartOpen={cartOpen} />
      {/* Bars | Ends*/}

      <Home />
      <Footer />
    </div>
  );
}
