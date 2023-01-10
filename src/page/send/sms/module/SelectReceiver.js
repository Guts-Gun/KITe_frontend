import React, {useEffect, useState} from 'react'
import {
    CButton,
    CCol,
    CFormInput,
    CFormLabel,
    CRow,
    CInputGroup,
    CListGroup,
    CListGroupItem,
    CFormSelect, 
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
    CCallout,
    CInputGroupText
} from '@coreui/react'
import { CChart } from '@coreui/react-chartjs';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilMinus} from '@coreui/icons';

const SelectReceiver = () => {

    // 수신자선택 - 탭
    const [activeKey, setActiveKey] = useState(1);
  
    // 수신자선택 - 그룹보내기
    const [groupId, setGroupId] = useState(null);
  
  
    // 수신자선택 - 주소록검색
    const [type, setType] = useState("");
    const [keyword, setKeyword] = useState("");

    

    return (
    <>
       <CRow className="mt-3 mb-3">
              <CFormLabel className="col-sm-2">수신자 선택</CFormLabel>
                <CCol xs={10}>
                  <CRow>
                  <CCol sm={12} md={6}>
                    <CNav role="tablist" variant="tabs">
                      <CNavItem><CNavLink active={activeKey === 1} onClick={() => setActiveKey(1)}> 입력 </CNavLink> </CNavItem>
                      <CNavItem><CNavLink active={activeKey === 2} onClick={() => setActiveKey(2)}> 그룹 </CNavLink></CNavItem>
                      <CNavItem><CNavLink active={activeKey === 3} onClick={() => setActiveKey(3)}> 주소록 </CNavLink></CNavItem>
                      <CNavItem><CNavLink active={activeKey === 4} onClick={() => setActiveKey(4)}> 엑셀 업로드 </CNavLink></CNavItem>
                    </CNav>

                    <CTabContent>
                        <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                          <CRow className="mt-3">
                          <CInputGroup className="mb-3">
                            <CInputGroupText id="basic-addon1">이름</CInputGroupText>
                            <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                          </CInputGroup>
                          <CInputGroup className="mb-3">
                            <CInputGroupText id="basic-addon1">전화번호</CInputGroupText>
                            <CFormInput placeholder="phone number" aria-label="phone number" aria-describedby="basic-addon1"/>
                          </CInputGroup>
                          <CInputGroup className="mb-3">
                            <CInputGroupText id="basic-addon1">이메일</CInputGroupText>
                            <CFormInput placeholder="email" aria-label="email" aria-describedby="basic-addon1"/>
                          </CInputGroup>
                          </CRow>
                          <CCol lg={12} className="text-end">
                                <CButton color="success" variant="outline">
                                  추가 
                                </CButton>
                              </CCol>
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
                                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                                  </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                  <CTableRow>
                                    <CTableHeaderCell scope="row">
                                    <CFormCheck id="flexCheckDefault" defaultChecked/>
                                    </CTableHeaderCell>
                                    <CTableDataCell>고솔비</CTableDataCell>
                                    <CTableDataCell>010-4010-9537</CTableDataCell>
                                    <CTableDataCell>gsb0904@hanmail.net</CTableDataCell>

                                  </CTableRow>
                                  <CTableRow>
                                    <CTableHeaderCell scope="row">
                                    <CFormCheck id="flexCheckDefault" defaultChecked/>
                                    </CTableHeaderCell>
                                    <CTableDataCell>고솔비</CTableDataCell>
                                    <CTableDataCell>010-4010-9537</CTableDataCell>
                                    <CTableDataCell>gsb0904@hanmail.net</CTableDataCell>

                                  </CTableRow>
                                  <CTableRow>
                                    <CTableHeaderCell scope="row">
                                    <CFormCheck id="flexCheckDefault" defaultChecked/>
                                    </CTableHeaderCell>
                                    <CTableDataCell>고솔비</CTableDataCell>
                                    <CTableDataCell>010-4010-9537</CTableDataCell>
                                    <CTableDataCell>gsb0904@hanmail.net</CTableDataCell>

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
                                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
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
                                    <CTableDataCell>gsb0904@hanmail.net</CTableDataCell>
                                </CTableRow>
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
                                    <CTableDataCell>gsb0904@hanmail.net</CTableDataCell>
                                  </CTableRow>
                              </CTableBody>
                            </CTable>
                          </CRow>
                        </CTabPane>
                        <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 4}>
                          <CCallout color="primary">
                          <CButton component="input" type="button" color="primary" value="샘플파일 다운로드"/><br/>
                            * 등록할 파일을 선택해 주세요. <br/>
                            * 반드시 위에 샘플 엑셀파일을 다운로드 하신 후 작성해서 등록해 주세요.
                          </CCallout>
                          <CInputGroup>
                            <CFormInput type="file" accept=".xls,.xlsx" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                            <CButton type="button" color="secondary" variant="outline" id="inputGroupFileAddon04">업로드</CButton>
                          </CInputGroup>
                        </CTabPane>
                    </CTabContent>


                  </CCol>
                  <CCol sm={12} md={6}>
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
                            <CCol sm={11}>
                              <span className='me-3'>고솔비</span>
                              <span className='me-3'>010-4010-9537</span> 
                              <span className='me-3'>gsb0904@hanmail.net</span>
                            </CCol>
                            <CCol sm={1}>
                                <CButton
                                    color="danger"
                                    size="sm"
                                    variant="outline"
                                    shape="rounded-pill"
                                    // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                                  >
                                    <CIcon className="CButton" icon={cilMinus} size="sm"/>
                                  </CButton>
                            </CCol>
                          </CListGroupItem>
                          <CListGroupItem  className="d-flex">
                            <CCol sm={11}>
                              <span className='me-3'>고솔비</span>
                              <span className='me-3'>010-4010-9537</span> 
                              <span className='me-3'>gsb0904@hanmail.net</span>
                            </CCol>
                            <CCol sm={1}>
                                <CButton
                                    color="danger"
                                    size="sm"
                                    variant="outline"
                                    shape="rounded-pill"
                                    // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                                  >
                                    <CIcon className="CButton" icon={cilMinus} size="sm"/>
                                  </CButton>
                            </CCol>
                          </CListGroupItem>
                          <CListGroupItem  className="d-flex">
                            <CCol sm={11}>
                              <span className='me-3'>고솔비</span>
                              <span className='me-3'>010-4010-9537</span> 
                              <span className='me-3'>gsb0904@hanmail.net</span>
                            </CCol>
                            <CCol sm={1}>
                                <CButton
                                    color="danger"
                                    size="sm"
                                    variant="outline"
                                    shape="rounded-pill"
                                    // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                                  >
                                    <CIcon className="CButton" icon={cilMinus} size="sm"/>
                                  </CButton>
                            </CCol>
                          </CListGroupItem>
                          <CListGroupItem  className="d-flex">
                            <CCol sm={11}>
                              <span className='me-3'>고솔비</span>
                              <span className='me-3'>010-4010-9537</span> 
                              <span className='me-3'>gsb0904@hanmail.net</span>
                            </CCol>
                            <CCol sm={1}>
                                <CButton
                                    color="danger"
                                    size="sm"
                                    variant="outline"
                                    shape="rounded-pill"
                                    // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                                  >
                                    <CIcon className="CButton" icon={cilMinus} size="sm"/>
                                  </CButton>
                            </CCol>
                          </CListGroupItem>
                          <CListGroupItem  className="d-flex">
                            <CCol sm={11}>
                              <span className='me-3'>고솔비</span>
                              <span className='me-3'>010-4010-9537</span> 
                              <span className='me-3'>gsb0904@hanmail.net</span>
                            </CCol>
                            <CCol sm={1}>
                                <CButton
                                    color="danger"
                                    size="sm"
                                    variant="outline"
                                    shape="rounded-pill"
                                    // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                                  >
                                    <CIcon className="CButton" icon={cilMinus} size="sm"/>
                                  </CButton>
                            </CCol>
                          </CListGroupItem>
                          <CListGroupItem  className="d-flex">
                            <CCol sm={11}>
                              <span className='me-3'>고솔비</span>
                              <span className='me-3'>010-4010-9537</span> 
                              <span className='me-3'>gsb0904@hanmail.net</span>
                            </CCol>
                            <CCol sm={1}>
                                <CButton
                                    color="danger"
                                    size="sm"
                                    variant="outline"
                                    shape="rounded-pill"
                                    // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                                  >
                                    <CIcon className="CButton" icon={cilMinus} size="sm"/>
                                  </CButton>
                            </CCol>
                          </CListGroupItem>
                          <CListGroupItem  className="d-flex">
                            <CCol sm={11}>
                              <span className='me-3'>고솔비</span>
                              <span className='me-3'>010-4010-9537</span> 
                              <span className='me-3'>gsb0904@hanmail.net</span>
                            </CCol>
                            <CCol sm={1}>
                                <CButton
                                    color="danger"
                                    size="sm"
                                    variant="outline"
                                    shape="rounded-pill"
                                    // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                                  >
                                    <CIcon className="CButton" icon={cilMinus} size="sm"/>
                                  </CButton>
                            </CCol>
                          </CListGroupItem>
                          <CListGroupItem  className="d-flex">
                            <CCol sm={11}>
                              <span className='me-3'>고솔비</span>
                              <span className='me-3'>010-4010-9537</span> 
                              <span className='me-3'>gsb0904@hanmail.net</span>
                            </CCol>
                            <CCol sm={1}>
                                <CButton
                                    color="danger"
                                    size="sm"
                                    variant="outline"
                                    shape="rounded-pill"
                                    // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                                  >
                                    <CIcon className="CButton" icon={cilMinus} size="sm"/>
                                  </CButton>
                            </CCol>
                          </CListGroupItem>
                          <CListGroupItem  className="d-flex">
                            <CCol sm={11}>
                              <span className='me-3'>고솔비</span>
                              <span className='me-3'>010-4010-9537</span> 
                              <span className='me-3'>gsb0904@hanmail.net</span>
                            </CCol>
                            <CCol sm={1}>
                                <CButton
                                    color="danger"
                                    size="sm"
                                    variant="outline"
                                    shape="rounded-pill"
                                    // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                                  >
                                    <CIcon className="CButton" icon={cilMinus} size="sm"/>
                                  </CButton>
                            </CCol>
                          </CListGroupItem>
                          <CListGroupItem  className="d-flex">
                            <CCol sm={11}>
                              <span className='me-3'>고솔비</span>
                              <span className='me-3'>010-4010-9537</span> 
                              <span className='me-3'>gsb0904@hanmail.net</span>
                            </CCol>
                            <CCol sm={1}>
                                <CButton
                                    color="danger"
                                    size="sm"
                                    variant="outline"
                                    shape="rounded-pill"
                                    // onClick= {setGroupUserList(groupUserList.filter((groupUserList) => groupUserList.userId !== user.userId))}
                                  >
                                    <CIcon className="CButton" icon={cilMinus} size="sm"/>
                                  </CButton>
                            </CCol>
                          </CListGroupItem>
                          </div>
                      </CListGroup>
                    </CCol>
                  </CRow>
                </CCol>
            </CRow>
    </>
    )    
}

export default SelectReceiver

