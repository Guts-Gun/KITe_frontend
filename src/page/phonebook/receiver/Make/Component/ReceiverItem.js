import React from 'react';
import { CButton, CListGroup, CListGroupItem } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilMinus } from '@coreui/icons';

import PropTypes from "prop-types";

export function ReceiverItem({key,id,name,phone,email,onDelete}) {
  return (
    <CListGroupItem className="d-flex">
      <span>{name} ({!phone? "null" : phone}) ({!email? "null" : email})</span>
      <div className="ms-auto">
        <CButton
          color="danger"
          size="sm"
          variant="outline"
          shape="rounded-pill"
          onClick={()=>onDelete(id)}
        >
          <CIcon className="CButton" icon={cilMinus} size="sm" />
        </CButton>
      </div>
    </CListGroupItem>
  );
}


ReceiverItem.propTypes = {
  key : PropTypes.number,
  id : PropTypes.number,
  name : PropTypes.string,
  phone : PropTypes.string,
  email : PropTypes.string,
  onDelete : PropTypes.func,
};

