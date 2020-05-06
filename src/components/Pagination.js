import React from 'react';
import ReactPaginate from 'react-paginate'
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .pagination .active a {
    background-color: darkorange;
    border-color: darkorange;
    :hover {
        filter: brightness(90%);
        color: #000000;
    }
  }
`;

const Pagination = props => {
    const { pageCount } = props;
    if (!pageCount || pageCount === 1) return null;
    return (
        <PaginationWrapper>
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
        </PaginationWrapper>
    );
};

export default Pagination;