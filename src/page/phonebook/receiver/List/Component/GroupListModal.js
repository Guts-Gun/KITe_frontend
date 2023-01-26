import React, { useState } from 'react';
import {
  CRow,
  CCol,
  CButton,
  CFormLabel,
  CFormInput,
  CModal,
  CModalHeader,
  CModalBody, CModalTitle, CForm,
  CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell
} from '@coreui/react';

import CIcon from "@coreui/icons-react";
import { cilMoodBad} from '@coreui/icons';

import PropTypes from "prop-types";

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';

export function GroupListModal({groupList}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CButton variant="outline" onClick={() => setVisible(!visible)}>확인</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>속해 있는 그룹</CModalTitle>
        </CModalHeader>
        <CModalBody>

              <CRow className="justify-content-center">
                <CCol lg={2}></CCol>
                <CCol lg={8}>
                  <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">그룹 이름</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {groupList.map(d=>
                    <CTableRow key={d.id}>
                      <CTableDataCell>{d.groupName}</CTableDataCell>
                    </CTableRow>)}
                  </CTableBody>
                  </CTable>
                </CCol>
                <CCol lg={2}></CCol>
              </CRow>

              <CRow>
                <CCol xs={10}></CCol>
                <CCol xs={2} className="mt-3">
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                  </CButton>
                </CCol>
              </CRow>
        </CModalBody>
      </CModal>
    </>
  );
}


GroupListModal.propTypes = {
  groupList : PropTypes.array,
};
