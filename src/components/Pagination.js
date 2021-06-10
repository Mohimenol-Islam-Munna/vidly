import React from 'react'
import _ from 'lodash'

function Pagination({ totalMovies, moviePerPage, currentPage, onPageChangeHandler }) {

    const page = Math.ceil(totalMovies / moviePerPage);

    const pages = _.range(1, page + 1)

    return (
        <div>
            <ul className="pagination">
                {
                    pages.map(page => {
                        return (
                            <li className={page === currentPage ? "page-item active" : "page-item"} key={page} onClick={() => onPageChangeHandler(page)}>
                                <a className="page-link">{page}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Pagination
