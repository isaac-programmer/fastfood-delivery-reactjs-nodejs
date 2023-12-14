import "./index.scss";
import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function HomeAdminView(): JSX.Element {
  return (
    <React.Fragment>
      <Header />

      <main id="home-admin">
        <section id="user-table">
          
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
}
