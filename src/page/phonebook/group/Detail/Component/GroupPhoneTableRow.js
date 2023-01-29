import React from 'react';
import {
  CTableDataCell, CTableHeaderCell,
  CTableRow,
  CFormCheck
} from '@coreui/react';

import PropTypes from "prop-types";

export function GroupPhoneTableRow({key,id,name,phone,email,onSelect}) {
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
      <CTableDataCell>{email}</CTableDataCell>
    </CTableRow>
  );
}


GroupPhoneTableRow.propTypes = {
  key : PropTypes.number,
  id : PropTypes.number,
  name : PropTypes.string,
  phone: PropTypes.string,
  email : PropTypes.string,
  onSelect : PropTypes.func
};