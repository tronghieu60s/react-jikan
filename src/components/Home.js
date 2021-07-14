import React from "react";
import Boxes from "./Boxes";

export default function Home(props) {
  const { items, isLoading, pagination, nextPage, prevPage } = props;

  const { activePage, page } = pagination

  return (
    <div className="container">
      <Boxes items={items} isLoading={isLoading} />
      <div className="d-flex justify-content-center mt-4">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous" onClick={() => prevPage(page)}>
                <i className="fa fa-angle-left"></i>
                <span className="sr-only">Previous</span>
              </a>
            </li>

            {activePage === 1 ? null : <li className="page-item"><a className="page-link" href="#">{activePage - 1}</a></li>}
            <li className="page-item active"><a className="page-link" href="#">{activePage}</a></li>
            <li className="page-item"><a className="page-link" href="#">{activePage + 1}</a></li>

            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next" onClick={() => nextPage(page)}>
                <i className="fa fa-angle-right"></i>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
