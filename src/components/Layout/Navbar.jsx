import React from "react";

export default function Navbar() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">
          Home
        </a>
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
          <a className="dropdown-item" href="/anime/airing">
            Airing
          </a>
          <a className="dropdown-item" href="/anime/upcoming">
            Upcoming
          </a>
          <a className="dropdown-item" href="/anime/tv">
            TV
          </a>
          <a className="dropdown-item" href="/anime/movie">
            Movie
          </a>
          <a className="dropdown-item" href="/anime/ova">
            OVA
          </a>
          <a className="dropdown-item" href="/anime/special">
            Special
          </a>
        </div>
      </li>
    </ul>
  );
}
