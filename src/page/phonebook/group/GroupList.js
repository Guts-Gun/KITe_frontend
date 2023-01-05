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

function GroupList() {
  return (
  <div>
    <CCard className="m-4">
      <CCardHeader>
        <strong>그룹 검색</strong>
      </CCardHeader>
      <CCardBody>
        <Filter/>
        <List/>
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
          <CCol className="col-sm-2">
            <MakeGroupModal/>
          </CCol>
          <CCol className="col-sm-2">
            <CButton color="info" variant="outline">
                그룹 복사
            </CButton>
          </CCol>
          <CCol className="col-sm-2">
            <CButton color='warning' variant='outline'>
              이름 바꾸기
            </CButton>
          </CCol>
          <CCol className="col-sm-2">
            <CButton color="danger" variant="outline">
                그룹 삭제
            </CButton>
          </CCol>
          <CCol className="col-sm-4">
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

function List(){
  return(
    <div> 
      <CRow className="justify-content-center">
          <CCard style={{ width: '18rem' }}>
            <CCardBody>
              <CFormCheck id="flexCheckDefault"/>
              <CCardTitle>학생</CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">설명맨</CCardSubtitle>
              <CRow>
                <CCardLink href="#">전화번호 내역 확인</CCardLink>
                <CCardLink href="#">전송 내역 확인</CCardLink>
              </CRow>
              <CCardText>200명</CCardText>
            </CCardBody>
          </CCard>
          <CCard style={{ width: '18rem' }}>
            <CCardBody>
              <CFormCheck id="flexCheckDefault"/>
              <CCardTitle>학생</CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">설명맨</CCardSubtitle>
              <CRow>
                <CCardLink href="#">전화번호 내역 확인</CCardLink>
                <CCardLink href="#">전송 내역 확인</CCardLink>
              </CRow>
              <CCardText>200명</CCardText>
            </CCardBody>
          </CCard>
          <CCard style={{ width: '18rem' }}>
            <CCardBody>
              <CFormCheck id="flexCheckDefault"/>
              <CCardTitle>학생</CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">설명맨</CCardSubtitle>
              <CRow>
                <CCardLink href="#">전화번호 내역 확인</CCardLink>
                <CCardLink href="#">전송 내역 확인</CCardLink>
              </CRow>
              <CCardText>200명</CCardText>
            </CCardBody>
          </CCard>
          <CCard style={{ width: '18rem' }}>
            <CCardBody>
              <CFormCheck id="flexCheckDefault"/>
              <CCardTitle>학생</CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">설명맨</CCardSubtitle>
              <CRow>
                <CCardLink href="#">전화번호 내역 확인</CCardLink>
                <CCardLink href="#">전송 내역 확인</CCardLink>
              </CRow>
              <CCardText>200명</CCardText>
            </CCardBody>
          </CCard>
          <CCard style={{ width: '18rem' }}>
            <CCardBody>
            <CFormCheck id="flexCheckDefault"/>
              <CCardTitle>학생</CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">설명맨</CCardSubtitle>
              <CRow>
                <CCardLink href="#">전화번호 내역 확인</CCardLink>
                <CCardLink href="#">전송 내역 확인</CCardLink>
              </CRow>
              <CCardText>200명</CCardText>
            </CCardBody>
          </CCard>
        </CRow>
      </div>
  );
}