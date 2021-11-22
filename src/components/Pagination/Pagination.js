import React from 'react';

function Pagination({ usersPerPage, totalUsers, paginate, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav >
            <ul className="pagination justify-content-center">
                {
                    pageNumbers.map(number => (
                        <li className={`page-item ${currentPage === number ? "active" : ""}`} key={number}>
                            <button className="page-link" onClick={() => paginate(number)}>
                                {number}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Pagination;