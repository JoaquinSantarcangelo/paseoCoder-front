import Head from "next/head";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
import Tiendas from "../components/containers/Tiendas";

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
      <Router>
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

        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Home}></Route>
                <Route path="/tiendas" component={Tiendas}></Route>
              </Switch>
            </AnimatePresence>
          )}
        />

        <Footer />
      </Router>
    </div>
  );
}
