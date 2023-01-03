import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
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
      <button>희원삭제</button>
      <select name="job">
        <option value="">그룹선택</option>
        <option value="학생">학생</option>
        <option value="회사원">회사원</option>
        <option value="기타">기타</option>
      </select>
      <input placeholder="이름/전화번호 검색"></input>
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
