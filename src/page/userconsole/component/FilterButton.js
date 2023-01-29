import React from "react";
import {CButton, CButtonGroup} from "@coreui/react";
import PropTypes from "prop-types";


function FilterButton({filterList, filter, setFilter}) {

  return (
    <CButtonGroup className="float-end ">
      {filterList.map((value) => (
        <CButton
          color="outline-secondary"
          key={value}
          className="mx-0"
          active={value === filter}
          onClick={() => setFilter(value)}
        >
          {value}
        </CButton>
      ))}
    </CButtonGroup>
  )
}

FilterButton.propTypes = {
  filterList: PropTypes.array,
  filter: PropTypes.string,
  setFilter : PropTypes.func,
}

export default FilterButton;
