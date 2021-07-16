import React from 'react';
import { Link } from "react-router-dom";

function Pagination(props) {
    const { pagination } = props
    const { activePage, page } = pagination

    console.log(page);

    return (
        <div className="d-flex justify-content-center mt-4">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <Link to={`/anime/upcoming/${page - 1}`} className="page-link" href="#" aria-label="Previous">
                            <i className="fa fa-angle-left"></i>
                            <span className="sr-only">Previous</span>
                        </Link>
                    </li>

                    {page <= 1 ? null : <li className="page-item"><Link to={`/anime/upcoming/${page - 1}`} className="page-link">{page - 1}</Link></li>}
                    <li className="page-item active"><a className="page-link" href="#">{page}</a></li>
                    <li className="page-item"><Link to={`/anime/upcoming/${page + 1}`} className="page-link" href="#">{page + 1}</Link></li>

                    <li className="page-item">
                        <Link to={`/anime/upcoming/${page + 1}`} className="page-link" href="#" aria-label="Next">
                            <i className="fa fa-angle-right"></i>
                            <span className="sr-only">Next</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;