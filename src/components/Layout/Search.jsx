import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Search() {
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const q = query.get("q") || "";

  const [search, setSearch] = useState(q);

  const onSubmit = (e) => {
    e.preventDefault();

    if (search.length === 0) return;
    if (!new RegExp(/^[A-Za-z0-9\s]{3,}$/).test(search)) return;

    history.push({ pathname: "/anime/search", search: `?q=${search}` });
  };

  return (
    <form onSubmit={onSubmit} className="form-inline my-2 my-lg-0">
      <input
        className="form-control form-control-sm mr-sm-2"
        type="text"
        name="q"
        placeholder="Type here..."
        pattern="[A-Za-z0-9\s]{3,}"
        title="At least 3 characters and contains no special characters."
        onFocus={(e) => e.target.select()}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
      <button className="btn btn-sm btn-danger my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}
