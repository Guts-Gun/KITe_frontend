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

function ReceiverList() {
  return (
    <div>
      <CCard className="m-4">
        <CCardHeader>
          <strong>주소록 리스트</strong>
        </CCardHeader>
        <CCardBody>
          <CRow className="mt-3 mb-3">
            <Menu />
          </CRow>
          <CRow className="mt-3 mb-3">
            <CFormLabel className="mt-3 mb-3">주소록</CFormLabel>
            <List/>
          </CRow>
        </CCardBody>
    </CCard>
    </div>
  )
}
export default ReceiverList

function Menu() {
  return (
    <div>
      <CRow className="mb-3">
        <CRow>
          <CCol className="col-sm-2"> 
            <CFormLabel >필터</CFormLabel>
          </CCol>
          <CCol className="col-sm-3"> 
            <CInputGroup>
              <CFormSelect>
                <option value="Phone">그룹1</option>
                <option value="Phone">그룹2</option>
              </CFormSelect>
            </CInputGroup>
          </CCol>
          <CCol className="col-sm-5"> 
          <CInputGroup>
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
        </CRow>
      </CRow>
      <CRow>
        <CCol className="col-sm-2"> 
          <CFormLabel>변경</CFormLabel>
        </CCol>
        <CCol className="col-sm-2"> 
        <GroupMoveModal/>
        </CCol>
        <CCol className="col-sm-2"> 
        <CButton color="danger" variant="outline">삭제</CButton>
        </CCol>
      </CRow>
    </div>
  )
}
function GroupMoveModal(){
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="info" variant="outline" onClick={() => setVisible(!visible)}>그룹 이동</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>그룹 이동</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className="mb-3">
            <CFormLabel htmlFor="inputPassword">
              이전 그룹
            </CFormLabel>
            <CInputGroup>
              <CFormInput 
                placeholder="그룹1"
                disabled/>
            </CInputGroup>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="staticEmail">
              이동할 그룹
            </CFormLabel>
            <CInputGroup>
              <CFormSelect>
                <option value="Phone">안</option>
                <option value="Phone">뇽</option>
                <option value="Phone">뇽</option>
              </CFormSelect>
            </CInputGroup>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="success">그룹 생성</CButton>
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