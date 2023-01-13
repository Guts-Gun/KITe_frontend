import React from 'react'
import {CButton, CButtonGroup, CCard, CCardBody, CCarousel, CCarouselItem, CCol, CRow} from '@coreui/react'
import UsageCard from "./component/UsageCard";
import ShortCut from "./component/ShortCut";
import SendingInfoCard from "./component/SendingInfoCard";


function UserConsole() {

  const totalUsages = [
    { title: 'sms 사용량',type: "sms", usage: 500, totalUsage: 40, color: 'success' },
    { title: 'email 사용량',type: "e-mail", usage: 600, totalUsage: 50, color: 'success' },
    { title: 'kakao 사용량', type: "kakao", usage: 700, totalUsage: 60, color: 'success'}
  ];
  const totalSendingInfo = [
    {id : 1, title : "2023-01-06 15:00:00", status : "완료", type : "sms", totalCount : 1000, successRate : 95, detailLink : "#"},
    {id : 2, title : "2023-01-07 15:00:00", status : "대기", type : "email", totalCount : 2000, successRate : 0, detailLink : "#"},
    {id : 3, title : "2023-01-08 15:00:00", status : "완료", type : "kakao", totalCount : 1000, successRate : 99, detailLink : "#"}
  ];


  return (
    <div>
      <CRow>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 className="card-title mb-0">

                </h4>
              </CCol>
            </CRow>


            <CRow className = 'mt-3'>
              <CCol sm={12}>
                <h4 id="traffic" className="card-title mb-0">
                  요약
                </h4>
              </CCol>
              <CCol sm = {6}>
                <CCarousel controls indicators dark>
                  {totalUsages.map((item, index) =>(
                    <CCarouselItem key = {index}>
                      <UsageCard title={item.title} type={item.type} usage={item.usage} totalUsage={item.totalUsage}/>
                    </CCarouselItem>
                  ))}
                </CCarousel>
              </CCol>


              <CCol sm = {6}>
                <CRow>
                  <CButtonGroup role="group">
                    <ShortCut title={"sms"} link={'/#/sendSms'}/>
                    <ShortCut title={"email"} link={'#/sendEmail'}/>
                  </CButtonGroup>
                </CRow>
              </CCol>
            </CRow>


          </CCardBody>
        </CCard>
      </CRow>

      <CRow>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  나의 발송
                </h4>
              </CCol>
              <CCol sm={7}>
                <CButtonGroup className="float-end ">
                  {['ALL', 'SMS', 'e-Mail', 'Kakao'].map((value) => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'ALL'}
                    >
                      {value}
                    </CButton>
                  ))}
                </CButtonGroup>
              </CCol>
            </CRow>


            <CRow className = 'mt-3'>
              {totalSendingInfo.map((item, index) =>(
                <SendingInfoCard key = {index} sendingId={item.id} title={item.title} status = {item.status} type={item.type} totalCount={item.totalCount} successRate={item.successRate} detailLink = {item.detailLink}/>
                  ))}
            </CRow>


          </CCardBody>
        </CCard>


      </CRow>

    </div>
  );
}

export default UserConsole;
