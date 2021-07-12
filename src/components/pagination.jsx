import React from 'react';
import lodash from 'lodash'
import PropTypes from 'prop-types'



const Pagination = ({itemCount, pageSize, onPageChange, currentPage}) => {
    let pageCount = Math.ceil(itemCount/pageSize)
    if(pageCount === 1) return null
   let pages = lodash.range(1, pageCount + 1)

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => 
                    <li key={page} className={ currentPage === page ? 'page-item active': 'page-item'}>
                    <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                    </li>)}

            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired, 
    currentPage: PropTypes.number.isRequired
}

export default Pagination;