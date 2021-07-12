import React, { Fragment } from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import HomeContainer from "./containers/Home";

export default function App() {
  return (
    <Fragment>
      <Header />
      <HomeContainer />
      <Footer />
    </Fragment>
  );
}
