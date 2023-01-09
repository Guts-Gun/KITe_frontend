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
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CImage,
  CCallout,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CWidgetStatsF
} from '@coreui/react';
import { CChart } from '@coreui/react-chartjs';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilMinus, cilMediaSkipForward, cilDollar } from '@coreui/icons';
import phoneImg from 'src/assets/images/phone.png';


const SendSms = () => {

  const [visible, setVisible] = useState(false)


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
  
  // 
  const [sendReplace, setSendReplace] = useState(false);

  // 대체발송 스위치
  function changeSwitch2(e){ 
    const checked = e.target.checked;
    setSendReplace(checked);
  };

  // 템플릿
  const [template, setTemplate] = useState(null);
  const [description, setDescription] = useState('');
  
  
  // 중계사 비율 - 탭
  const [activeKey2, setActiveKey2] = useState(1);
  const [brokerType, setBrokerType] = useState(1);

  const [brokerRatio1, setBrokerRatio1] = useState(40);
  const [brokerRatio2, setBrokerRatio2] = useState(40);
  const [brokerRatio3, setBrokerRatio3] = useState(20);

  return (
    <>

      <COffcanvas placement="end" visible={visible} onHide={() => setVisible(false)}>
        <COffcanvasHeader>
          <COffcanvasTitle>SMS/MMS 발송 매뉴얼</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          <p>SMS/MMS 발송 매뉴얼</p>
          <CImage src={phoneImg} width={100}/>
        </COffcanvasBody>
      </COffcanvas>

      <CCard className="m-4">
        <CCardHeader>
          <CRow>
            <CCol lg={10} ><strong>SMS/MMS 발송 </strong></CCol>
            <CCol lg={2} className="text-end">
              <CButton sm onClick={() => setVisible(true)}>예시보기</CButton>
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CRow className="mt-3 mb-3">
                <CFormLabel className="col-sm-3">수신자 선택</CFormLabel>
                  <CCol className="col-sm-9">
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
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
            
            <CRow className="mb-3">
              <CFormLabel className="col-sm-3">전송 시간</CFormLabel>
              <CCol xs={9}>
                  <CFormSwitch label="예약 발송" id="reserv_send" onChange={changeSwitch}/>
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
              <CFormLabel className="col-sm-3">대체 발송</CFormLabel>
              <CCol xs={9}>
                  <CFormSwitch label="발송 실패 시 대체 플랫폼 발송 " id="formSwitchCheckChecked" onChange={changeSwitch2}/>
                  {sendReplace? (<><p>sms/mms 발송 실패 시, email, kakao 알림톡 순으로 발송 됩니다.</p></>):null}
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CFormLabel className="col-sm-3">발신 번호</CFormLabel>
              <CCol xs={9}>
                 <CInputGroup className="mb-1">
                  <CFormSelect onChange={(e) => setGroupId(e.target.value)}>
                        <option value="0101111111">010-1111-1111</option>
                        <option value="01040109537">010-4010-9537</option>
                      </CFormSelect>
                </CInputGroup>
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CFormLabel className="col-sm-3">문자 분류</CFormLabel>
              <CCol className="col-sm-9">
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="1" label="광고" defaultChecked/>
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="2" label="단순알림(공지)"/>
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="3" label="공직선거" />
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox4" value="4" label="수신동의확인" />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CFormLabel className="col-sm-3">전송 내용</CFormLabel>
              <CCol className="col-sm-9">
                <CRow>
                  <CCol sm={12} md={8}>
                    <p>전송상태 / <code>단문메세지</code></p>
                    <CRow className="mb-1">
                      <CFormSelect onChange={(e) => setTemplate(e.target.value)}>
                        <option value="" disabled>내용 템플릿 선택</option>
                        <option value="0101111111">템플릿1</option>
                        <option value="01040109537">템플릿2</option>
                      </CFormSelect>
                    </CRow>
                    <CRow>
                      <CFormTextarea
                        rows="10"
                        text="140byte 초과 및 이미지나 동영상 첨부 시 MMS"
                        onChange={(e)=>{setDescription(e.target.value)}}
                        />
                    </CRow>
                
                  </CCol>
                  <CCol  sm={12} md={4} className="mt-3">
                    <div className='custom_div'>
                      <div className='custom_msg'>[미리보기]<br/>{description}</div>
                    </div>
                </CCol>
                </CRow>
                <CRow className='mt-3'>
                      <CAccordion>
                        <CAccordionItem itemKey={1}>
                          <CAccordionHeader>문자열 치환하기 (고객명 자동삽입기능)</CAccordionHeader>
                          <CAccordionBody>
                            <strong><code>%고객명%</code>을 입력하시면 고객명 항목에 있는 내용이 변환되어 입력됩니다.</strong>
                            <p>주소록 성명(이름)항목에 있는 내용이 입력되며 단문은 한글기준 3자(6byte), 장문은 제한 없습니다.</p>
                          </CAccordionBody>
                        </CAccordionItem>
                      </CAccordion>
                    </CRow>
              </CCol>
            </CRow>

            <CRow className="mb-3">

{/* 
            대체발송 여부 : sms 실패 시 이메일 전송 할건지
중계사 비율 설정 방법: 추천 리스트(가장 빠른 거, 가장 느린 거, 가장 안정적인거)/커스텀 비율 */}


                <CFormLabel className="col-sm-3">중계사 비율</CFormLabel>
                <CCol className="col-sm-9">
                  <CRow>
                    <CNav role="tablist" variant="tabs">
                      <CNavItem><CNavLink active={activeKey2 === 1} onClick={() => setActiveKey2(1)}> 중계사 비율 입력 </CNavLink> </CNavItem>
                      <CNavItem><CNavLink active={activeKey2 === 2} onClick={() => setActiveKey2(2)}> 추천 리스트 </CNavLink></CNavItem>
                    </CNav>
                      
                    <CTabContent>
                      <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey2 === 1}>
                        <CRow>
                          <CCol sm={12} md={8}>
                            <CTable>
                              <CTableHead>
                                <CTableRow>
                                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                  <CTableHeaderCell scope="col">중계사 이름</CTableHeaderCell>
                                  <CTableHeaderCell scope="col">가격(원)</CTableHeaderCell>
                                  {/* <CTableHeaderCell scope="col">속도</CTableHeaderCell> */}
                                  <CTableHeaderCell scope="col">비율(%)</CTableHeaderCell>
                                </CTableRow>
                              </CTableHead>
                              <CTableBody>
                                  <CTableRow>
                                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                    <CTableDataCell>KT</CTableDataCell>
                                    <CTableDataCell>120</CTableDataCell>
                                    {/* <CTableDataCell>KT</CTableDataCell> */}
                                    <CTableDataCell><CFormInput type="number" value={brokerRatio1} onChange={(e) => setBrokerRatio1(e.target.value)} /></CTableDataCell>
                                  </CTableRow>
                                  <CTableRow>
                                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                    <CTableDataCell>LG</CTableDataCell>
                                    <CTableDataCell>80</CTableDataCell>
                                    {/* <CTableDataCell>LG</CTableDataCell> */}
                                    <CTableDataCell><CFormInput type="number" value={brokerRatio2} onChange={(e) => setBrokerRatio2(e.target.value)}/></CTableDataCell>
                                  </CTableRow>
                                  <CTableRow>
                                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                    <CTableDataCell>SKT</CTableDataCell>
                                    <CTableDataCell>70</CTableDataCell>
                                    {/* <CTableDataCell>SKT</CTableDataCell> */}
                                    <CTableDataCell><CFormInput type="number" value={brokerRatio3} onChange={(e) => setBrokerRatio3(e.target.value)} /></CTableDataCell>
                                  </CTableRow>
                                </CTableBody>
                              </CTable>
                            </CCol>

                            <CCol sm={12} md={4}>
                              <CChart
                                type="doughnut"
                                data={{
                                  labels: ['KT', 'LG', 'SKT'],
                                  datasets: [
                                    {
                                      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                                      data: [brokerRatio1, brokerRatio2, brokerRatio3],
                                    },
                                  ],
                                }}/>
                              </CCol>
                            </CRow>
                        </CTabPane>

                        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey2 === 2}>
                          <CRow className='mt-3'>
                            <CCol xs={6}>
                              <CWidgetStatsF
                                onClick={() => setBrokerType(1)}
                                className={brokerType == 1? "custom_background_color":""}
                                color="primary"
                                icon={<CIcon icon={cilMediaSkipForward} height={24} />}
                                // title="Widget title"
                                value="속도 우선"/>
                            </CCol>
                            <CCol xs={6}>
                              <CWidgetStatsF
                                onClick={() => setBrokerType(2)}
                                className={brokerType == 2? "custom_background_color":""}
                                color="warning"
                                icon={<CIcon icon={cilDollar} height={24} />}
                                // title="Widget title"
                                value="가격 우선"/>
                            </CCol>
                          </CRow>
                        </CTabPane>
                      </CTabContent>


                  

                  
          
                  </CRow>
                </CCol>
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