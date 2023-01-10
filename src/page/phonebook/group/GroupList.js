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
  CListGroup,
  CListGroupItem,
  CBadge,
  CProgress,
  CProgressBar,
  CButtonGroup,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSend,cilOptions,cilHamburgerMenu } from "@coreui/icons";



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
            <CButton color="danger" variant="outline">
                그룹 삭제
            </CButton>
          </CCol>
          <CCol className="col-sm-4">
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
      <CRow>
        <CCard className="mb-4">
          <CCardBody>
            <CRow className = 'mt-3'>
            <CCol xs={12} sm = {6} md = {4}>
                <CCard>
                  <CCardBody>
                    <CCardTitle>
                      <CRow className="mb-3">
                        <CCol lg={10}>
                          <CFormCheck id="flexCheckDefault"/>
                          <span className="ms-2">학생1</span>
                        </CCol>
                        <CCol lg={2} className="text-end">
                          <CDropdown alignment="end">
                            <CDropdownToggle color="transparent" caret={false} className="p-0">
                              <CIcon icon={cilHamburgerMenu}/>
                            </CDropdownToggle>
                            <CDropdownMenu>
                              <CDropdownItem>그룹 복사</CDropdownItem>
                              <CDropdownItem>수정</CDropdownItem>
                              <CDropdownItem>삭제</CDropdownItem>
                            </CDropdownMenu>
                          </CDropdown>
                        </CCol>
                      </CRow>
                      <CCardSubtitle className="mb-2 text-medium-emphasis">설명맨</CCardSubtitle>
                    </CCardTitle>
                  </CCardBody>
                  <CListGroup flush>  
                    <CListGroupItem>인원 수 : 2000</CListGroupItem>
                    <CListGroupItem>생성일 : 2022.03.21</CListGroupItem>
                    <CListGroupItem>수정일 : 2022.03.25</CListGroupItem>
                  </CListGroup>
                  <CCardBody>
                    <CRow>
                    <CCol>
                    <CCardLink href="#">전화번호 내역 확인</CCardLink>
                    </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs={12} sm = {6} md = {4}>
                <CCard>
                  <CCardBody>
                    <CCardTitle>
                      <CRow className="mb-3">
                        <CCol lg={10}>
                          <CFormCheck id="flexCheckDefault"/>
                          <span className="ms-2">학생2</span>
                        </CCol>
                        <CCol lg={2} className="text-end">
                          <CDropdown alignment="end">
                            <CDropdownToggle color="transparent" caret={false} className="p-0">
                              <CIcon icon={cilHamburgerMenu}/>
                            </CDropdownToggle>
                            <CDropdownMenu>
                              <CDropdownItem>그룹 복사</CDropdownItem>
                              <CDropdownItem>수정</CDropdownItem>
                              <CDropdownItem>삭제</CDropdownItem>
                            </CDropdownMenu>
                          </CDropdown>
                        </CCol>
                      </CRow>
                      <CCardSubtitle className="mb-2 text-medium-emphasis">설명맨</CCardSubtitle>
                    </CCardTitle>
                  </CCardBody>
                  <CListGroup flush>  
                    <CListGroupItem>인원 수 : 2000</CListGroupItem>
                    <CListGroupItem>생성일 : 2022.03.21</CListGroupItem>
                    <CListGroupItem>수정일 : 2022.03.25</CListGroupItem>
                  </CListGroup>
                  <CCardBody>
                    <CRow>
                    <CCol>
                    <CCardLink href="#">전화번호 내역 확인</CCardLink>
                    </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
              </CCol>

              <CCol xs={12} sm = {6} md = {4}>
                <CCard>
                  <CCardBody>
                    <CCardTitle>
                      <CRow className="mb-3">
                        <CCol lg={10}>
                          <CFormCheck id="flexCheckDefault"/>
                          <span className="ms-2">학생3</span>
                        </CCol>
                        <CCol lg={2} className="text-end">
                          <CDropdown alignment="end">
                            <CDropdownToggle color="transparent" caret={false} className="p-0">
                              <CIcon icon={cilHamburgerMenu}/>
                            </CDropdownToggle>
                            <CDropdownMenu>
                              <CDropdownItem>그룹 복사</CDropdownItem>
                              <CDropdownItem>수정</CDropdownItem>
                              <CDropdownItem>삭제</CDropdownItem>
                            </CDropdownMenu>
                          </CDropdown>
                        </CCol>
                      </CRow>
                      <CCardSubtitle className="mb-2 text-medium-emphasis">설명맨</CCardSubtitle>
                    </CCardTitle>
                  </CCardBody>
                  <CListGroup flush>  
                    <CListGroupItem>인원 수 : 2000</CListGroupItem>
                    <CListGroupItem>생성일 : 2022.03.21</CListGroupItem>
                    <CListGroupItem>수정일 : 2022.03.25</CListGroupItem>
                  </CListGroup>
                  <CCardBody>
                    <CRow>
                    <CCol>
                    <CCardLink href="#">전화번호 내역 확인</CCardLink>
                    </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CRow>
    </div>
        
)
}



function CopyGroupModal(){
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CDropdownItem  visible="false" color="success" variant="outline" onClick={() => setVisible(!visible)}>그룹 생성</CDropdownItem>
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


