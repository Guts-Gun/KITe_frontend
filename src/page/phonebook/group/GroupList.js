import React,{ useState } from 'react'
import {
  CCard,
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
  CModalTitle
} from '@coreui/react'

function GroupList() {
  return (
  <div>
    <Filter/>
    <List/>
  </div>
)}

export default GroupList

function Filter(){
  return(
    <div>
      <CButton color="warning" key="delete" active={true} disabled={false}>
          이름 바꾸기
      </CButton>
      <CButton key="delete" active={true} disabled={false}>
          희원 복사
      </CButton>
      <CButton color="danger" key="delete" active={true} disabled={false}>
          그룹 삭제
      </CButton>
        <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
          검색 
        </CFormLabel>
      <CFormInput id="inputPassword2" placeholder="발신번호 검색" />
      <MakeGroupModal/>
    </div>
  )
}
function MakeGroupModal(){
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="success" onClick={() => setVisible(!visible)}>그룹 생성</CButton>
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
      <CRow>
          <CCard style={{ width: '18rem' }}>
            <CCardBody>
              <CCardTitle>학생</CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">설명맨</CCardSubtitle>
              <CCardLink href="#">전화번호 내역 확인</CCardLink>
              <CCardLink href="#">전송 내역 확인</CCardLink>
              <CCardText>200명</CCardText>
            </CCardBody>
          </CCard>
          <CCard style={{ width: '18rem' }}>
            <CCardBody>
              <CCardTitle>학생</CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">설명맨</CCardSubtitle>
              <CCardLink href="#">전화번호 내역 확인</CCardLink>
              <CCardLink href="#">전송 내역 확인</CCardLink>
              <CCardText>200명</CCardText>
            </CCardBody>
          </CCard>
          <CCard style={{ width: '18rem' }}>
            <CCardBody>
              <CCardTitle>학생</CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">설명맨</CCardSubtitle>
              <CCardLink href="#">전화번호 내역 확인</CCardLink>
              <CCardLink href="#">전송 내역 확인</CCardLink>
              <CCardText>200명</CCardText>
            </CCardBody>
          </CCard>
          <CCard style={{ width: '18rem' }}>
            <CCardBody>
              <CCardTitle>학생</CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">설명맨</CCardSubtitle>
              <CCardLink href="#">전화번호 내역 확인</CCardLink>
              <CCardLink href="#">전송 내역 확인</CCardLink>
              <CCardText>200명</CCardText>
            </CCardBody>
          </CCard>
          <CCard style={{ width: '18rem' }}>
            <CCardBody>
              <CCardTitle>학생</CCardTitle>
              <CCardSubtitle className="mb-2 text-medium-emphasis">설명맨</CCardSubtitle>
              <CCardLink href="#">전화번호 내역 확인</CCardLink>
              <CCardLink href="#">전송 내역 확인</CCardLink>
              <CCardText>200명</CCardText>
            </CCardBody>
          </CCard>
        </CRow>
      </div>
  );
}