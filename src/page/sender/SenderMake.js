import React ,{useState} from 'react'
import { CFormCheck,CFormInput, CFormLabel, CRow, CFormSelect,CButton,CInputGroup,
  CCard,CCardHeader,CCardBody,CCardFooter,CCol,
  CTable,CTableHead,CTableBody,CTableRow,CTableHeaderCell,CTableDataCell,
CListGroup,CListGroupItem} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { cilPlus, cilMinus } from '@coreui/icons';
function SenderMake() {
  return (
    <div>
      <CCard className="m-4">
        <CCardHeader>
          <strong>발신번호 추가</strong>
        </CCardHeader>
        <CCardBody>
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
        </CCardBody>
      <CCardFooter>
          <CCol lg={12} className="text-end">
            <CButton color="success" variant="outline" variactive={true} disabled={false}>
              희원 추가
            </CButton>
          </CCol>
        </CCardFooter>
    </CCard>

    </div>
  )
}
export default SenderMake

