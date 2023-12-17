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

register();

function App(): JSX.Element {
  return (
    <React.Fragment>
      <AuthProvider>
        <ShoppingCartProvider>
          <BrowserRouter>
            <Rotas />
          </BrowserRouter>
        </ShoppingCartProvider>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
