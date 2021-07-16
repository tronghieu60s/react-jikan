import React from "react";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import SideBar from "./components/Layout/SideBar";
import Contexts from "./contexts";
import Router from "./Router";

export default function App() {
  return (
    <Contexts>
      <Header />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-8">
            <Router />
          </div>
          <div className="col-md-4 mt-5 mt-md-0">
            <SideBar />
          </div>
        </div>
      </div>
      <Footer />
    </Contexts>
  );
}
