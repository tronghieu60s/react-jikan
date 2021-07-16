import React from 'react'

export default function Search() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control form-control-sm mr-sm-2"
          type="text"
          placeholder="Search"
        />
        <button className="btn btn-sm btn-danger my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
}
