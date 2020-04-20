import React from 'react';
import ReactPaginate from 'react-paginate'
const Pagination = props => {
    const { pageCount } = props;
    if (!pageCount || pageCount === 1) return null;
    return (
        <div className="d-flex justify-content-left align-items-center">
            <ReactPaginate
                pageCount={pageCount}
                breakClassName="page-item"
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link cursor-pointer"
                activeClassName="active"
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link cursor-pointer"
                nextLinkClassName="page-link cursor-pointer"
                disabledClassName="disabled"
                {...props}
            />
        </div>
    );
};

export default Pagination;