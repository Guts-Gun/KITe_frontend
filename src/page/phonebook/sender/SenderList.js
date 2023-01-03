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
          <Filter />
          <List/>
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
        <CCol lg={12} className="text-end">
          <CButton color="danger" variant="outline">삭제</CButton>
        </CCol>
        <CCol>
          <CForm className="row g-3">
            <div className="col-auto">
            <CInputGroup className="mb-1">
              <CFormSelect>
                <option value="Phone">그룹1</option>
                <option value="Phone">그룹2</option>
              </CFormSelect>
            </CInputGroup>
            </div>
            <div className="col-auto">
            <CInputGroup className="mb-1">
                <CFormSelect>
                  <option value="Phone">번호 검색</option>
                  <option value="Name">이름 검색</option>
                </CFormSelect>
              <CFormInput type="text"/>        
            </CInputGroup>
            </div>
            <div className="col-auto">
              <CButton variant="outline" >검색</CButton>
            </div>
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