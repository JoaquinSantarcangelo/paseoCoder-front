import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// CSS Imports
// -- Components --
import "../sass/components/Topbar.sass";
import "../sass/components/Navbar.sass";
import "../sass/components/Footer.sass";
import "../sass/components/SignInUp.sass";

// -- Containers --
import "../sass/containers/Home.sass";

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
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
