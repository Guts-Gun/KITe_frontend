import React from 'react';
import {
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
  CFormCheck,
} from '@coreui/react';
import PropTypes from "prop-types";

export function PhoneTableRow({id,name,phone,onSelect}) {
  const onCheck = (e,id) =>{
    onSelect(id,e.target.checked);
  }

  return (
    <CTableRow>
      <CTableHeaderCell scope="row">
        <CFormCheck onChange={(e)=>onCheck(e,id)} />
      </CTableHeaderCell>
      <CTableDataCell>{name}</CTableDataCell>
      <CTableDataCell>{phone}</CTableDataCell>
    </CTableRow>
  );
}



PhoneTableRow.propTypes = {
  id : PropTypes.number,
  name : PropTypes.string,
  phone : PropTypes.string,
  onSelect : PropTypes.func
};
