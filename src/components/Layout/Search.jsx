import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Search() {
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const [search, setSearch] = useState(query.get("q") || "");
  const [option, setOption] = useState("anime");

  const onSubmit = (e) => {
    e.preventDefault();

    if (search.length === 0) return;
    if (!new RegExp(/^[A-Za-z0-9\s]{3,}$/).test(search)) return;

    history.push({
      pathname: `/animation/${option}/search`,
      search: `?q=${search}`,
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="form-inline my-2 my-lg-0"
      style={{ flexFlow: "inherit" }}
    >
      <input
        className="w-100 form-control form-control-sm mr-2"
        type="text"
        name="q"
        placeholder="Search here..."
        pattern="[A-Za-z0-9\s]{3,}"
        title="At least 3 characters and contains no special characters."
        onFocus={(e) => e.target.select()}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
      <select
        className="form-control form-control-sm mr-2"
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="anime">Anime</option>
        <option value="manga">Manga</option>
      </select>
      <button className="btn btn-sm btn-danger my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}
