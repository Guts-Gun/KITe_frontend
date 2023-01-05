import React, {useEffect, useState} from 'react'
import {
  CButton,
  CCard, CCardBody, CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CRow,
  CInputGroup,
  CFormCheck,
  CTable,
  CTableHeaderCell,
  CTableBody,
  CTableRow,
  CTableHead,
  CTableDataCell,
  CInputGroupText,
  CFormTextarea,
  CPagination,
  CPaginationItem,
  CModal,
  CModalBody,
  CModalContent,
  CModalDialog,
  CModalFooter,
  CModalHeader,
  CModalTitle
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilMinus } from '@coreui/icons';
import phoneImg from 'src/assets/images/phone.png';


const TemplateList = () => {

  const [visibleRegModal, setVisibleRegModal] = useState(false);

  return (
    <>
    <CModal alignment="center" backdrop="static" visible={visibleRegModal} onClose={() => setVisibleRegModal(false)}>
      <CModalHeader>
        <CModalTitle>템플릿 등록</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon1">이름</CInputGroupText>
            <CFormInput value="" />
          </CInputGroup>
        <CInputGroup>
        <CInputGroupText>내용</CInputGroupText>
          <CFormTextarea aria-label="With textarea" rows="10" >
          </CFormTextarea>
        </CInputGroup>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" variant="outline" onClick={() => setVisibleRegModal(false)}>
          취소
        </CButton>
        <CButton color="success" variant="outline">저장</CButton>
      </CModalFooter>
    </CModal>

      <CCard className="m-4">
        <CCardHeader>
          <strong>템플릿 리스트 </strong>
          {/* <small></small> */}
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CRow className="mt-3 mb-3">
            <CCol sm={12} md={6}>
              <CRow className="mb-1">
              <CCol xs="auto" className="me-auto">
                  <CButton color="danger" size="sm" variant="outline">삭제</CButton>
                </CCol>
                <CCol xs="auto">
                  <CButton color="primary" size="sm" variant="outline" onClick={() => setVisibleRegModal(!visibleRegModal)}>등록</CButton>

                 </CCol>
              </CRow>
              <CTable hover>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                    <CFormCheck id="flexCheckDefault"/>
                    </CTableHeaderCell>
                    <CTableDataCell>템플릿1</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                    <CFormCheck id="flexCheckDefault"/>
                    </CTableHeaderCell>
                    <CTableDataCell>템플릿2</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                    <CFormCheck id="flexCheckDefault"/>
                    </CTableHeaderCell>
                    <CTableDataCell>템플릿3</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                    <CFormCheck id="flexCheckDefault"/>
                    </CTableHeaderCell>
                    <CTableDataCell>템플릿4</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                    <CFormCheck id="flexCheckDefault"/>
                    </CTableHeaderCell>
                    <CTableDataCell>템플릿5</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>

              <CPagination align="center">
                <CPaginationItem aria-label="Previous" disabled>
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                <CPaginationItem active>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>
              </CPagination>

            </CCol>

            <CCol sm={12} md={6}>
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">이름</CInputGroupText>
                  <CFormInput value="템플릿2" readOnly/>
                </CInputGroup>
              <CInputGroup>
              <CInputGroupText>내용</CInputGroupText>
                <CFormTextarea aria-label="With textarea" rows="10" readOnly>
                  문자 발송 내용 템플릿 테스트22
                </CFormTextarea>
              </CInputGroup>
            </CCol>

          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  </>

  )
}

export default TemplateList
