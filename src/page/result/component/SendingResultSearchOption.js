import React from "react";
import {CButton, CCol, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText, CRow} from "@coreui/react";

function SendingResultSearchOption() {

  return (
    <div>
      <CRow className='mt-1'>
        <CCol className="col-sm-3">
          <CFormLabel>발송타입</CFormLabel>
        </CCol>
        <CCol className="col-sm-9">
          <CInputGroup>
            <CFormSelect>
              <option value="">SMS/MMS</option>
              <option value="">e-mail</option>
              <option value="">카카오톡</option>
            </CFormSelect>
          </CInputGroup>
        </CCol>
      </CRow>
      <CRow className='mt-1'>
        <CCol className="col-sm-3">
          <CFormLabel>성공여부</CFormLabel>
        </CCol>
        <CCol className="col-sm-9">
          <CInputGroup>
            <CFormSelect>
              <option value="">성공</option>
              <option value="">일부성공</option>
              <option value="">실패</option>
            </CFormSelect>
          </CInputGroup>
        </CCol>
      </CRow>
      <CRow className='mt-1'>
        <CCol className="col-sm-3">
          <CFormLabel>등록 시각</CFormLabel>
        </CCol>
        <CCol className="col-sm-9">
          <CRow>
            <CInputGroup>
              <CFormInput type="date"/>
              <CFormInput type="time"/>
              <CInputGroupText>~</CInputGroupText>
              <CFormInput type="date"/>
              <CFormInput type="time"/>
            </CInputGroup>

          </CRow>
        </CCol>
      </CRow>

      <CRow className='mt-1'>
        <CCol lg={12} className="text-end">
          <CButton color="primary" variant="outline">
            검색
          </CButton>
        </CCol>
      </CRow>
    </div>
  );
}

export default SendingResultSearchOption;
