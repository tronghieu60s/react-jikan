import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import SideBar from "./components/Layout/SideBar";
import Contexts from "./contexts";
import Router from "./Router";

export default function App() {
  return (
    <BrowserRouter>
      <Contexts>
        <Header />
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 col-lg-8">
              <Router />
            </div>
            <div className="col-md-6 col-lg-4 mt-5 mt-md-0">
              <SideBar />
            </div>
          </div>
        </div>
        <Footer />
      </Contexts>
    </BrowserRouter>
  );
}
