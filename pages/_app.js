import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// CSS Imports
// -- Components --
import "../sass/components/Topbar.sass";
import "../sass/components/Navbar.sass";
import "../sass/components/Footer.sass";
import "../sass/components/SignInUp.sass";

// -- Containers --
import "../sass/containers/Home.sass";
import "../sass/containers/Tiendas.sass";
import "../sass/containers/Tienda.sass";
import "../sass/containers/NewArrivals.sass";
import "../sass/containers/TermsConditions.sass";
import "../sass/containers/SecurityPrivacy.sass";
import "../sass/containers/Sale.sass";
import "../sass/containers/Help.sass";

//Normalizer
import "normalize.css";
3;

const colors = {
  dark: {
    100: "#111111",
    200: "#333333",
    300: "#555555",
  },
  light: {
    100: "f3f3f3",
    200: "e2e2e2",
  },
  brand: {
    100: "00d3a5",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : (
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      )}
    </div>
  );
}

export default MyApp;
