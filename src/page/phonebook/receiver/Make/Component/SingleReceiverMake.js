import React from 'react';
import { CFormInput, CFormLabel, CRow, CFormSelect, CButton, CCardBody, CCardFooter, CCol } from '@coreui/react';

export function SingleReceiverMake() {
  return (
    <div>
      <CCardBody>
        <CRow className="mb-3">
          <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
            그룹
          </CFormLabel>
          <div className="col-sm-10">
            <CFormSelect aria-label="Default select example">
              <option value="1">호</option>
              <option value="2">잇</option>
              <option value="3">잇</option>
            </CFormSelect>
          </div>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
            이름
          </CFormLabel>
          <div className="col-sm-10">
            <CFormInput id="inputPassword" />
          </div>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
            전화번호
          </CFormLabel>
          <div className="col-sm-10">
            <CFormInput id="inputPassword" />
          </div>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
            이메일
          </CFormLabel>
          <div className="col-sm-10">
            <CFormInput id="inputPassword" />
          </div>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CCol lg={12} className="text-end">
          <CButton color="success" variant="outline" variactive={true} disabled={false}>
            희원 추가
          </CButton>
        </CCol>
      </CCardFooter>
    </div>
  );
}
