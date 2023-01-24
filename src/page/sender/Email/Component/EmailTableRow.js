import React from 'react';
import {
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
  CFormCheck,
} from '@coreui/react';
import PropTypes from "prop-types";

export function EmailTableRow({id,name,email,onSelect}) {
  const onCheck = (e,id) =>{
    onSelect(id,e.target.checked);
  }

  return (
    <CTableRow>
      <CTableHeaderCell scope="row">
        <CFormCheck onChange={(e)=>onCheck(e,id)} />
      </CTableHeaderCell>
      <CTableDataCell>{name}</CTableDataCell>
      <CTableDataCell>{email}</CTableDataCell>
    </CTableRow>
  );
}



EmailTableRow.propTypes = {
  id : PropTypes.number,
  name : PropTypes.string,
  email : PropTypes.string,
  onSelect : PropTypes.func
};
