import React, { useState } from 'react';
import {
  CRow,
  CCol,
  CButton,
  CFormLabel,
  CFormInput,
  CModal,
  CModalHeader,
  CModalBody, CModalTitle, CForm
} from '@coreui/react';

import CIcon from "@coreui/icons-react";
import { cilMoodBad} from '@coreui/icons';

import PropTypes from "prop-types";

import axios from 'axios';
import apiConfig from 'src/lib/apiConfig';

export function DeleteBulkNotGroupModal({reason}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CButton color="danger" variant="outline" onClick={() => setVisible(!visible)}>삭제</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>그룹 삭제</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CRow>
              <CRow className="justify-content-center">
                <CCol xs={4} className="mt-3">
                    <CIcon icon={cilMoodBad} size="6xl"/>
                </CCol>
              </CRow>
              <CRow className="justify-content-center">
                {reason}
              </CRow>
              <CRow>
                <CCol xs={10}></CCol>
                <CCol xs={2} className="mt-3">
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                  </CButton>
                </CCol>
              </CRow>
            </CRow>
          
        </CModalBody>
      </CModal>
    </>
  );
}


DeleteBulkNotGroupModal.propTypes = {
  reason : PropTypes.string,
};
