import React from "react";
import { Link } from "react-router-dom";

export default function Pagination(props) {
  const { baseUrl, currentPage } = props;
  const pageNum = parseInt(currentPage);

  return (
    <div className="d-flex justify-content-center mt-4">
      <ul className="pagination">
        <li className={`page-item${pageNum <= 1 ? ' disabled' : ''}`}>
          <Link
            to={{ pathname: baseUrl, search: `?page=${pageNum - 1}` }}
            className="page-link"
          >
            <i className="fa fa-angle-left"></i>
            <span className="sr-only">Previous</span>
          </Link>
        </li>

        <li className="page-item active">
          <Link to={baseUrl} className="page-link">
            {pageNum}
          </Link>
        </li>

        <li className="page-item">
          <Link
            to={{ pathname: baseUrl, search: `?page=${pageNum + 1}` }}
            className="page-link"
          >
            <i className="fa fa-angle-right"></i>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
