import React from "react";
import { useLocation } from "react-router-dom";

export default function Search() {
  const query = new URLSearchParams(useLocation().search);
  const q = query.get("q") || "";

  return (
    <form action="/anime/search" className="form-inline my-2 my-lg-0">
      <input
        className="form-control form-control-sm mr-sm-2"
        type="text"
        name="q"
        placeholder="Type here..."
        pattern="[A-Za-z0-9]{3,}"
        title="At least 3 characters and contains no special characters."
        defaultValue={q}
      />
      <button className="btn btn-sm btn-danger my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}
