import React, { useState } from "react";
import { CPagination, CPaginationItem } from "@coreui/react";
import PropTypes from "prop-types";

function MyPagination({ pagable, page, totalPages, first, last, setPage }) {
  const onIncrease = () => {
    setPage(page + 1);
  };
  const onDecrease = () => {
    setPage(page - 1);
  };

  // Calculate the start and end of the page range to display
  const startPage = Math.max(1, page - 2);
  const endPage = Math.min(totalPages, page + 4);

  return (
    <CPagination align="center" aria-label="Page navigation example">
      <CPaginationItem
        aria-label="Previous"
        onClick={onDecrease}
        disabled={first}
      >
        <span aria-hidden="true">&laquo;</span>
      </CPaginationItem>
      {Array(endPage - startPage + 1)
        .fill()
        .map((_, i) => (
          <CPaginationItem
            key={startPage + i}
            onClick={() => setPage(startPage + i - 1)}
            active={startPage + i - 1 === page}
          >
            {startPage + i}
          </CPaginationItem>
        ))}
      <CPaginationItem
        aria-label="Next"
        onClick={onIncrease}
        disabled={last}
      >
        <span aria-hidden="true">&raquo;</span>
      </CPaginationItem>
    </CPagination>
  );
}

MyPagination.propTypes = {
  pagable: PropTypes.object,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  first: PropTypes.bool,
  last: PropTypes.bool,
  setPage: PropTypes.func,
};
export default MyPagination;
