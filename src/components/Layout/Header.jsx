import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Header() {
  return (
    <header className="jikan-header">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark py-0">
          <a className="navbar-brand" href="/">
            <img className="jikan-header-logo" src="/images/logo.png" alt="" />
            React Jikan
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <Navbar />
            <Search />
          </div>
        </nav>
      </div>
    </header>
  );
}
