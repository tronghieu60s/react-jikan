import React, { Fragment } from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import HomeContainer from "./containers/Home";
import SideBar from "./components/Layout/SideBar";

export default function App() {
  return (
    <Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <HomeContainer />
          </div>
          <div className="col-md-3">
            <SideBar />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
