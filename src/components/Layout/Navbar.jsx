import React from "react";
import { Link } from "react-router-dom";
import { animeSubtype, mangaSubtype } from "../../const/jikan";

export default function Navbar() {
  return (
    <ul className="navbar-nav mr-auto mt-3 mt-md-0">
      <li className="nav-item mb-1 mb-md-0">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item dropdown mb-1 mb-md-0">
        <a
          href=""
          className="nav-link dropdown-toggle"
          id="dropdownId"
          data-toggle="dropdown"
        >
          Anime
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          {animeSubtype.map((item) => (
            <Link
              key={item}
              className="dropdown-item text-capitalize"
              to={`/animation/anime/${item}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </li>
      <li className="nav-item dropdown mb-1 mb-md-0">
        <a
          href=""
          className="nav-link dropdown-toggle"
          id="dropdownId"
          data-toggle="dropdown"
        >
          Manga
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          {mangaSubtype.map((item) => (
            <Link
              key={item}
              className="dropdown-item text-capitalize"
              to={`/animation/manga/${item}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </li>
    </ul>
  );
}
