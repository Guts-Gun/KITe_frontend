import React from 'react'
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CFormCheck,
    CPagination,CPaginationItem
  } from '@coreui/react'
function PhoneBookList() {
    return (
      <div>
        <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col"></CTableHeaderCell>
            <CTableHeaderCell scope="col">이름</CTableHeaderCell>
            <CTableHeaderCell scope="col">전화번호</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">
              <CFormCheck id="flexCheckDefault"/>
            </CTableHeaderCell>
            <CTableDataCell>김세빈</CTableDataCell>
            <CTableDataCell>010-1234-1234</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">
              <CFormCheck id="flexCheckDefault"/>
            </CTableHeaderCell>
            <CTableDataCell>고솔비</CTableDataCell>
            <CTableDataCell>010-1234-1234</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">
              <CFormCheck id="flexCheckDefault"/>
            </CTableHeaderCell>
            <CTableDataCell>이지용</CTableDataCell>
            <CTableDataCell>010-1234-1234</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">
              <CFormCheck id="flexCheckDefault"/>
            </CTableHeaderCell>
            <CTableDataCell>박윤재</CTableDataCell>
            <CTableDataCell>010-1234-1234</CTableDataCell>
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
export default PhoneBookList;