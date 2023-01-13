import React, { useState } from 'react';
import {
  CRow, CButton,
  CFormLabel,
  CFormInput,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CModalTitle, CDropdownItem
} from '@coreui/react';

function CopyGroupModal() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CDropdownItem visible="false" color="success" variant="outline" onClick={() => setVisible(!visible)}>그룹 생성</CDropdownItem>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>그룹 생성</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className="mb-3">
            <CFormLabel htmlFor="staticEmail">
              그룹 이름
            </CFormLabel>
            <div className="col-sm-10">
              <CFormInput id="inputPassword" />
            </div>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="inputPassword">
              그룹 설명
            </CFormLabel>
            <div className="col-sm-10">
              <CFormInput id="inputPassword" />
            </div>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="success">그룹 생성</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}
