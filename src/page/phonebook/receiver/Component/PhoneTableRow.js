import React from 'react';
import {
  CTableDataCell, CTableHeaderCell,
  CTableRow,
  CFormCheck
} from '@coreui/react';

import PropTypes from "prop-types";

export function PhoneTableRow({key,id,name,phone,email,groupList,onSelect}) {
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
      <CTableDataCell>{}</CTableDataCell>
    </CTableRow>
  );
}


PhoneTableRow.propTypes = {
  key : PropTypes.number,
  id : PropTypes.number,
  name : PropTypes.string,
  phone: PropTypes.string,
  email : PropTypes.string,
  groupList : PropTypes.array,
  onSelect : PropTypes.func
};