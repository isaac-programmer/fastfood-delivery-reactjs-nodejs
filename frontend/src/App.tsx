import React from "react";
import Rotas from "./routes";
import { BrowserRouter } from "react-router-dom";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';
import AuthProvider from "./context/Auth/provider";
import ShoppingCartProvider from "./context/ShoppingCart/provider";
import { ThemeProvider, createTheme } from "@mui/material";

register();

// Configuração do tema do projeto
const theme = createTheme({
  palette: {
    primary: {
      main: "#A60303",
    },
    secondary: {
      main: "#59320F",
    },
  },

});

function App(): JSX.Element {
  return (
    <React.Fragment>
      <AuthProvider>
        <ShoppingCartProvider>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Rotas />
            </BrowserRouter>
          </ThemeProvider>
        </ShoppingCartProvider>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
