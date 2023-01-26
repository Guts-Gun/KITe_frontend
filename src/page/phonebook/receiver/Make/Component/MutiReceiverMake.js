import React from 'react';
import { CFormInput, CFormLabel, CRow, CFormSelect, CButton, CInputGroup, CCardBody, CCardFooter, CCol } from '@coreui/react';
import { AppendList } from '.././ReceiverMake';

export function MutiReceiverMake() {
  return (
    <div>
      <CCardBody>
        <CRow>
          <CCol className='col-sm-6'>
            <CRow className="mb-3 m-1">
              <CFormLabel>그룹</CFormLabel>
              <CInputGroup>
                <CFormSelect>
                  <option value="Phone">그룹1</option>
                  <option value="Phone">그룹2</option>
                </CFormSelect>
              </CInputGroup>
            </CRow>
            <CRow className="mb-3 m-1">
              <CFormLabel>이름</CFormLabel>
              <CInputGroup>
                <CFormInput id="inputPassword" />
              </CInputGroup>
            </CRow>
            <CRow className="mb-3 m-1">
              <CFormLabel>전화번호</CFormLabel>
              <CInputGroup>
                <CFormInput id="inputPassword" />
              </CInputGroup>
            </CRow>
            <CRow className="mb-3 m-1">
              <CFormLabel>이메일</CFormLabel>
              <CInputGroup>
                <CFormInput id="inputPassword" />
              </CInputGroup>
            </CRow>
            <CCol lg={12} className="text-end">
              <CButton variant="outline">추가</CButton>
            </CCol>
          </CCol>
          <CCol className='col-sm-6'>
            <AppendList />
          </CCol>
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
