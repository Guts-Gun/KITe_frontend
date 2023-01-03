import React from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CFormSelect,
  CFormLabel,
  CFormInput,
  CForm
} from '@coreui/react'

function SenderList() {
  return (
    <div>
      <Filter />
      <List />
    </div>
  )
}
export default SenderList

function Filter() {
  return (
    <div>
      <CForm className="row g-3">
        <div className="col-auto">
        <CButton color="danger" key="delete" active={true} disabled={false}>
          희원 삭제
        </CButton>
        </div>
        <div className="col-auto">
          <p>그룹선택</p>
        </div>
        <div className="col-auto">
          <CFormSelect aria-label="Default select example">
            <option value="1">호</option>
            <option value="2">잇</option>
            <option value="3">잇</option>
          </CFormSelect>
        </div>
        <div className="col-auto">
          <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
            검색 
          </CFormLabel>
          <CFormInput id="inputPassword2" placeholder="발신번호 검색" />
        </div>
      </CForm>
    </div>

    
  )
}
function List() {
  return (
    <CTable striped>
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
            <input type="checkbox"></input>
          </CTableHeaderCell>
          <CTableDataCell>김세빈</CTableDataCell>
          <CTableDataCell>010-1234-1234</CTableDataCell>
          <CTableDataCell>가천대</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">
            <input type="checkbox"></input>
          </CTableHeaderCell>
          <CTableDataCell>고솔비</CTableDataCell>
          <CTableDataCell>010-1234-1234</CTableDataCell>
          <CTableDataCell>가천대</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">
            <input type="checkbox"></input>
          </CTableHeaderCell>
          <CTableDataCell>이지용</CTableDataCell>
          <CTableDataCell>010-1234-1234</CTableDataCell>
          <CTableDataCell>가천대</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">
            <input type="checkbox"></input>
          </CTableHeaderCell>
          <CTableDataCell>박윤재</CTableDataCell>
          <CTableDataCell>010-1234-1234</CTableDataCell>
          <CTableDataCell>가천대</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  )
}
