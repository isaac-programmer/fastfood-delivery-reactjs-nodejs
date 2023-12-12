import React from "react";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { register } from "swiper/element/bundle";

register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Header />

      <BrowserRouter>
        <Rotas />
      </BrowserRouter>

      <Footer />
    </React.Fragment>
  );
}

export default App;
