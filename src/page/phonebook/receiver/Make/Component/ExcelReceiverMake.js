import React from 'react';
import { CFormInput, CFormLabel, CRow, CFormSelect, CButton, CInputGroup, CCardBody, CCardFooter, CCol, CCallout } from '@coreui/react';
import { AppendList } from '../ReceiverMake';

export function ExcelReceiverMake() {
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
              <CFormLabel>엑셀 파일 입력</CFormLabel>
              <CCallout color="primary">
                <CButton component="input" type="button" color="primary" value="샘플파일 다운로드" /><br />
                * 등록할 파일을 선택해 주세요. <br />
                * 반드시 위에 샘플 엑셀파일을 다운로드 하신 후 작성해서 등록해 주세요.
              </CCallout>
              <CInputGroup>
                <CFormInput type="file" accept=".xls,.xlsx" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
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
