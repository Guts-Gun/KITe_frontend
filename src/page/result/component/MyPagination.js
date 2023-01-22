import React, {useState} from "react";
import {CPagination, CPaginationItem} from "@coreui/react";
import PropTypes from "prop-types";

function MyPagination({pagable, page, totalPages, first, last, setPage}) {
  const onIncrease = () => {
    setPage(page + 1)
    console.log(page)
  }
  const onDecrease = () => {
    setPage(page - 1)
    console.log(page)
  }

  return (
    <CPagination align="center" aria-label="Page navigation example">
      <CPaginationItem aria-label="Previous" onClick={onDecrease} disabled={first}>
        <span aria-hidden="true">&laquo;</span>
      </CPaginationItem>
      {Array(totalPages)
        .fill()
        .map((_, i) => (
          <CPaginationItem
            key={i + 1}
            onClick={() => setPage(i)}
            active={i  === page}
          >
            {i + 1}
          </CPaginationItem>
        ))}
      <CPaginationItem aria-label="Next" onClick={onIncrease} disabled={last}>
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
}
export default MyPagination;
