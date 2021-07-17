import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  getPaginate,
  queryParamsToObject,
  objectToQueryParams,
} from "../../utils/commonFunctions";

export default function Pagination(props) {
  const { baseUrl, maxSize = 350, itemSize = 50 } = props;
  const objSearch = queryParamsToObject(useLocation().search);
  const pageNum = parseInt(objSearch.page || "1");
  const paginate = getPaginate(maxSize, pageNum, itemSize);

  const passUrl = (page) => {
    return {
      pathname: baseUrl,
      search: objectToQueryParams({ ...objSearch, page }),
    };
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <ul className="pagination">
        <li className={`page-item${pageNum <= 1 ? " disabled" : ""}`}>
          <Link to={passUrl(pageNum - 1)} className="page-link">
            <i className="fa fa-angle-left"></i>
            <span className="sr-only">Previous</span>
          </Link>
        </li>

        {paginate.pages.map((page) => {
          const active = pageNum === page ? " active" : "";
          return (
            <li key={page} className={`page-item${active}`}>
              <Link to={passUrl(page)} className="page-link">
                {page}
              </Link>
            </li>
          );
        })}

        <li
          className={`page-item${
            pageNum >= paginate.totalPages ? " disabled" : ""
          }`}
        >
          <Link to={passUrl(pageNum + 1)} className="page-link">
            <i className="fa fa-angle-right"></i>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
