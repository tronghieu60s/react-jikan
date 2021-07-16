import React, { Fragment } from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import SideBar from "./components/Layout/SideBar";
import Router from './Router';

export default function App() {
  return (
    <Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <Router />
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
