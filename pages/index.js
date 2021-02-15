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
import Search from "../components/containers/Search";
import Tiendas from "../components/containers/Tiendas";

import Tienda from "../components/containers/Tienda";
import Producto from "../components/containers/Producto";
import NewArrivals from "../components/containers/NewArrivals";
import Sale from "../components/containers/Sale";

//---Information Pages
import TermsConditions from "../components/containers/TermsConditions";
import SecurityPrivacy from "../components/containers/SecurityPrivacy";
import Help from "../components/containers/Help";

//Fake DB
const tiendas = [
  {
    name: "PhoneStore",
    id: "phonestore",
    profileImage:
      "https://www.pasajeenlinea.com/uploads/profile/avatar_5f3fe8d651a874-32039006-74348944.jpg",
    coverImage:
      "https://www.pasajeenlinea.com/uploads/portadas/portada_5f3fe91d63fc43-36693126-88838571.jpg",
    desc: "Venta de tecnología, accesorios y servicio técnico Apple",
    social: { instagram: "http://www.intagram.com/phonestorelp" },
  },
  {
    name: "Silicon Informatica",
    id: "silicon-informatica",
    profileImage:
      "https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-19/s150x150/145739863_692926148046697_8231536998551052_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_ohc=3y0RA7YpFsYAX8Yjgkv&tp=1&oh=f5fe5e1eac8f06b4a0011aede8b19ecc&oe=6054312F",
    coverImage:
      "https://storage-asset.msi.com/event/trueGaminglanding/images/msi_pd.png",
    desc: "Venta de tecnología, accesorios y servicio técnico Apple",
    invert: true,
  },
  {
    name: "Grand Central Store",
    id: "grand-central-store",
    profileImage:
      "https://www.pasajeenlinea.com/uploads/profile/avatar_5f3fe8d651a874-32039006-74348944.jpg",
    coverImage:
      "https://www.pasajeenlinea.com/uploads/portadas/portada_5f3fe91d63fc43-36693126-88838571.jpg",
    desc: "Venta de tecnología, accesorios y servicio técnico Apple",
  },
  {
    name: "PhoneStore",
    id: "phonestore",
    profileImage:
      "https://www.pasajeenlinea.com/uploads/profile/avatar_5f3fe8d651a874-32039006-74348944.jpg",
    coverImage:
      "https://www.pasajeenlinea.com/uploads/portadas/portada_5f3fe91d63fc43-36693126-88838571.jpg",
    desc: "Venta de tecnología, accesorios y servicio técnico Apple",
  },
  {
    name: "PhoneStore",
    id: "phonestore",
    profileImage:
      "https://www.pasajeenlinea.com/uploads/profile/avatar_5f3fe8d651a874-32039006-74348944.jpg",
    coverImage:
      "https://www.pasajeenlinea.com/uploads/portadas/portada_5f3fe91d63fc43-36693126-88838571.jpg",
    desc: "Venta de tecnología, accesorios y servicio técnico Apple",
    social: { instagram: "http://www.intagram.com/phonestorelp" },
  },
  {
    name: "Silicon Informatica",
    id: "silicon-informatica",
    profileImage:
      "https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-19/s150x150/145739863_692926148046697_8231536998551052_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_ohc=3y0RA7YpFsYAX8Yjgkv&tp=1&oh=f5fe5e1eac8f06b4a0011aede8b19ecc&oe=6054312F",
    coverImage:
      "https://storage-asset.msi.com/event/trueGaminglanding/images/msi_pd.png",
    desc: "Venta de tecnología, accesorios y servicio técnico Apple",
    invert: true,
  },
  {
    name: "Grand Central Store",
    id: "grand-central-store",
    profileImage:
      "https://www.pasajeenlinea.com/uploads/profile/avatar_5f3fe8d651a874-32039006-74348944.jpg",
    coverImage:
      "https://www.pasajeenlinea.com/uploads/portadas/portada_5f3fe91d63fc43-36693126-88838571.jpg",
    desc: "Venta de tecnología, accesorios y servicio técnico Apple",
  },
  {
    name: "PhoneStore",
    id: "phonestore",
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
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  path="/"
                  exact
                  render={() => <Home deals={deals} tiendas={tiendas} />}
                ></Route>
                <Route path="/search" component={Search}></Route>
                <Route
                  path="/tiendas"
                  render={() => <Tiendas tiendas={tiendas} />}
                ></Route>
                <Route path="/tienda/:id" exact component={Tienda}></Route>
                <Route path="/tienda/:tienda/:id" component={Producto}></Route>

                <Route
                  path="/terminos-y-condiciones"
                  component={TermsConditions}
                ></Route>
                <Route
                  path="/seguridad-y-privacidad"
                  component={SecurityPrivacy}
                ></Route>
                <Route path="/new-arrivals" component={NewArrivals}></Route>
                <Route path="/sale" component={Sale}></Route>
                <Route path="/ayuda" component={Help}></Route>
              </Switch>
            </AnimatePresence>
          )}
        />

        <Footer />
      </Router>
    </div>
  );
}
