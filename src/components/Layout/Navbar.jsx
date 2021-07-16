import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item dropdown">
        <a
          href=""
          className="nav-link dropdown-toggle"
          id="dropdownId"
          data-toggle="dropdown"
        >
          Anime
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <Link className="dropdown-item" to="/anime/airing">
            Airing
          </Link>
          <Link className="dropdown-item" to="/anime/upcoming">
            Upcoming
          </Link>
          <Link className="dropdown-item" to="/anime/tv">
            TV
          </Link>
          <Link className="dropdown-item" to="/anime/movie">
            Movie
          </Link>
          <Link className="dropdown-item" to="/anime/ova">
            OVA
          </Link>
          <Link className="dropdown-item" to="/anime/special">
            Special
          </Link>
        </div>
      </li>
    </ul>
  );
}
