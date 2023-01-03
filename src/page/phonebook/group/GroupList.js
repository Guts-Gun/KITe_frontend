import React,{ useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CRow,
  CCol,
  CButton,
  CFormLabel,
  CFormInput,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CInputGroup,
  CFormSelect,
  CFormCheck,
  CForm,
} from '@coreui/react'
import PhoneBookList from 'src/component/sender/PhoneBookList'

function GroupList() {
  return (
  <div>
    <CCard className="m-4">
      <CCardHeader>
        <strong>그룹 검색</strong>
      </CCardHeader>
      <CCardBody>
        <Filter/>
        <PhoneBookList/>
      </CCardBody>
    </CCard>

  </div>
)}

export default GroupList

function Filter(){
  return(
    <div>
      <CCol className='mt-3 mb-3'>
        <CForm className="row">
          <CCol md={4}>
            <CButton color='warning' variant='outline'>
              이름 바꾸기
            </CButton>
          </CCol>
          <CCol md={4}>
            <CButton color="info" variant="outline">
                그룹 복사
            </CButton>
          </CCol>
          <CCol md={4}>
            <CButton color="danger" variant="outline">
                그룹 삭제
            </CButton>
          </CCol>
          <CCol md={4}>
            <MakeGroupModal/>
          </CCol>
          <CCol md={4}>
            <CInputGroup>
              <CFormInput type="text"/>
              <CButton variant="outline" >검색</CButton>
            </CInputGroup>
          </CCol>
        </CForm>
      </CCol>
    </div>
  )
}
function MakeGroupModal(){
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="success" variant="outline" onClick={() => setVisible(!visible)}>그룹 생성</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>그룹 생성</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className="mb-3">
            <CFormLabel htmlFor="staticEmail">
              그룹 이름
            </CFormLabel>
            <div className="col-sm-10">
              <CFormInput id="inputPassword" />
            </div>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="inputPassword">
              그룹 설명
            </CFormLabel>
            <div className="col-sm-10">
              <CFormInput id="inputPassword" />
            </div>
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