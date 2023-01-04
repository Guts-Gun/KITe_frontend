import React from 'react'
import {
  CButton,
  CFormSelect,
  CFormInput,
  CForm,
  CInputGroup,
  CRow,CCol,
  CCard,CCardHeader,CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormCheck,
  CPagination,CPaginationItem
} from '@coreui/react'

function SenderList() {
  return (
    <div>
      <CCard className="m-4">
        <CCardHeader>
          <strong>발신번호 리스트</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="mt-3 mb-3">
            <Filter />
          </CRow>
          <CRow className="mt-3 mb-3">
            <List/>
          </CRow>
        </CCardBody>
    </CCard>
    </div>
  )
}
export default SenderList

function Filter() {
  return (
    <div>
      <CRow>
        <CCol>
          <CForm className="row g-3">
            <CCol className="col-sm-3">
              <CInputGroup className="mb-1">
                <CFormSelect>
                  <option value="Phone">그룹1</option>
                  <option value="Phone">그룹2</option>
                </CFormSelect>
              </CInputGroup>
              </CCol>
              <CCol className="col-sm-5">
                <CInputGroup className="mb-1">
                    <CFormSelect>
                      <option value="Phone">번호 검색</option>
                      <option value="Name">이름 검색</option>
                    </CFormSelect>
                  <CFormInput type="text"/>        
                </CInputGroup>
              </CCol>
              <CCol className="col-sm-2">
                <CButton variant="outline" >검색</CButton>
              </CCol>
              <CCol className="col-sm-2">
                <CButton color="danger" variant="outline">삭제</CButton>
              </CCol>
          </CForm>
        </CCol>
      </CRow>
    </div>
  )
}


function List() {
  return (
    <div>
      <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col"></CTableHeaderCell>
          <CTableHeaderCell scope="col">이름</CTableHeaderCell>
          <CTableHeaderCell scope="col">전화번호</CTableHeaderCell>
          <CTableHeaderCell scope="col">그룹</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableHeaderCell scope="row">
            <CFormCheck id="flexCheckDefault"/>
          </CTableHeaderCell>
          <CTableDataCell>김세빈</CTableDataCell>
          <CTableDataCell>010-1234-1234</CTableDataCell>
          <CTableDataCell>가천대</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">
            <CFormCheck id="flexCheckDefault"/>
          </CTableHeaderCell>
          <CTableDataCell>고솔비</CTableDataCell>
          <CTableDataCell>010-1234-1234</CTableDataCell>
          <CTableDataCell>가천대</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">
            <CFormCheck id="flexCheckDefault"/>
          </CTableHeaderCell>
          <CTableDataCell>이지용</CTableDataCell>
          <CTableDataCell>010-1234-1234</CTableDataCell>
          <CTableDataCell>가천대</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">
            <CFormCheck id="flexCheckDefault"/>
          </CTableHeaderCell>
          <CTableDataCell>박윤재</CTableDataCell>
          <CTableDataCell>010-1234-1234</CTableDataCell>
          <CTableDataCell>가천대</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>

      <CPagination aria-label="Page navigation example">
        <CPaginationItem aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </CPaginationItem>
        <CPaginationItem>1</CPaginationItem>
        <CPaginationItem>2</CPaginationItem>
        <CPaginationItem>3</CPaginationItem>
        <CPaginationItem aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </CPaginationItem>
      </CPagination>
    </div>
  )
}