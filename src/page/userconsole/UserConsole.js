import React, {useEffect, useState} from 'react'
import {CButton, CButtonGroup, CCard, CCardBody, CCarousel, CCarouselItem, CCol, CRow} from '@coreui/react'
import UsageCard from "./component/UsageCard";
import ShortCut from "./component/ShortCut";
import SendingInfoCard from "./component/SendingInfoCard";
import axios from "axios";
import apiConfig from "../../lib/apiConfig";


function UserConsole() {



  const [totalUsages,setTotalUsages] = useState([
    { title: 'sms 사용량', type: "SMS", usage: "0", usageCap: "0", color: 'success' },
    { title: 'email 사용량', type: "e-Mail", usage: "0", usageCap: "0", color: 'success' },
    { title: 'kakao 사용량', type: "Kakao", usage: "0", usageCap: "0", color: 'success'}
  ]);
  useEffect(()=>{
    axios.get(apiConfig.resultUsage)
      .then(function (response) {
        console.log(response.data);
        if (response.data.length > 0) {
          setTotalUsages(response.data);
        }
      }).catch(function (error) {
      // 오류발생시 실행
    }).then(function() {
      // 항상 실행
    });
  },[]);

  const [totalSendingInfo,setTotalSendingInfo] = useState([
    {id : "1", title : "2023-01-06 15:00:00", status : "완료", sendingType : "SMS", totalSending : "1000", successRate : "95", detailLink : "#"},
    {id : "2", title : "2023-01-07 15:00:00", status : "대기", sendingType : "e-Mail", totalSending : "2000", successRate : "0", detailLink : "#"},
    {id : "3", title : "2023-01-08 15:00:00", status : "완료", sendingType : "Kakao", totalSending : "1000", successRate : "99", detailLink : "#"}
  ]);
  useEffect(()=>{
    axios.get(apiConfig.resultSending)
      .then(function (response) {
        console.log(response.data);
        setTotalSendingInfo(response.data);

      }).catch(function (error) {
      // 오류발생시 실행
    }).then(function() {
      // 항상 실행
    });
  },[]);

  const [sendingFilter,setSendingFilter] = useState("ALL");

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
                  {
                    totalUsages.map((item, index) =>(
                      <CCarouselItem key = {index}>
                        <UsageCard title={item.type} type={item.type} usage={item.usage} usageCap={item.usageCap}/>
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
                      active={value === sendingFilter}
                      onClick={() => setSendingFilter(value)}
                    >
                      {value}
                    </CButton>
                  ))}
                </CButtonGroup>
              </CCol>
            </CRow>


            <CRow className = 'mt-3'>
              {sendingFilter === "ALL"
                ? totalSendingInfo.map((item, index) =>(
                <SendingInfoCard key = {index} sendingId={item.id} title={item.title} status = {item.status} type={item.sendingType} totalCount={item.totalSending} successRate={item.successRate} detailLink = {item.detailLink}/>))
                : totalSendingInfo.filter(item => item.sendingType === sendingFilter).map((item, index) =>(
                <SendingInfoCard key = {index} sendingId={item.id} title={item.title} status = {item.status} type={item.sendingType} totalCount={item.totalSending} successRate={item.successRate} detailLink = {item.detailLink}/>
              ))}
            </CRow>


          </CCardBody>
        </CCard>


      </CRow>

    </div>
  );
}

export default UserConsole;
