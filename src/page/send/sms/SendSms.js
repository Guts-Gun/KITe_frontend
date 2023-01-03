import React, {useEffect, useState} from 'react'
import {
  CButton,
  CCard, CCardBody, CCardHeader, CCardFooter,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CInputGroup,
  CListGroup,
  CListGroupItem,
  CFormSelect, 
  CAlert,
  CFormSwitch,
  CFormCheck,
  CTable,
  CTableHeaderCell,
  CTableBody,
  CTableRow,
  CTableHead,
  CTableDataCell,
  CNav, 
  CNavItem, 
  CNavLink,
  CTabContent, 
  CTabPane,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilMinus } from '@coreui/icons';


const SendSms = () => {

  // 수신자선택 - 탭
  const [activeKey, setActiveKey] = useState(1);

  // 수신자선택 - 그룹보내기
  const [groupId, setGroupId] = useState(null);


  // 수신자선택 - 주소록검색
  const [type, setType] = useState("");
  const [keyword, setKeyword] = useState("");


  // 전송시간 - 예약발송여부
  const [sendReserv, setSendReserv] = useState(false);

  // 예약발송 스위치
  function changeSwitch(e){ 
    const checked = e.target.checked;
    setSendReserv(checked);
};



  return (
    <>
      <CCard className="m-4">
        <CCardHeader>
          <strong>SMS/MMS 발송 </strong>
          {/* <small></small> */}
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">


            <CRow className="mt-3 mb-3">
                <CFormLabel className="col-sm-3">수신자 선택</CFormLabel>
                  <div className="col-sm-9">
                  <CNav role="tablist" variant="tabs">
                <CNavItem>
                  <CNavLink
                    active={activeKey === 1}
                    onClick={() => setActiveKey(1)}
                  >
                    직접입력
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    active={activeKey === 2}
                    onClick={() => setActiveKey(2)}
                  >
                    그룹 검색
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink 
                    active={activeKey === 3}
                    onClick={() => setActiveKey(3)}
                  >
                    주소록 검색
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>


                <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                  <CRow className="mt-1">
                   <CInputGroup className="mb-1">
                      <CFormInput type="text" onChange={(e) => setKeyword(e.target.value)}/>
                      <CButton variant="outline" >추가</CButton>
                    </CInputGroup>
                    </CRow>
                </CTabPane>

                <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                  <CRow className="mt-1">
                    <CInputGroup className="mb-1">
                        <CFormSelect onChange={(e) => setGroupId(e.target.value)}>
                          <option value="Phone">그룹1</option>
                          <option value="Phone">그룹2</option>
                        </CFormSelect>
                        <CButton variant="outline" >검색</CButton>
                      </CInputGroup>
                      <CTable>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          <CTableRow>
                            <CTableHeaderCell scope="row">
                            <CFormCheck id="flexCheckDefault" defaultChecked/>
                            </CTableHeaderCell>
                            <CTableDataCell>고솔비</CTableDataCell>
                            <CTableDataCell>010-4010-9537</CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableHeaderCell scope="row">
                            <CFormCheck id="flexCheckDefault" defaultChecked/>
                            </CTableHeaderCell>
                            <CTableDataCell>고솔비</CTableDataCell>
                            <CTableDataCell>010-4010-9537</CTableDataCell>
                          </CTableRow>
                          <CTableRow>
                            <CTableHeaderCell scope="row">
                            <CFormCheck id="flexCheckDefault" defaultChecked/>
                            </CTableHeaderCell>
                            <CTableDataCell>고솔비</CTableDataCell>
                            <CTableDataCell>010-4010-9537</CTableDataCell>
                          </CTableRow>
                        </CTableBody>
                      </CTable>
                      <CCol lg={12} className="text-end">
                        <CButton color="success" variant="outline">
                          추가 
                        </CButton>
                       </CCol>
                    </CRow>
                </CTabPane>
                <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 3}>
                  <CRow className="mt-1">
                    <CInputGroup className="mb-1">
                      <CFormSelect onChange={(e) => setType(e.target.value)}>
                        <option value="Phone">번호 검색</option>
                        <option value="Name">이름 검색</option>
                      </CFormSelect>
                      <CFormInput type="text" onChange={(e) => setKeyword(e.target.value)}/>
                      <CButton variant="outline" >검색</CButton>
                    </CInputGroup>
                    <CTable>
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell scope="col">#</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                          <CTableRow>
                          <CTableHeaderCell scope="row">
                              <CIcon
                                className="CButton"
                                icon={cilPlus}
                                size="sm"
                                // onClick={(e) => {
                                //   addSendItemHandler(e, member)
                                // }}
                              ></CIcon>
                            </CTableHeaderCell>
                            <CTableDataCell>고솔비</CTableDataCell>
                            <CTableDataCell>010-4010-9537</CTableDataCell>
                           
                          </CTableRow>
                      </CTableBody>
                    </CTable>
                  </CRow>
                </CTabPane>
            </CTabContent>


                  
                </div>
              </CRow>

              <CRow className="mt-3 mb-3">
                <CFormLabel className="col-sm-3">전송 대상</CFormLabel>
                <div className="col-sm-9">
                  <CListGroup className="mb-1">
                      <CListGroupItem active className="d-flex">
                          전송 대상 (총 10명) 
                          <div className="ms-auto">
                          <CButton
                                color="light"
                                size="sm"
                                variant="outline"
                                shape="rounded-pill"
                                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                              >
                                초기화
                              </CButton>
                          </div>
                      </CListGroupItem>
                      <div className='custom_height'>
                        <CListGroupItem  className="d-flex">
                          <span>고솔비 (010-4010-9537)</span>
                          <div className="ms-auto">
                          <CButton
                                color="danger"
                                size="sm"
                                variant="outline"
                                shape="rounded-pill"
                                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                              >
                                <CIcon className="CButton" icon={cilMinus} size="sm"/>
                              </CButton>
                          </div>
                        </CListGroupItem>
                        <CListGroupItem  className="d-flex">
                          <span>고솔비 (010-4010-9537)</span>
                          <div className="ms-auto">
                          <CButton
                                color="danger"
                                size="sm"
                                variant="outline"
                                shape="rounded-pill"
                                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                              >
                                <CIcon className="CButton" icon={cilMinus} size="sm"/>
                              </CButton>
                          </div>
                        </CListGroupItem>
                        <CListGroupItem  className="d-flex">
                          <span>고솔비 (010-4010-9537)</span>
                          <div className="ms-auto">
                          <CButton
                                color="danger"
                                size="sm"
                                variant="outline"
                                shape="rounded-pill"
                                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                              >
                                <CIcon className="CButton" icon={cilMinus} size="sm"/>
                              </CButton>
                          </div>
                        </CListGroupItem>
                        <CListGroupItem  className="d-flex">
                          <span>고솔비 (010-4010-9537)</span>
                          <div className="ms-auto">
                          <CButton
                                color="danger"
                                size="sm"
                                variant="outline"
                                shape="rounded-pill"
                                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                              >
                                <CIcon className="CButton" icon={cilMinus} size="sm"/>
                              </CButton>
                          </div>
                        </CListGroupItem>
                        <CListGroupItem  className="d-flex">
                          <span>고솔비 (010-4010-9537)</span>
                          <div className="ms-auto">
                          <CButton
                                color="danger"
                                size="sm"
                                variant="outline"
                                shape="rounded-pill"
                                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                              >
                                <CIcon className="CButton" icon={cilMinus} size="sm"/>
                              </CButton>
                          </div>
                        </CListGroupItem>
                        <CListGroupItem  className="d-flex">
                          <span>고솔비 (010-4010-9537)</span>
                          <div className="ms-auto">
                          <CButton
                                color="danger"
                                size="sm"
                                variant="outline"
                                shape="rounded-pill"
                                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                              >
                                <CIcon className="CButton" icon={cilMinus} size="sm"/>
                              </CButton>
                          </div>
                        </CListGroupItem>
                        <CListGroupItem  className="d-flex">
                          <span>고솔비 (010-4010-9537)</span>
                          <div className="ms-auto">
                          <CButton
                                color="danger"
                                size="sm"
                                variant="outline"
                                shape="rounded-pill"
                                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                              >
                                <CIcon className="CButton" icon={cilMinus} size="sm"/>
                              </CButton>
                          </div>
                        </CListGroupItem>
                        <CListGroupItem  className="d-flex">
                          <span>고솔비 (010-4010-9537)</span>
                          <div className="ms-auto">
                          <CButton
                                color="danger"
                                size="sm"
                                variant="outline"
                                shape="rounded-pill"
                                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                              >
                                <CIcon className="CButton" icon={cilMinus} size="sm"/>
                              </CButton>
                          </div>
                        </CListGroupItem>
                        <CListGroupItem  className="d-flex">
                          <span>고솔비 (010-4010-9537)</span>
                          <div className="ms-auto">
                          <CButton
                                color="danger"
                                size="sm"
                                variant="outline"
                                shape="rounded-pill"
                                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                              >
                                <CIcon className="CButton" icon={cilMinus} size="sm"/>
                              </CButton>
                          </div>
                        </CListGroupItem>
                        <CListGroupItem  className="d-flex">
                          <span>고솔비 (010-4010-9537)</span>
                          <div className="ms-auto">
                          <CButton
                                color="danger"
                                size="sm"
                                variant="outline"
                                shape="rounded-pill"
                                // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                              >
                                <CIcon className="CButton" icon={cilMinus} size="sm"/>
                              </CButton>
                          </div>
                        </CListGroupItem>
                        </div>
                    </CListGroup>
                  </div>
                </CRow>

            <CRow className="mb-3">
              <CFormLabel className="col-sm-3">전송시간</CFormLabel>
              <CCol xs={9}>
                  <CFormSwitch label="예약 발송" id="formSwitchCheckChecked" onChange={changeSwitch}/>
                  {sendReserv? (<> <CRow>
                      <CCol xs={6}>
                        <CFormInput type="date"/>
                    </CCol>
                    <CCol xs={6}>
                        <CFormInput type="time" />
                    </CCol>
                  </CRow></>):null}
                 
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-3">문자 분류</CFormLabel>
              <div className="col-sm-9">
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="1" label="광고" defaultChecked/>
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="2" label="단순알림(공지)"/>
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="3" label="공직선거" />
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox4" value="4" label="수신동의확인" />
              </div>
            </CRow>

            <CRow className="mb-3">
              <CFormLabel className="col-sm-3">전송 내용</CFormLabel>
              <div className="col-sm-9">
                <CFormTextarea
                  rows="3"
                  // onChange={(e)=>{setGroupDescription(e.target.value)}}
                ></CFormTextarea>
              </div>
            </CRow>

  
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CCol lg={12} className="text-end">
            <CButton color="success" variant="outline">
              발송하기 
            </CButton>
          </CCol>
        </CCardFooter>
      </CCard>
    </>

  )
}

export default SendSms
