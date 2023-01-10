import React,{ useState } from 'react'
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
  CPagination,CPaginationItem,
  CFormLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter
} from '@coreui/react'

function SenderEmailList() {
  return (
    <div>
      <CCard className="m-4">
        <CCardHeader>
          <strong>발신 이메일 리스트</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="mt-3 mb-3">
            <Menu />
          </CRow>
          <CRow className="mt-3 mb-3">
            <List/>
          </CRow>
        </CCardBody>
    </CCard>
    </div>
  )
}
export default SenderEmailList

function Menu() {
  return (
    <div>
      <CRow className="mb-3">
          <CCol className="col-sm-2"> 
            <SenderMakeModal/>
            <CButton color="info" variant="outline">수정</CButton> 
            <CButton color="danger" variant="outline">삭제</CButton> 
          </CCol>
          <CCol className="col-sm-2"> 
          </CCol>
          <CCol className="col-sm-8"> 
          <CInputGroup>
              <CFormSelect>
                <option value="Phone">이메일 검색</option>
                <option value="Name">이름 검색</option>
                </CFormSelect>
              <CFormInput type="text"/> 
            <CButton variant="outline" >검색</CButton>      
            </CInputGroup>
          </CCol>
      </CRow>
    </div>
  )
}
function SenderMakeModal(){
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="success" variant="outline" onClick={() => setVisible(!visible)}>생성</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>발신 이메일 추가</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className="mb-3">
            <CFormLabel htmlFor="inputPassword">
              이름
            </CFormLabel>
            <CInputGroup>
              <CFormInput/>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="staticEmail">
              이메일
            </CFormLabel>
            <CInputGroup>
              <CFormInput/>
            </CInputGroup>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="success">생성</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

function List() {
  return (
    <div>
      <CRow className="mb-3">
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">이름</CTableHeaderCell>
              <CTableHeaderCell scope="col">이메일</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">
                <CFormCheck id="flexCheckDefault"/>
              </CTableHeaderCell>
              <CTableDataCell>김세빈</CTableDataCell>
              <CTableDataCell>sbscsue@gmail.com</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">
                <CFormCheck id="flexCheckDefault"/>
              </CTableHeaderCell>
              <CTableDataCell>고솔비</CTableDataCell>
              <CTableDataCell>sbscsue@gmail.com</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">
                <CFormCheck id="flexCheckDefault"/>
              </CTableHeaderCell>
              <CTableDataCell>이지용</CTableDataCell>
              <CTableDataCell>sbscsue@gmail.com</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">
                <CFormCheck id="flexCheckDefault"/>
              </CTableHeaderCell>
              <CTableDataCell>박윤재</CTableDataCell>
              <CTableDataCell>sbscsue@gmail.com</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CRow>
      
      <CRow className="mb-3 justify-content-center">
        <CCol lg={12}>
          <CPagination align="center" aria-label="Page navigation example">
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
        </CCol>
      </CRow>
    </div>
  )
}